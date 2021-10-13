let flechaIzquierda = document.getElementById("flechaIzquierda");

flechaIzquierda.onclick = () => {
    localStorage.setItem('Nombre', JSON.stringify(hijosFormulario[1].value));

}