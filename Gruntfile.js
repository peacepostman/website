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
          'dist/css/app.min.css': 'sass/app.scss',
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
       src: 'dist/css/*.css'
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
        files: ['sass/*.scss', 'index.html'],
        tasks: ['default'],
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/app.min.js': ['js/app.js']
        }
      }
    },


    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'index.html',
          'dist/404.html': '404.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', [
    'sass:dist',
    'uglify:dist',
    'htmlmin:dist',
    'postcss',
    'watch'
  ]);
};
