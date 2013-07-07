'use strict';

angular.module('devoxx4kidsApp')
    .controller('MainCtrl', function ($scope) {
        $scope.images = ['1371914534806.jpg', 'P1060385.JPG', 'P1060398.JPG', 'P1060414.JPG', 'P1060431.JPG'];
        $scope.itemClass = function (i) {
            if (i == 0) {
                return "active item";
            } else {
                return "item";
            }

        };
    });
