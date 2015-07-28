module.exports = function(grunt) {

  grunt.initConfig({
    eslint: {
      target: ['index.js']
    },
    simplemocha: {
      src: ['test/*.spec.js'],
      options: {
        run: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['lint', 'test']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['simplemocha']);
};
