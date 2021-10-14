let flechaIzquierda = document.getElementById("flechaIzquierda");
let flechaDerecha = document.getElementById("flechaDerecha");
let nPagina = document.getElementById("nroPagina");
var nroPagina;

window.onload = function () {
    $(".buttonConInformacion").hide();
    nroPagina = Number(localStorage.getItem("Pagina"));
    nPagina.textContent = (nroPagina + " / 9")
    if (nroPagina == 1) {
        flechaIzquierda.style.cssText = ("opacity:0; height:0; width:0;");
    }

    if (nroPagina === 9) {
        flechaDerecha.style.cssText = ("opacity:0; height:0; width:0;");
    }
}

flechaIzquierda.onclick = () => {
    nroPagina = nroPagina - 1;
    localStorage.setItem('Pagina', nroPagina);
    redireccionar();
}

flechaDerecha.onclick = () => {
    nroPagina = nroPagina + 1;
    localStorage.setItem('Pagina', nroPagina);
    redireccionar();
}

function redireccionar() {
    switch (nroPagina) {
        case 1:
            location.href = "entradas.html";
            break;
        case 2:
            location.href = "carnes.html";
            break;
        case 3:
            location.href = "pizzas.html";
            break;
        case 4:
            location.href = "sandwiches.html";
            break;
        case 5:
            location.href = "guarniciones.html";
            break;
        case 6:
            location.href = "pastas.html";
            break;
        case 7:
            location.href = "vegetariano.html";
            break;
        case 8:
            location.href = "celiaco.html";
            break;
        case 9:
            location.href = "postres.html";
            break;
    }
}

