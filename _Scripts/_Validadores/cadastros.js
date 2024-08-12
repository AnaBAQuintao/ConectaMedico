/*Cadastro */ 

const btnCadastros = document.querySelector("#btnCadastros");
let inputsCadastros = document.querySelectorAll("input");
let selectsCadastros = document.querySelectorAll("select");

btnCadastros.addEventListener('click', () => {
    let faltaPreencher = Object.values(inputsCadastros).some( item => item.value === "") || Object.values(selectsCadastros).some( item => item.value === "");

    let qtdPreenchidoIncorretamenteOuVazio = 0;    
    let nmItem = ""
    let preenchimentosIncorretos = ""

    // caso seja true indica que algum campo não foi preenchido
    if(faltaPreencher)
        {
            // loop para validar campos vazios no input
            inputsCadastros.forEach(function(input) { 
                
                // verificação de igualdade estrita para validar campos vazios
                if(input.value === "")
                {
                    nmItem += `Campo .: ${input.name.toLowerCase()}\n`;
                    input.style.backgroundColor = "rgba(139,0,0,.8)"
                    input.style.color = "white";
                    qtdPreenchidoIncorretamenteOuVazio ++;
                } 
                else
                {
                    let regex = /^(?!.*(.)\1)[A-Za-zÀ-ÿ'’\-]{3,50}(?:\s[A-Za-zÀ-ÿ'’\-]{1})*$/;
                    // padrão de erro
                    input.style.backgroundColor = "rgba(144, 238, 144, 1)"
                    input.style.color = 'black'

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
                            preenchimentosIncorretos += `Para preenchimento de Nome é necessário:\n1 .: No minimo três caracteres. Ex Ian\n2 .: Não pode conter numeros apenas caractéres. Ex de erro: igor123 | Ex correto: Igor Felipe\n3 .: Não é permitida a repetição de caracteres como(IIIIgor)`
                            input.style.backgroundColor = "rgba(139,0,0,.8)"
                            input.style.color = "white";
                            qtdPreenchidoIncorretamenteOuVazio ++;
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
                            preenchimentosIncorretos += `Para preenchimento de Cpf é necessário:\n1 .: O preenchimento de no mínimo 11 caracteres. Ex 123.456.789-19\n2 .: Não pode conter 11 numeros repetidos.EX:111.111.111-11`
                            input.style.backgroundColor = "rgba(139,0,0,.8)"
                            input.style.color = "white";
                            qtdPreenchidoIncorretamenteOuVazio ++;
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
                                preenchimentosIncorretos += `Para preenchimento de telefone é necessário:\n1 .: O preenchimento do ddd e seguir o formato(ddd) 99999-9999`
                                input.style.backgroundColor = "rgba(139,0,0,.8)"
                                input.style.color = "white";
                                qtdPreenchidoIncorretamenteOuVazio ++;
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
                                    preenchimentosIncorretos += `Para preenchimento de email é necessário:\n1 .: Não pode começar/terminar com um ponto\n2 .: Ter domínio muito curto.EX: .c ao inves de .com\n3 .: Possuir dois pontos consecutivos em qualquer parte do endereço de e-mail`
                                    input.style.backgroundColor = "rgba(139,0,0,.8)"
                                    input.style.color = "white";
                                    qtdPreenchidoIncorretamenteOuVazio ++;
                                }
                        }
                    
                }              

            })
            // loop para validar campos de selct vazios
            selectsCadastros.forEach(function(select) { 
                // verificação de igualdade estrita para validar campos vazios
                if(select.value === "")
                {
                    nmItem += `Campo .: ${select.name.toLowerCase()}\n`;
                    select.style.backgroundColor = "rgba(139,0,0,.8)"
                    select.style.color = "white"  
                    qtdPreenchidoIncorretamenteOuVazio ++;
                }        
                else
                {   
                    select.style.backgroundColor = "white"  
                    select.style.color = 'black'
                }
                        
            })
            // exibe na tela que faltam preencher campos
            alert(`Existem ${qtdPreenchidoIncorretamenteOuVazio} campos vazios que precisam ser preenchidos, são eles:\n==========================\n${nmItem}==========================\nPara realizar o cadastro é necessário realizar o preenchimento seguindo as regras abaixo!!!\n==========================\n ${preenchimentosIncorretos}`)                     
        }
})