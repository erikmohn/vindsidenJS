/**
 * Created by erik.mohn on 12.10.2014.
 */
//Define an angular module for our app
var vindsiden = angular.module('vindsiden',
    [
        'ngRoute',
        'ngResource',
        'vindsidenControllers',
        'vindsidenServices',
        'highcharts-ng',
        'uiGmapgoogle-maps'
    ]);

vindsiden.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            }).
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutController'
            }).
            when('/fullmap', {
                templateUrl: 'partials/fullmap.html',
                controller: 'FullMapController'
            }).
            when('/settings', {
                templateUrl: 'partials/settings.html',
                controller: 'AboutController'
            }).
            when('/station/:stationId', {
                templateUrl: 'partials/station.html',
                controller: 'StationController'
            }).
            when('/stationgrid/:stationId', {
                templateUrl: 'partials/station.grid.html',
                controller: 'StationGridController'
            }).
            when('/map/:stationId', {
                templateUrl: 'partials/map.html',
                controller: 'MapController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

var vindsidenControllers = angular.module('vindsidenControllers', []);

var vindsidenServices = angular.module('vindsidenServices', ['ngResource']);


