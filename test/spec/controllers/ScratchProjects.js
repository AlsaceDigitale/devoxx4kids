'use strict';

describe('Controller: ScratchProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('devoxx4kidsApp'));

  var ScratchProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScratchProjectsCtrl = $controller('ScratchProjectsCtrl', {
      $scope: scope
    });
  }));

});
