// Início || Mostra o container secundário
function mostrarBiografia() {
    let contSecundario = document.querySelector(".container_secundario")
    if (contSecundario.style.display == "block") {
        contSecundario.style.display = "none"
    }
    else {
        contSecundario.style.display = "block"
    }
}
// Fim || Mostra o container secundário