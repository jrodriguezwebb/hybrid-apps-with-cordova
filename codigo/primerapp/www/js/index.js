
var deviceInfo = {
    getVersion: function(){
        
        return device.version;
    },
    getPlatformName: function(){
        return device.platform;
    }
};

var networkInfo = {
    estados:{},
    initial: function(){
        window.addEventListener('offline', function(){
            navigator.notification.alert("Se ha perdido la conectividad", function(){
                console.log("El usuario ha sido informado de que se ha perdido la connex");
                document.querySelector('#error').innerHTML = 
                    networkInfo.getReason(navigator.connection.type);
            });
        });

        window.addEventListener('online', function(){
            navigator.notification.alert("Se ha recuperado la conectividad", function(){
                console.log("El usuario ha sido informado de que se ha recuperado la connex");
                document.querySelector('#error').innerHTML = 
                        networkInfo.getReason(navigator.connection.type);
            });
        });
        this.estados[Connection.UNKNOWN] = "Conexión con nodo desconocido";
        this.estados[Connection.NONE] = "Se ha perdido la conexión";

    },
    getReason: function(tipoConexion){
        //return "Razon por la cual ha habido un cambio del estado de red";
        return this.estados[tipoConexion];

    }
};

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
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        navigator.notification.alert("La información es:" 
                                + deviceInfo.getPlatformName() + "-" +
                                    deviceInfo.getVersion(),this.resultCallback);
        
        

        console.log('Received Event: ' + id);
        networkInfo.initial();
    },
    resultCallback: function(){
        console.info("Se ha aceptado la información mostrada");
    }
};

app.initialize();