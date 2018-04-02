/*
* JavaScript task runner 
* grunt-contrib-watch runs a pre-defined task whenever a watched file changes 
* grunt-execute can be used to run the node app.js command
*/

module.exports = (grunt) => {
  grunt.initConfig({
    execute: {
      target: {
        src: ['App.js']
      }
    },
    watch: {
      scripts: {
        files: ['App.js'],
        tasks: ['execute'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
};