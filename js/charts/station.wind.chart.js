/**
 * Created by erik.mohn on 13.10.2014.
 */

function removeDecimals(num) {
    return Math.round(num*100)/100;
};

function drawStationWindChart(measurements) {

    average = measurements.map(function (m) { return [ new Date(m.Time).valueOf(), removeDecimals(m.WindAvg)]; });
    range = measurements.map(function (m) { return [new Date(m.Time).valueOf(), removeDecimals(m.WindMin), removeDecimals(m.WindMax)]; });


    chart = new Highcharts.Chart({
        chart: {

            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            renderTo: 'container'
        },
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

        series: [{
            name: 'Vind',
            data: average,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Max/min',
            data: range,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });

}