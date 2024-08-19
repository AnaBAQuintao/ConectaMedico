// configurações da aba Fale conosco //

// capturar o elemento Assunto da aba Fale conosco
let titulo = document.getElementById("assuntoComentario")


titulo.addEventListener("input", (assuntoComentario) => {
    console.log(assuntoComentario.target.value)
    let valorImpt = assuntoComentario.target.value
    if(valorImpt.length > 3 ){
        titulo.style.background = "green"
    } else {
        titulo.style.background = "red"
    }
})
