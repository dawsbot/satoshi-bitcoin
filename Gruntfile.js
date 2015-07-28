module.exports = function(grunt) {

  grunt.initConfig({
    eslint: {
      target: ['index.js']
    },
    mochaTest: {
      test: {
        src: ['test/*.spec.js'],
        options: {
          reporter: 'spec'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['lint', 'test']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['mochaTest']);
};
