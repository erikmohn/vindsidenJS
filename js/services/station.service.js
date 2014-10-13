
vindsidenServices.factory('Station', ['$resource',
    function($resource){
        return $resource('http://vindsiden.no/api/stations/:stationId', {}, {
            query: {method:'GET', params:{stationId:'stations'}, isArray:false}
        });
    }]);
