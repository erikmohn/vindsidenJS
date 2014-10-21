/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenControllers.controller('StationController', ['$scope', '$routeParams', 'Station', 'Measurements', function($scope, $routeParams, Station, Measurements) {
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

    $scope.chartConfig = {
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: '[m/s]'
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'm/s'
        },
        legend: {
        },
        series: [
            series,
            ranges
        ]
    }
    });
}]);