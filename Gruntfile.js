module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/app.css': 'css/sass/app.scss',
        }
      }
    },

    postcss: {
     options: {
       map: false, // inline sourcemaps
       processors: [
         require('pixrem')(), // add fallbacks for rem units
         require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
         //require('cssnano')() // minify the result
       ]
     },
     dist: {
       src: 'css/*.css'
     }
   },


    watch: {
      configFiles: {
        files: [
          'Gruntfile.js'
        ],
        options: {
          reload: true,
        }
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['default'],
      },
      src: {
        files: ['css/*.css', 'css/sass/*.scss', 'index.html'],
        tasks: ['default'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', [
    'sass:dist',
    'postcss',
    'watch'
  ]);
};
