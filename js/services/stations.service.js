/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenServices.factory('Stations', ['$resource',
    function($resource){

        var currentDate = new Date();

        var dateString =  currentDate.getYear() +'-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDay();

        return $resource('http://vindsiden.no/api/stations' + '?'+ dateString, {}, {
            query: {method:'GET', params:{stationId:'stations'}, isArray:true}
        });
    }]);