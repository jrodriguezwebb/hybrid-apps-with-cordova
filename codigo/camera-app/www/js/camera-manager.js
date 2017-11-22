var cameraManager = {
    takePhoto: function(callback){
        console.log("Camera Manager");
        navigator.camera.getPicture(function(imageURI){
            callback(null,imageURI);
        }, function(message){
            //alert('Failed because: ' + message);
            callback(message);
        }, {
            quality: 50,
            targetWidth: 318,
            targetHeight: 180,
            encodingType: Camera.EncodingType.PNG,
            correctOrientation: true,
            destinationType: Camera.DestinationType.FILE_URI
        });
    }
}
