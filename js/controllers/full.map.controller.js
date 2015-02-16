/**
 * Created by erik.mohn on 21.10.2014.
 */
vindsidenControllers.controller('FullMapController', ['$scope', '$routeParams', 'Stations', function($scope, $routeParams, Stations) {
    console.log('Fetching stations')
    $scope.stations = Stations.query();


    $scope.map = {
        center: {
            latitude: 65,
            longitude: 12
        },
        zoom: 4,
        bounds: {}
    };
    $scope.options = {scrollwheel: false};

    $scope.stationMarkers = [];

    $scope.$watch(function() { return $scope.stations; }, function() {
        // Get the bounds from the map once it's loaded
        $scope.$watch(function() { return $scope.map.bounds; }, function(nv, ov) {

            if (!ov.southwest && nv.southwest && $scope.stationMarkers.length == 0) {
                createMarkers($scope);
            }
        }, true);
    });

    $scope.$watch(function() {return $scope.stations;}, function() {
       if ($scope.stations != null && $scope.stations.length > 0 && $scope.stationMarkers.length == 0) {
            createMarkers($scope);
       }
    },true);

}]);

function createMarkers($scope) {
    console.log('Stations ready!');

    var createMarkerForStation = function (station) {

        var ret = {
            id: station.Name,
            latitude: station.Latitude,
            longitude: station.Longitude,
            title: station.Name,
            show: false,
            image: station.Logo
        };
        ret.onClick = function() {
            console.log("Clicked!");
            ret.show = !ret.show;
        };
        return ret;
    };

    var markers = [];
    angular.forEach($scope.stations , function(station, key) {
        if (station.Show){
            markers.push(createMarkerForStation(station))
        }
    });
    $scope.stationMarkers = markers;
};

