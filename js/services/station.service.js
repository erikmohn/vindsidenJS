
vindsidenServices.factory('Station', ['$resource',
    function($resource){

        var currentDate = new Date();

        var dateString =  currentDate.getYear() +'-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDay();

        return $resource('http://vindsiden.no/api/stations/:stationId' + '?'+ dateString +'&n=100', {}, {
            query: {method:'GET', params:{stationId:'stations' }, isArray:false}
        });
    }]);
