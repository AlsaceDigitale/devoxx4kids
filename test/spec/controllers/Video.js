'use strict';

describe('Controller: VideoCtrl', function () {

  // load the controller's module
  beforeEach(module('devoxx4kidsApp'));

  var VideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoCtrl = $controller('VideoCtrl', {
      $scope: scope
    });
  }));

});
