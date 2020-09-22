const fsExtra   = require('fs-extra');

// Metalsmith
var Metalsmith  = require('metalsmith');
var pug         = require('metalsmith-pug');
var ignore      = require('metalsmith-ignore');
var stylus      = require('metalsmith-stylus');
var serve       = require('metalsmith-serve');
var browserSync = require('metalsmith-browser-sync');
var browserify  = require('metalsmith-browserify');
var babel       = require('metalsmith-babel');

// Empty contents of build
fsExtra.emptyDirSync(__dirname + '/build')

// Babel options
var babelOptions = {
  presets: [["@babel/preset-env", { "targets": "defaults" }]]
};

// Metalsmith stuff
Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(ignore([
    'includes/*',
    'css/import/*'
  ]))
  .use(pug({useMetadata: true}))
  .use(stylus({
    master: 'site.styl',
    output: 'site.css',
    outputDir: '.'
  }))
  .use(browserSync({
    server: 'build',
    files: ['src/**/*']
  }))
  .use(browserify({
    'entries': [
      'js/app.js'
    ],
    "suppressNotFoundError": true
  }))
  .use(serve())
  .use(babel(babelOptions))
  .build(function(err, files) {
    if (err) { throw err; }
  });
