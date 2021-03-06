/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        persona.saludar();
        this.receivedEvent('deviceready');
        //estados.iniciar();
        console.log(window);
        console.log(document);

        //detectar la conexion a internet del movil
        window.addEventListener("offline", onOffline, false);
        
        function onOffline() {
            console.log("se ha perdido la conexion");
            document.querySelector("#mensaje").innerHTML = navigator.connection.type;
            console.log(navigator.connection.type);
            console.log(navigator.connection);
        }

        window.addEventListener("online", onOnline, false);
        
        function onOnline() {
            console.log("se ha recuperado la conexion");
            document.querySelector("#mensaje").innerHTML = navigator.connection.type;
            console.log(navigator.connection.type);
            console.log(navigator.connection);
        }
        document.querySelector("#test").addEventListener("click", function(e){
            console.log("asd");
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI });
            
            function onSuccess(imageURI) {
                var image = document.getElementById('myImage');
                image.src = imageURI;
            }
            
            function onFail(message) {
                alert('Failed because: ' + message);
            }
        }, false);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var persona = {
    saludar: function(){        
        navigator.notification.prompt(
            '¿Como te llamas?', 
            this.callbackFunction, 
            'Aviso', 
            'Saludar');       
    },
    callbackFunction : function(respuesta){
        console.log(respuesta);
        console.log('hola '+respuesta.input1); 
        navigator.notification.alert(
            'Hola '+respuesta.input1, 
            function(){
                navigator.notification.alert(
                    'Plataforma: '+device.platform + '\nVersion: '+device.version, 
                    function(){}, 
                    'Info', 
                    'Cerrar'
                );
            }, 
            'Info', 
            'Cerrar'
        );  
    }
};

var estados = {
    iniciar: function(){
        console.log("asd");
        /*document.addEventListener("offline"),function(){
            alert("asd");
        }*/
    }
}

app.initialize();