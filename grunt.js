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