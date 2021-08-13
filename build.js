#!/usr/bin/env node

'use strict'

const fs = require('fs').promises;
const path = require('path');
const { loadConfig, optimize } = require('svgo');

async function directoryToObject(directory, done) {
  let results = [];

  fs.readdir(directory, async function(error, list) {
    if (error) return done(error);

    // Filter hidden files from directory e.g. .DS_STORE
    list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

    list.forEach(function(file) {
      file = path.resolve(directory, file);

      fs.stat(file, function(error) {
        if (error) throw error;

        results.push({
          id: path.basename(file, '.svg'),
          file: path.basename(file),
        });

        if (!--list.length) {
          done(null, results);
        }
      });
    });
  });
};

async function directoryToJson(directory) {
  await directoryToObject((directory), function(error, result) {
    if (error) console.error(error);
    const data = JSON.stringify(result, null, 2);
    console.log(data);
    fs.writeFile('icons.json', data, (error) => {
      if (error) throw error;
      console.log('JSON data is saved.');
    });
  });
};

async function processFile(directory, file, config) {
  const filepath = path.resolve(directory, file);
  const original = await fs.readFile(filepath, 'utf8');
  const optimised = await optimize(original, {
    path: filepath,
    ...config
  }).data;

  await fs.writeFile(filepath, optimised, 'utf8');
};

(async () => {
  try {
    const basePath = path.join(__dirname, './icons/');
    const svgoConfig = await loadConfig(path.join(__dirname, 'svgo.config.js'));
    const files = await fs.readdir(basePath);

    await directoryToJson(basePath);
    await Promise.all(files.map(file => processFile(basePath, file, svgoConfig)));
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
