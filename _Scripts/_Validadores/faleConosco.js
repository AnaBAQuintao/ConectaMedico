// configurações da aba Fale conosco //

// capturar o elemento Assunto da aba Fale conosco
let titulo = document.getElementById("adicionarInfoComentario")

titulo.addEventListener("input", (assuntoComentario) => {
    console.log(assuntoComentario.target.value)
    let valorImpt = assuntoComentario.target.value
    if(valorImpt.length != 0)
    {
        if(valorImpt.length > 3  ){
            titulo.style.background = "green"
        } else {
            titulo.style.background = "red"
        }
    }
    else
        titulo.style.background = "#156669"
})

// capturar o elemento Mensagem da aba Fale conosco
let mensagem = document.getElementById("textoTamanhoDinamico")

mensagem.addEventListener("input", (mensagemComentario) => {
    console.log(mensagemComentario.target.value)
    let valorImpt2 = mensagemComentario.target.value
    if(valorImpt2.length != 0)
    {
        if(valorImpt2.length > 3  ){
            mensagem.style.background = "green"
        } else {
            mensagem.style.background = "red"
        }
    }
    else
        mensagem.style.background = "#156669"
})

// captura botao enviar
const bntEnviar = document.querySelector('input[type="submit"].btnPadrao');

// Alerta de falha de preenchimento ou envio correto
bntEnviar.addEventListener("click", () => {
    if (titulo.value === "" || mensagem.value === "") {
        alert('Necessário preenchimento dos campos para envio');
    } else {
        alert('Formulário enviado com sucesso')
    }
})
