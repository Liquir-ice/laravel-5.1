'use strict';

var del    = require('del');
var conn   = require('gulp-connect-php');
var gulp   = require('gulp');
var gutils = require('gulp-util');
var elixir = require('laravel-elixir');
require('laravel-elixir-jshint');
require('laravel-elixir-postcss');
require('laravel-elixir-useref');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.extend('remove', function(path) {

  new elixir.Task('remove', function(cb) {

    del(path, cb);

  });

});

elixir.extend('serve', function(options) {

  // Serve will only run during `gulp watch`.
  if (gutils.env._.indexOf('watch') > -1) {
    conn.server(options);
  }

  new elixir.Task('serve', function() {}).watch();

});

elixir(function(mix) {

  var port = 8000;

  mix
    .jshint()
    .remove(['public/css', 'public/js', 'public/build', 'public/img'])
    .copy('resources/assets/img/**/*.*', 'public/img')
    .copy('resources/assets/js/**/*.js', 'public/js')
    .postcss('**/*.css', {
      plugins: [
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('autoprefixer'),
      ]
    });

  if (elixir.config.production) {

    mix.useref({
        src: false
      })
      .version(['js/*.js', 'css/*.css']);

  } else {

    mix.serve({
      base: 'public',
      port: 8000,
      router: '../server.php',
      watch: true
    }).browserSync({
      proxy: 'localhost:' + port
    });

  }

});
