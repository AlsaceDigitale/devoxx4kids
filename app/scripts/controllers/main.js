'use strict';

angular.module('devoxx4kidsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.images = ['1371914534806.jpg', 'P1060385.jpg', 'P1060398.jpg', 'P1060414.jpg', 'P1060431.jpg', 'P1060458.jpg', 'P1060481.jpg', 'P1060493.jpg', 'P1060525.jpg', 'P1060528.jpg'];
    $scope.itemClass = function (i) {
      if (i === 0) {
        return 'active item';
      } else {
        return 'item';
      }

    };
  });
