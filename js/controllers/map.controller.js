/**
 * Created by erik.mohn on 16.10.2014.
 */

vindsidenControllers.controller('MapController', ['$scope', '$routeParams', 'Station', function($scope, $routeParams, Station) {

    $scope.map = {
        center: {
            latitude: 65,
            longitude: 12
        },
        zoom: 4

    };

    $scope.clicked = function() {
      alert('Button clicked!');
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


    $scope.station = Station.get({stationId: $routeParams.stationId}, function(station) {
        $scope.imageUrl = station.MeteogramImage;
        $scope.station = station;


    var average = station.Data.map(function (m) {return [ new Date(m.Time).valueOf(), removeDecimals(m.WindAvg)]; });
    var series =
    {
        name: station.Name,
        data: average.reverse(),
        zIndex: 1,
        marker: {
            enabled : false,
            radius : 2,
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[0]
        }
    };

    var range = station.Data.map(function (m) { return [new Date(m.Time).valueOf(), removeDecimals(m.WindMin), removeDecimals(m.WindMax)]; });

    var ranges =
    {
        name: 'Max/min',
        data: range.reverse(),
        type: 'arearange',
        lineWidth: 0,
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0
    };


    $scope.roseConfig = {
        chart: {
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            width: 50,
            height: 50
        },
        title: {
          text: ''
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: '[m/s]'
            }
        },

        series: [
            series,
            ranges
        ]
    }
    });
}]);

