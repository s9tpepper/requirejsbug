module.exports = function (grunt) {

  grunt.initConfig({
    jasmine_node: {
      spec: "./spec",
      projectRoot: "./",
      requirejs: true,
      forceExit: true,
      jUnit: {
        report: false,
        savePath : "./build/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      }
    },
    lint: {
      all: [
        'source/*.js',
        "source/controller/**",
        "source/model/**",
        "source/directives/**",
        "source/modules/**",
        "source/services/**",
        "source/view/*.js"
      ]
    },
    jshint: {
      options: {
        browser: true,
        white: false,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: false,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        multistr: true,
        strict: false,
        nonew: true,
        unused: false
      },
      globals: {}
    }
  });


  grunt.loadNpmTasks('grunt-jasmine-node');

  // Default task.
  grunt.registerTask('default', 'jasmine');

  grunt.registerTask('jasmine', 'lint jasmine_node');

};