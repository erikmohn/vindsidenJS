/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenServices.factory('Stations', ['$resource',
    function($resource){
        return $resource('http://vindsiden.no/api/stations', {}, {
            query: {method:'GET', params:{stationId:'stations'}, isArray:true}
        });
    }]);