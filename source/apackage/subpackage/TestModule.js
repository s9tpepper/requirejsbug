/*global angular*/
(function () {
  'use strict';

  var TestModule = function TestModule() {
    var name = "a test module";

    var self = {
      getName: function getName() {
        return name;
      }
    };

    return self;
  };


  define([], function () {
    return TestModule;
  });
}());