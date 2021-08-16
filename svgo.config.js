'use strict'

const { extendDefaultPlugins } = require('svgo');

module.exports = {
  floatPrecision: 2,
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2,
  },
  plugins: extendDefaultPlugins([
    {
      name: 'cleanupListOfValues'
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'fill',
        ],
      },
    },
    {
      name: 'removeUnknownsAndDefaults',
    },
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'sortAttrs',
    },
  ]),
};
