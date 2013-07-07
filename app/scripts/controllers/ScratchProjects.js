'use strict';

angular.module('devoxx4kidsApp')
    .controller('ScratchProjectsCtrl', function ($scope) {
        $scope.projects = [
            '11274444',
            '11274438',
            '11274438'
        ];
        $scope.modulo = function () {
            return _.filter($scope.projects, function(n) {

            });
        };
    });
