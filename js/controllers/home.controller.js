/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenControllers.controller('HomeController', ['$scope', 'Stations', function($scope, Stations) {
    $scope.stations = Stations.query();
}]);