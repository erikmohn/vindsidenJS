/**
 * Created by erik.mohn on 13.10.2014.
 */

function removeDecimals(num) {
    return Math.round(num*100)/100;
};

function drawStationWindChart(station) {


/*
     i = 5;
    angular.forEach(station , function(station) {
        addSeriesFrom(station, chart, i)
        i++;
    });*/



}

function addSeriesFrom(station, chart, index) {
    addAverageWindToChart(station, chart, index);
    addWindRangeToChart(station, chart, index);
};

function addAverageWindToChart(station, chart, index) {
    var average = station.Data.map(function (m) {return [ new Date(m.Time).valueOf(), removeDecimals(m.WindAvg)]; });

    var series = chart.addSeries(
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
        },true
    );
};

function addWindRangeToChart(station, chart, index) {
    var range = station.Data.map(function (m) { return [new Date(m.Time).valueOf(), removeDecimals(m.WindMin), removeDecimals(m.WindMax)]; });

    var series = chart.addSeries(
        {
            name: 'Max/min',
            data: range.reverse(),
            type: 'arearange',
            lineWidth: 0,
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        },true
    );
};