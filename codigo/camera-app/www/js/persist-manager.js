var persistManager = {
    set: function(data,callback){
        console.log("Battery Manager");
        ruta = [];
        ruta.push(data);
        localStorage.setItem('ruta',JSON.stringify(ruta));
        callback();
    },
    get: function(callback){
        try {
            callback(localStorage.getItem('ruta'));
        } catch (error) {
            callback(null,error);
        }        
    }
}
