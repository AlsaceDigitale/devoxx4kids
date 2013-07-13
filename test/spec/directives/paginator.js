'use strict';

describe('Directive: paginator', function () {
  beforeEach(module('devoxx4kidsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<paginator></paginator>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the paginator directive');
  }));
});
