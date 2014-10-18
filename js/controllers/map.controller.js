/**
 * Created by erik.mohn on 16.10.2014.
 */

vindsidenControllers.controller('MapController', ['$scope', '$routeParams', 'Station', function($scope, $routeParams, Station) {



    $scope.station = Station.get({stationId: $routeParams.stationId}, function(station) {
        $scope.imageUrl = station.MeteogramImage;
        $scope.station = station;
    });

    $scope.map = {
        center: {
            latitude: 65,
            longitude: 12
        },
        zoom: 4

    };

    $scope.marker = {
        coords: {
            latitude: 59.3037,
            longitude: 10.689869
        },
        show: false,
        id: 0
    };

    $scope.windowOptions = {
        visible: false
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;

    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

    $scope.title = "Window Title!";

}]);

