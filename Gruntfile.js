module.exports = function(grunt) {
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          './server/public/scripts/client.min.js': './server/public/scripts/client.js'
        }
      }
    },
    sass: {
      build: {
        files: {
          'server/public/styles/main.css': 'server/public/styles/main.scss'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'server/public/styles/main.min.css': 'server/public/styles/main.css'
        }
      }
    },
    watch: {
      stylesheets: {
        files: ['server/public/styles/main.css', 'server/public/styles/main.scss'],
        tasks: ['sass', 'cssmin']
      },
      scripts:{
        files: ["server/public/scripts/client.js"],
        tasks:['uglify']
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
