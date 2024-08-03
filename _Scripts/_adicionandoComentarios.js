
let btnAdicionarComentario = document.querySelectorAll(".btnPadrao")[0]

btnAdicionarComentario.addEventListener('click', () => {    
    
        let infoInput = document.querySelectorAll('input');
        let comentario = document.querySelector('#textoTamanhoDinamico').value 
        let padraoInfo = {
            nmMedico : infoInput[0].value,
            especialidade : infoInput[1].value,
            novoComentario : comentario
        } 
   
        /*criando html*/
        let div = document.createElement('div')
        /*Alterando informação do innerhtml*/
        div.innerHTML = `<div class='resBuscaContainer'>
                            <div class='padraoResEspaco infoEspaco usuario'>
                                <h2>@user
                                </h2>
                            </div>
                            <div class='imagemMedico padraoResEspaco'>
                                <img src='/_Imagens/_MedicosBusca/medico-e-enfermeiras-em-equipamentos-especiais_23-2148980721.png' alt='imagem do Médico'>
                            </div>
                            <div class='padraoResEspaco'>
                                <h2 class='nomeEspecialidadeMedico'>Dr(a):
                                    ${padraoInfo.nmMedico}
                                </h2>
                                <p class='nomeEspecialidadeMedico'>
                                    ${padraoInfo.especialidade}
                                </p>
                            </div>
                            <div class='padraoResEspaco infoEspaco'>
                                ${padraoInfo.novoComentario}.
                            </div>
                        </div>`
        /*cria nova tag*/
        let recebeNovoComentario = document.getElementById("resultadoBuscaMain")
        recebeNovoComentario.appendChild(div)
        
})








