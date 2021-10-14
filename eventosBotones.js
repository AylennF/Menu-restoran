let paginaEntradas = document.getElementById("paginaEntradas");
let paginaCarnes = document.getElementById("paginaCarnes");
let paginaPizzas = document.getElementById("paginaPizzas");
let paginaSandwiches = document.getElementById("paginaSandwiches");
let paginaGuarniciones = document.getElementById("paginaGuarniciones");
let paginaPastas = document.getElementById("paginaPastas");
let paginaVegetariano = document.getElementById("paginaVegetariano");
let paginaCeliaco = document.getElementById("paginaCeliaco");
let paginaPostres = document.getElementById("paginaPostres");

let paginaEntradasIndex = document.getElementById("paginaEntradasIndex");
let paginaCarnesIndex = document.getElementById("paginaCarnesIndex");
let paginaPizzasIndex = document.getElementById("paginaPizzasIndex");
let paginaSandwichesIndex = document.getElementById("paginaSandwichesIndex");
let paginaGuarnicionesIndex = document.getElementById("paginaGuarnicionesIndex");
let paginaPastasIndex = document.getElementById("paginaPastasIndex");
let paginaVegetarianoIndex = document.getElementById("paginaVegetarianoIndex");
let paginaCeliacoIndex = document.getElementById("paginaCeliacoIndex");
let paginaPostresIndex = document.getElementById("paginaPostresIndex");


paginaVegetariano.onclick = () => {
    localStorage.setItem('Pagina', 1);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaCeliaco.onclick = () => {
    localStorage.setItem('Pagina', 2);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaEntradas.onclick = () => {
    localStorage.setItem('Pagina', 3);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaCarnes.onclick = () => {
    localStorage.setItem('Pagina', 4);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaPizzas.onclick = () => {
    localStorage.setItem('Pagina', 5);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaSandwiches.onclick = () => {
    localStorage.setItem('Pagina', 6);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaGuarniciones.onclick = () => {
    localStorage.setItem('Pagina', 7);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaPastas.onclick = () => {
    localStorage.setItem('Pagina', 8);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaPostres.onclick = () => {
    localStorage.setItem('Pagina', 9);
    console.log(Number(localStorage.getItem("Pagina")));
}

// INDEX
paginaVegetarianoIndex.onclick = () => {
    localStorage.setItem('Pagina', 1);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaCeliacoIndex.onclick = () => {
    localStorage.setItem('Pagina', 2);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaEntradasIndex.onclick = () => {
    localStorage.setItem('Pagina', 3);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaCarnesIndex.onclick = () => {
    localStorage.setItem('Pagina', 4);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaPizzasIndex.onclick = () => {
    localStorage.setItem('Pagina', 5);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaSandwichesIndex.onclick = () => {
    localStorage.setItem('Pagina', 6);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaGuarnicionesIndex.onclick = () => {
    localStorage.setItem('Pagina', 7);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaPastasIndex.onclick = () => {
    localStorage.setItem('Pagina', 8);
    console.log(Number(localStorage.getItem("Pagina")));
}
paginaPostresIndex.onclick = () => {
    localStorage.setItem('Pagina', 9);
    console.log(Number(localStorage.getItem("Pagina")));
}