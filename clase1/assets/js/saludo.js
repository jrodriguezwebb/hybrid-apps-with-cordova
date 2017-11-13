window.onload = pedirDatos();
function pedirDatos(){
    var nombre = prompt("Introduce tu nombre", "");
    document.querySelector("#message").innerHTML = 'Hola '+nombre;
    console.log('Hola '+nombre);
}
