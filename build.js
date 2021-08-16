#!/usr/bin/env node

'use strict'

const fs = require('fs');
const path = require('path');
const { loadConfig, optimize } = require('svgo');
const aliases = require('./aliases.json');

async function directoryToObject(directory, done) {
  let results = [];

  fs.readdir(directory, async function(error, list) {
    if (error) throw error;

    // Filter hidden files from directory e.g. .DS_STORE
    list = list.filter(item => !(/(^|\/)\.[^/.]/g).test(item));

    list.forEach(function(file) {
      file = path.resolve(directory, file);

      fs.stat(file, function(error) {
        if (error) throw error;
        const id = path.basename(file, '.svg');
        results.push({
          id,
          file: path.basename(file),
          aliases: aliases[id],
        });

        if (!--list.length) {
          done(null, results);
        }
      });
    });
  });
}

async function directoryToJson(directory) {
  await directoryToObject(directory, function(error, result) {
    if (error) throw error;
    const data = JSON.stringify(result, null, 2);
    fs.writeFile('icons.json', data, (error) => {
      if (error) throw error;
    });
  });
}

async function processFile(directory, file, config) {
  const filepath = path.resolve(directory, file);
  const original = fs.readFileSync(filepath, 'utf8');
  const optimised = await optimize(original, {
    path: filepath,
    ...config
  }).data;

  fs.writeFileSync(filepath, optimised, 'utf8');
}

(async () => {
  try {
    const basePath = path.join(__dirname, './icons/');
    const svgoConfig = await loadConfig(path.join(__dirname, 'svgo.config.js'));
    const files = fs.readdirSync(basePath);
    await directoryToJson(basePath);
    await Promise.all(files.map(file => processFile(basePath, file, svgoConfig)));
  } catch (error) {
    throw error;
  }
})()
