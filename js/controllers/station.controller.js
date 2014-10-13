/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenControllers.controller('StationController', ['$scope', '$routeParams', 'Station', 'Measurements', function($scope, $routeParams, Station, Measurements) {
    $scope.station = Station.get({stationId: $routeParams.stationId}, function(station) {
        $scope.imageUrl = station.MeteogramImage;
        $scope.station = station;
    });

    Measurements.query({stationId: $routeParams.stationId}, function(measurements) {
        drawStationWindChart(measurements);
    });
}]);