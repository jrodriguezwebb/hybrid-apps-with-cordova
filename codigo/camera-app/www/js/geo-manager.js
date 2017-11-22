var geoManager = {
    test: function() {
        console.log('Test de geomanager');
    },
    getPosition: function(callback){
        navigator.geolocation.getCurrentPosition(function(position){
            var userLoc = {
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            };
            callback(null,userLoc);
        }, function(error){
            callback(error,null);
        },
        {
            maximumAge: 3000, timeout: 5000, enableHighAccuracy: true
        });
    }
}