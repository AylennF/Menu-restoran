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
    nroPagina=1;
}
paginaPizzas.onclick = () => {
    nroPagina=2;
}
paginaSanguches.onclick = () => {
    nroPagina=3;
}
paginaGuarniciones.onclick = () => {
    nroPagina=4;
}
paginaBebidas.onclick = () => {
    nroPagina=5;
}
paginaPastas.onclick = () => {
    nroPagina=6;
}
paginaPostres.onclick = () => {
    nroPagina=7;
}

    
flechaIzquierda.onclick = () => {
    ubicacionFlechas();
    nroPagina=Number(localStorage.getItem("Pagina"));
    console.log(nroPagina);
    nroPagina=nroPagina-1;  
    localStorage.setItem('Pagina', nroPagina);
    console.log(pagina);
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
        case 1:
            location.href = "entradas.html";
        break;
        case 2:
            location.href = "pizzas.html";
        break;
        case 3:
            location.href = "entradas.html";
        break;
        case 4:
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
    if (localStorage.getItem("Pagina")=== "7"){
        $("#flechaDerecha").hide();
    }else if (localStorage.getItem("Pagina")<= "7") {
        $("#flechaDerecha").show();
    }
}