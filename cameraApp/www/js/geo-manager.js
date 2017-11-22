var geoManager = {
    test: function(){
        console.log("test de geomanager");
    },
    getPosition: function(callback){
        navigator.geolocation.getCurrentPosition(
            //success
            function(position){
                /*console.log('Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' +
                'Altitude: '          + position.coords.altitude          + '\n' +
                'Accuracy: '          + position.coords.accuracy          + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'Heading: '           + position.coords.heading           + '\n' +
                'Speed: '             + position.coords.speed             + '\n' +
                'Timestamp: '         + position.timestamp                + '\n');*/
                //console.log(position);
                
                var userLoc = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
                console.log(userLoc);
                callback(null,userLoc);
            },//error
            function(error){
                callback(error,null);
            },
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
        );
    },
    watchPosition: function(callback){
        return navigator.geolocation.watchPosition(
            function(position){
                //console.log(position);
                var userLoc = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
                callback(null,userLoc);
            },//error
            function(error){
                callback(error,null);
            },
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
        );
    }

};