var btnMobile = document.getElementById("btnMobile");
var navegador = document.getElementById("navegador");

    function ActiveDesactive()
    {
        const classe = btnMobile.className;
        if(classe != 'active' || classe == '')
        {
            btnMobile.classList.remove("desactive")
            btnMobile.classList.add("active")
            navegador.classList.remove("desactive")
            navegador.classList.add("active")
        }               
        else
        {
            btnMobile.classList.remove("active")
            btnMobile.classList.add("desactive")     

            navegador.classList.remove("active")
            navegador.classList.add("desactive")  
        }

    }
    btnMobile.addEventListener('click', ActiveDesactive);