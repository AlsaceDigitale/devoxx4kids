'use strict';

angular.module('devoxx4kidsApp')
  .filter('modulo', function () {
    return function (input) {
      return 'modulo filter: ' + input;
    };
  });
