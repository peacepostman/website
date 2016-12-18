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

    // Preffix css with appropriate browser prefix
    postcss: {
     options: {
       map: true,
       processors: [
         require('pixrem')(),
         require('autoprefixer')({browsers: 'last 2 versions'})
       ]
     },
     dist: {
       src: 'dist/css/*.css'
     }
   },

   // Watch project's files
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
        files: ['sass/*.scss', 'js/*.js', 'index.html'],
        tasks: ['default'],
      }
    },

    // Compress js
    uglify: {
      dist: {
        files: {
          'dist/js/app.min.js': ['js/app.js']
        }
      }
    },

    // Add version suffixe on css & script
    processhtml: {
      options: {
        data: {
          version: '1.0.1'
        }
      },
      dist: {
        files: {
          'dist/index.html': 'index.html',
          'dist/404.html': '404.html'
        }
      }
    },

    // Commpress html
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'dist/index.html',
          'dist/404.html': 'dist/404.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.registerTask('default', [
    'sass:dist',
    'uglify:dist',
    'processhtml',
    'postcss',
    'htmlmin',
    'watch'
  ]);
};
