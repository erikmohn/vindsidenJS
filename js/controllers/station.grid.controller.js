/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenControllers.controller('StationGridController', ['$scope', '$routeParams', 'Station', function($scope, $routeParams, Station) {
        $scope.station = Station.get({stationId: $routeParams.stationId}, function(station) {
        $scope.imageUrl = station.MeteogramImage;
        $scope.gridMeasurements = station.Data;
    });
}]);