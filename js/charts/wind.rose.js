/**
 * Created by erik.mohn on 13.10.2014.
 */



function drawWindRose(station) {

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container'
        },
        data: [{
            "name": "&lt; 0.5 m/s",
            "data": [
                ["N", 1.81],
                ["NNE", 0.62],
                ["NE", 0.82],
                ["ENE", 0.59],
                ["E", 0.62],
                ["ESE", 1.22],
                ["SE", 1.61],
                ["SSE", 2.04],
                ["S", 2.66],
                ["SSW", 2.96],
                ["SW", 2.53],
                ["WSW", 1.97],
                ["W", 1.64],
                ["WNW", 1.32],
                ["NW", 1.58],
                ["NNW", 1.51]
            ],
            "_colorIndex": 0
        }, {
            "name": "0.5-2 m/s",
            "data": [
                ["N", 1.78],
                ["NNE", 1.09],
                ["NE", 0.82],
                ["ENE", 1.22],
                ["E", 2.2],
                ["ESE", 2.01],
                ["SE", 3.06],
                ["SSE", 3.42],
                ["S", 4.74],
                ["SSW", 4.14],
                ["SW", 4.01],
                ["WSW", 2.66],
                ["W", 1.71],
                ["WNW", 2.4],
                ["NW", 4.28],
                ["NNW", 5]
            ],
            "_colorIndex": 1
        }, {
            "name": "2-4 m/s",
            "data": [
                ["N", 0.16],
                ["NNE", 0],
                ["NE", 0.07],
                ["ENE", 0.07],
                ["E", 0.49],
                ["ESE", 1.55],
                ["SE", 2.37],
                ["SSE", 1.97],
                ["S", 0.43],
                ["SSW", 0.26],
                ["SW", 1.22],
                ["WSW", 1.97],
                ["W", 0.92],
                ["WNW", 0.99],
                ["NW", 1.28],
                ["NNW", 1.32]
            ],
            "_colorIndex": 2
        }, {
            "name": "4-6 m/s",
            "data": [
                ["N", 0],
                ["NNE", 0],
                ["NE", 0],
                ["ENE", 0],
                ["E", 0],
                ["ESE", 0.3],
                ["SE", 2.14],
                ["SSE", 0.86],
                ["S", 0],
                ["SSW", 0],
                ["SW", 0.49],
                ["WSW", 0.79],
                ["W", 1.45],
                ["WNW", 1.61],
                ["NW", 0.76],
                ["NNW", 0.13]
            ],
            "_colorIndex": 3
        }, {
            "name": "6-8 m/s",
            "data": [
                ["N", 0],
                ["NNE", 0],
                ["NE", 0],
                ["ENE", 0],
                ["E", 0],
                ["ESE", 0.13],
                ["SE", 1.74],
                ["SSE", 0.53],
                ["S", 0],
                ["SSW", 0],
                ["SW", 0.13],
                ["WSW", 0.3],
                ["W", 0.26],
                ["WNW", 0.33],
                ["NW", 0.66],
                ["NNW", 0.23]
            ],
            "_colorIndex": 4
        }, {
            "name": "8-10 m/s",
            "data": [
                ["N", 0],
                ["NNE", 0],
                ["NE", 0],
                ["ENE", 0],
                ["E", 0],
                ["ESE", 0],
                ["SE", 0.39],
                ["SSE", 0.49],
                ["S", 0],
                ["SSW", 0],
                ["SW", 0],
                ["WSW", 0],
                ["W", 0.1],
                ["WNW", 0],
                ["NW", 0.69],
                ["NNW", 0.13]
            ],
            "_colorIndex": 5
        }, {
            "name": "&gt; 10 m/s",
            "data": [
                ["N", 0],
                ["NNE", 0],
                ["NE", 0],
                ["ENE", 0],
                ["E", 0],
                ["ESE", 0],
                ["SE", 0.13],
                ["SSE", 0],
                ["S", 0],
                ["SSW", 0],
                ["SW", 0],
                ["WSW", 0],
                ["W", 0],
                ["WNW", 0],
                ["NW", 0.03],
                ["NNW", 0.07]
            ],
            "_colorIndex": 6
        }],

        chart: {
            polar: true,
            type: 'column'
        },

        pane: {
            size: '85%'
        },
        xAxis: {
            tickmarkPlacement: 'on'
        },

        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            title: {
                text: 'Frequency (%)'
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
            reversedStacks: false
        },

        tooltip: {
            valueSuffix: '%'
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on'
            }
        }
    });


     i = 5;
    angular.forEach(station , function(station) {
        addSeriesFrom(station, chart, i)
        i++;
    });



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



function windDirLang (winddir)
{
    /* return langWindDir[Math.floor(((parseInt($winddir) + 11) / 22.5) % 16 )];*/
    return langWindDir[Math.floor(((parseInt(winddir) + 11.25) / 22.5))];
}