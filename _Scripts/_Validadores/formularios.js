/*Cadastro */ 

const btnValidacao = document.querySelector(".btnPadrao");
const btnLimpar = document.querySelectorAll(".btnPadrao");
let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select")
btnValidacao.addEventListener('click', () => {
    let faltaPreencher = Object.values(inputs).some( item => item.value === "") || Object.values(selects).some( item => item.value === "");
    let faltaPreenchertextoArea = false;
    let qtdCamposIncorretos = 0;    
    let nmItem = ""
    let preenchimentosIncorretos = ""
    let textoArea = document.getElementsByTagName("textarea")[0]

    if(textoArea != null)
    {
        if(textoArea.value == "")
            {
                    faltaPreenchertextoArea = true;
                    faltaPreencher = true;
            }
    }        

    // caso seja true indica que algum campo não foi preenchido
    if(faltaPreencher)
    {
            // loop para validar campos vazios no input
            inputs.forEach(function(input) { 
                
                // verificação de igualdade estrita para validar campos vazios
                if(input.value === "")
                {
                    nmItem += `Campo .: ${input.name.toLowerCase()}\n`;
                    input.style.backgroundColor = "rgba(139,0,0,.8)"
                    input.style.color = "white";
                    qtdCamposIncorretos ++;
                } 
                else
                {

                    let excessao = input.value.toLowerCase().includes("cadastrar") || input.value.toLowerCase().includes("limpar") || input.value.toLowerCase().includes("agendamentos") || input.value.toLowerCase().includes("adicionar") 

                    let regex = /^(?!.*(.)\1)[A-Za-zÀ-ÿ'’\-]{3,50}(?:\s[A-Za-zÀ-ÿ'’\-]{1})*$/;
                    // padrão de erro
                    
                    if(!excessao)
                    {
                        input.style.backgroundColor = "rgba(144, 238, 144, 1)"
                        input.style.color = 'black'
                    }
                    else
                    {
                        input.style.color = 'white'

                    }          
                                            // valida nome
                    if(input.name.toLowerCase().includes("nome"))
                    {
                        if(regex.test(input.value))
                        {
                            input.style.backgroundColor = "rgba(144, 238, 144, 1)"
                            input.style.color = 'black'
                        }                            
                        else
                        {
                            nmItem += `Campo .: ${input.name.toLowerCase()}\n`;
                            preenchimentosIncorretos += `Para preenchimento de Nome é necessário:\n1 .: No minimo três caracteres. Ex Ian\n2 .: Não pode conter numeros apenas caractéres. Ex de erro: igor123 | Ex correto: Igor Felipe\n3 .: Não é permitida a repetição de caracteres como(IIIIgor)\n==========================\n`
                            input.style.backgroundColor = "rgba(139,0,0,.8)"
                            input.style.color = "white";
                            qtdCamposIncorretos ++;
                        }
                        
                    }
                    // valida cpf
                    if(input.name.toLowerCase().includes("cpf"))
                    {
                        regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
                        if(regex.test(input.value))
                        {
                            input.style.backgroundColor = "rgba(144, 238, 144, 1)"
                            input.style.color = 'black'
                        }                            
                        else
                        {
                            nmItem += `Campo .: ${input.name.toLowerCase()}\n`;
                            preenchimentosIncorretos += `Para preenchimento de Cpf é necessário:\n1 .: O preenchimento de no mínimo 11 caracteres. Ex 123.456.789-19\n2 .: Não pode conter 11 numeros repetidos.EX:111.111.111-11\n==========================\n`
                            input.style.backgroundColor = "rgba(139,0,0,.8)"
                            input.style.color = "white";
                            qtdCamposIncorretos ++;
                        }
                    }
                    // valida telefone
                    if(input.name.toLowerCase().includes("telefone"))
                    {
                        regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
                        if(regex.test(input.value))
                            {
                                input.style.backgroundColor = "rgba(144, 238, 144, 1)"
                                input.style.color = 'black'
                            }                            
                            else
                            {
                                nmItem += `Campo .: ${input.name.toLowerCase()}\n`;
                                preenchimentosIncorretos += `Para preenchimento de telefone é necessário:\n1 .: O preenchimento do ddd e seguir o formato(ddd) 99999-9999\n==========================\n`
                                input.style.backgroundColor = "rgba(139,0,0,.8)"
                                input.style.color = "white";
                                qtdCamposIncorretos ++;
                            }
                    }
                    // valida e-mail
                    if(input.name.toLowerCase().includes("e-mail"))
                        {
                            const regex = /^(?!\.)[a-zA-Z0-9._%+-]+(?:(?<=\S)(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?<!\.)$/;
                            if(regex.test(input.value))
                                {
                                    input.style.backgroundColor = "rgba(144, 238, 144, 1)"
                                    input.style.color = 'black'
                                }                            
                                else
                                {
                                    nmItem += `Campo .: ${input.name.toLowerCase()}\n`;
                                    preenchimentosIncorretos += `Para preenchimento de email é necessário:\n1 .: Não começar/terminar com um ponto\n2 .: Ter domínio muito curto.EX: .c ao inves de .com\n3 .: Possuir dois pontos consecutivos em qualquer parte do endereço de e-mail`
                                    input.style.backgroundColor = "rgba(139,0,0,.8)"
                                    input.style.color = "white";
                                    qtdCamposIncorretos ++;
                                }
                        }
                }              

            })
            // loop para validar campos de selct vazios
            selects.forEach(function(select) { 
                // verificação de igualdade estrita para validar campos vazios
                if(select.value === "")
                {
                    nmItem += `Campo .: ${select.name.toLowerCase()}\n`;
                    select.style.backgroundColor = "rgba(139,0,0,.8)"
                    select.style.color = "white"  
                    qtdCamposIncorretos ++;
                }        
                else
                {   
                    select.style.backgroundColor = "rgba(144, 238, 144, 1)";
                    select.style.color = 'black'
                }                        
            })
            document.getElementsByClassName("btnPadrao")

            if(faltaPreenchertextoArea)
            {
                textoArea.style.backgroundColor = "rgba(139,0,0,.8)"
                textoArea.style.color = "white";
                qtdCamposIncorretos ++;
                nmItem +=  `Campo .: ${textoArea.name}\n`
            }
            // exibe na tela que faltam preencher campos
            alert(`Existem ${qtdCamposIncorretos} campos vazios que precisam ser preenchidos, são eles:\n==========================\n${nmItem}==========================\n${(!preenchimentosIncorretos.includes("Para preenchimento de") ) ? '' : "Para realizar o cadastro é necessário realizar o preenchimento seguindo as regras abaixo!!!\n==========================\n" + preenchimentosIncorretos}`)                     
    }
    else{
        alert("Sucesso")
    }
        
})

btnLimpar[btnLimpar.length - 1].addEventListener('click', ()=>{

    let textoArea = document.getElementsByTagName("textarea")[0]

    if(textoArea != null)
        {
            textoArea.style.backgroundColor = "#156669"
            textoArea.style.color = "white";
        }

    inputs.forEach(function(input) { 
        
        let excessao = input.value.toLowerCase().includes("cadastrar") || input.value.toLowerCase().includes("limpar")   || input.value.toLowerCase().includes("agendamentos") || input.value.toLowerCase().includes("adicionar")
        
            if(!excessao)
            {
                if(textoArea != null)
                {                    
                input.style.backgroundColor = "#156669"
                input.style.color = 'white'
                }
                else
                {

                    input.style.backgroundColor = 'white'
                    input.style.color = 'black'
                }
            }                
    })

    selects.forEach(function(select) { 
        select.style.backgroundColor = 'white'
        select.style.color = 'black'
                           
    })


})
