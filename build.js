#!/usr/bin/env node

'use strict'

const fs = require('fs');
const path = require('path');
// const { loadConfig, optimize } = require('svgo');

/**
 * Return directory structure and files as Object
 * @param {*} directory 
 * @param {*} done 
 */
async function directoryToObject(directory, done) {
  let results = [];

  fs.readdir(directory, function(error, list) {
    if (error) return done(error);

    /**
     * Filter hidden files from directory
     * e.g. .DS_STORE etc.
     */
    list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

    let pending = list.length;

    if (!pending) {
      return done(null, {
        type: 'folder',
        name: path.basename(directory),
        children: results,
      });
    }

    list.forEach(function(file) {
      file = path.resolve(directory, file);

      fs.stat(file, function(error, stat) {
        if (error) throw error;

        if (stat && stat.isDirectory()) {
          directoryToObject(file, function(error, result) {
            results.push({
              type: 'folder',
              name: path.basename(file),
              children: result,
            });

            if (!--pending) {
              done(null, results);
            }
          });
        } else {
          results.push({
            type: 'file',
            id: path.basename(file, '.svg'),
            name: path.basename(file),
          });

          if (!--pending) {
            done(null, results);
          }
        }
      });
    });
  });
};

/**
 * Optimise SVG files
 * @param {*} file 
 * @param {*} config 
 */
async function processFile(file) {
  const config = await loadConfig(path.join(__dirname, '../svgo.config.js'))
  // const filepath = path.join(iconsDir, file)
  // const basename = path.basename(file, '.svg')

  // const originalSvg = await fs.readFile(filepath, 'utf8')
  const optimizedSvg = await optimize(originalSvg, {
    path: file,
    ...config
  })
};

(async () => {
  try {
    const baseDirectory = path.join(__dirname, './src/');
    const output = 'icons.json';
    // const files = await fs.readdir(iconsDir)
    // const config = await loadConfig(path.join(__dirname, '../svgo.config.js'))

    // await Promise.all(files.map(file => processFile(file, config)))

    await directoryToObject(baseDirectory, function(error, result) {
      if (error) console.error(error);
      const data = JSON.stringify(result, null, 2);
      console.log(data);
      fs.writeFile(output, data, (error) => {
        if (error) throw error;
        console.log("JSON data is saved.");
      });
    });
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()

// fs.writeFile("test.txt", jsonData, function(err) {
//   if (err) {
//       console.log(err);
//   }
// });