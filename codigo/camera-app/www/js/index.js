var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var btnCamera = document.getElementById('btn-take-photo');
        if (btnCamera !== null){
            btnCamera.onclick = function(){
                cameraManager.takePhoto(function(err,data){
                    if (err == null){
                        var image = document.getElementById('image');
                        image.src = data;
                        geoManager.getPosition(function(error,data){
                            if (error == null){
                                console.log("User position:" + data.longitud 
                                                    + "-" + data.latitud);
                            } else {
                                console.log("Error:" + error);
                            }
                        });
                    } else {
                        alert(err);
                    }
                    
                });
            }
        }
    },
};

app.initialize();