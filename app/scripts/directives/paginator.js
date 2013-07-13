'use strict';

angular.module('devoxx4kidsApp')
  .directive('paginator', function ($compile, $timeout) {
    return {
      template: '<div class="row">'
        + '<div class="span12 text-center"><button class="btn btn-primary btn-large" ng-disabled="isFirstPage()" ng-click="decPage()">&lt;</button>'
        + '<h1 style="display: inline-block; vertical-align: middle;">&nbsp;&nbsp;{{paginator.currentPage+1}}/{{numberOfPages()}}&nbsp;&nbsp;</h1>'
        + '<button class="btn btn-primary btn-large" ng-disabled="isLastPage()" ng-click="incPage()">&gt;</button></div>'
        + '</div>',
      replace: true,
      restrict: 'E',
      scope: { items: '=' },
      compile: function compile(element, tAttrs, transclude) {
        return {
          pre: function preLink(scope, element, iAttrs, controller) {
          },
          post: function postLink(scope, element, iAttrs, controller) {
            scope.paginator = {
              pageSize: 4,
              currentPage: 0
            };

            scope.isFirstPage = function () {
              return scope.paginator.currentPage == 0;
            };

            scope.isLastPage = function () {
              return scope.paginator.currentPage >= scope.items.length / scope.paginator.pageSize - 1;
            };

            scope.incPage = function () {
              if (!scope.isLastPage()) {
                scope.paginator.currentPage++;
                updateItems();
              }
            };

            scope.decPage = function () {
              if (!scope.isFirstPage()) {
                scope.paginator.currentPage--;
                updateItems();
              }
            };

            scope.firstPage = function () {
              scope.paginator.currentPage = 0;
            };

            scope.numberOfPages = function () {
              return Math.ceil(scope.items.length / scope.paginator.pageSize);
            };

            var updateItems = function () {
              var start = scope.paginator.currentPage * scope.paginator.pageSize;
              var limit = scope.paginator.pageSize;
              scope.pageItems = scope.items.slice(start, start + limit);
            };
            updateItems();

            for (var i = 0; i < scope.paginator.pageSize; i++) {
              element.append($compile('<div class="span6" ng-show="item'+i+'">' +
                '<iframe allowtransparency="true" width="480" height="402" ng-src="http://scratch.mit.edu/projects/embed/{{ item' + i + ' }}/" frameborder="0" allowfullscreen></iframe>' +
                '<div><a ng-href="http://scratch.mit.edu/projects/{{ item' + i + ' }}">Voir le projet</a></div>' +
                '</div>')(scope));
            }

            scope.$watch('pageItems', function (value) {
              for (var i = 0; i < scope.paginator.pageSize; i++) {
                scope['item' + i] = value[i];
              }
            })

          }
        }
      }
    };
  });
