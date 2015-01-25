'use strict';

var path    = require('path');
var Promise = require('../../lib/ext/promise');
var cpd     = require('ember-cli-copy-dereference');

var rootPath = process.cwd();

module.exports = function copyFixtureFiles(sourceDir) {
  return new Promise(function(resolve) {
    resolve(cpd.sync(path.join(rootPath, 'tests', 'fixtures', sourceDir), '.'));
  });
};
