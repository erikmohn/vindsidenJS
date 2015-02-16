/**
 * Created by erik.mohn on 12.10.2014.
 */
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
            when('/map', {
                templateUrl: 'partials/map.html',
                controller: 'MapController'
            }).
            when('/about', {
                templateUrl: 'partials/about.html',
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
            otherwise({
                redirectTo: '/map'
            });
    }]);

var vindsidenControllers = angular.module('vindsidenControllers', []);

var vindsidenServices = angular.module('vindsidenServices', ['ngResource']);


