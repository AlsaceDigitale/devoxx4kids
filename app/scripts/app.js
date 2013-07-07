'use strict';

angular.module('devoxx4kidsApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/scratchProjects', {
                templateUrl: 'views/scratch-projects.html',
                controller: 'ScratchProjectsCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/video', {
                templateUrl: 'views/video.html',
                controller: 'VideoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function () {
        $('#myCarousel').carousel({interval: 2000});
    });
