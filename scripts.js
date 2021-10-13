let flechaIzquierda = document.getElementById("flechaIzquierda");
let flechaDerecha = document.getElementById("flechaDerecha");

let logo = document.getElementById("logo");

let paginaEntradas = document.getElementById("paginaEntradas");
let paginaCarnes = document.getElementById("paginaCarnes");
let paginaPizzas = document.getElementById("paginaPizzas");
let paginaSanguches = document.getElementById("paginaSanguches");
let paginaGuarniciones = document.getElementById("paginaGuarniciones");
let paginaBebidas = document.getElementById("paginaBebidas");
let paginaPastas = document.getElementById("paginaPastas");
let paginaPostres = document.getElementById("paginaPostres");

var pagina=0;
var nroPagina=0;


logo.onclick = () => {
    localStorage.setItem('Pagina', 0);
}

paginaEntradas.onclick = () => {
    $("#flechaIzquierda") .hide();
    localStorage.setItem('Pagina', 0);
}
paginaPizzas.onclick = () => {
    ubicacionFlechas();
    localStorage.setItem('Pagina', 1);
}
paginaSanguches.onclick = () => {
    ubicacionFlechas();
    localStorage.setItem('Pagina', 2);
}
paginaGuarniciones.onclick = () => {
    ubicacionFlechas();
    localStorage.setItem('Pagina', 3);
}
paginaBebidas.onclick = () => {
    ubicacionFlechas();
    localStorage.setItem('Pagina', 4);
}
paginaPastas.onclick = () => {
    ubicacionFlechas();
    localStorage.setItem('Pagina', 5);
}
paginaPostres.onclick = () => {
    ubicacionFlechas();
    localStorage.setItem('Pagina', 6);
}

    
flechaIzquierda.onclick = () => {
    nroPagina=Number(localStorage.getItem("Pagina"));
    console.log(nroPagina);
    if (nroPagina == 1){
        $("#flechaIzquierda") .hide();
    }else{
    $("#flechaIzquierda") .show();
    }
    nroPagina=nroPagina-1;  
    localStorage.setItem('Pagina', nroPagina);
    irPagina();
}

flechaDerecha.onclick = () => {
    ubicacionFlechas();
    nroPagina=Number(localStorage.getItem("Pagina"));
    nroPagina=nroPagina+1;  
    localStorage.setItem('Pagina', nroPagina);
    console.log(nroPagina);
    console.log(pagina);
    irPagina();
    
}


function irPagina(){
    switch(nroPagina){
        case 0:
            location.href = "entradas.html";
        break;
        case 1:
            location.href = "pizzas.html";
        break;
        case 2:
            location.href = "entradas.html";
        break;
        case 3:
            location.href = "pizzas.html";
        break;
    }
}

function ubicacionFlechas(){
    if (localStorage.getItem("Pagina")=== "1"){
        $("#flechaIzquierda") .hide();
    }else if (localStorage.getItem("Pagina")>= "0"){
        $("#flechaIzquierda") .show();
    }
    if (localStorage.getItem("Pagina")=== "6"){
        $("#flechaDerecha").hide();
    }else if (localStorage.getItem("Pagina")<= "9") {
        $("#flechaDerecha").show();
    }
}