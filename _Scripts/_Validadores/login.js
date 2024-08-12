
/*Login home*/
const btnLogin = document.getElementById("btnLogin")

btnLogin.addEventListener('click', ()=>{
    // Definindo a expressão regular
    let inputLogin = document.querySelectorAll(".loginUserPass")[0]
    let inputPass =  document.querySelectorAll(".loginUserPass")[1]
    const regexLogin = /^[a-zA-Z]+$/;
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    // Testando a expressão regular contra o nome de usuário
    if(regexLogin.test(inputLogin.value))
        inputLogin.style.background = 'green';
    else
        inputLogin.style.background = 'red';

    if(regexSenha.test(inputPass.value))
        inputPass.style.background = 'green';
    else
        inputPass.style.background = 'red';
})
/*****************************************************/
