/*
* JavaScript task runner 
* grunt-contrib-watch runs a pre-defined task whenever a watched file changes 
* grunt-execute can be used to run the node app.js command
*/
module.exports = (grunt) => {
  grunt.initConfig({
    execute: {
      target: {
        src: ['server.js']
      }
    },
    watch: {
      scripts: {
        files: ['server.js'],
        tasks: ['execute'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
};