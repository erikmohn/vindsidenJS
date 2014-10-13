/**
 * Created by erik.mohn on 13.10.2014.
 */

vindsidenServices.factory('Measurements', ['$resource',
    function($resource){
        return $resource('http://vindsiden.no/api/measurements/:stationId' + '?date=2014-09-13', {}, {
            query: {method:'GET', params:{stationId:'measurements'}, isArray:true}
        });
    }]);
