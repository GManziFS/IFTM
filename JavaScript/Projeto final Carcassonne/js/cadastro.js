window.addEventListener("DOMContentLoaded", function(){
    /*====================Variaveis====================*/

    let mostraSenha = document.getElementById("verSenha")
    let mostraConfirma = document.getElementById("verConfirmaSenha")

    let labelErro = document.getElementById("labelErro")
    let btnCadastrar = document.getElementById("btnCadastrar")

    let labelUser = document.getElementById("labelUser")
    let user = document.getElementById("user")
    let validUser = false

    let labelSenha = document.getElementById("labelSenha")
    let senha = document.getElementById("senha")
    let validSenha = false

    let labelConfirma = document.getElementById("labelConfirma")
    let confirmaSenha = document.getElementById("confirmaSenha")
    let validConfirma = false

    /*====================Listeners====================*/

    mostraSenha.addEventListener("click", function(){
        toggleSenha("senha")
    })

    mostraConfirma.addEventListener("click", function(){
        toggleSenha("confirmaSenha")
    })

    btnCadastrar.addEventListener("click", validaCadastro)

    /*====================Functions====================*/
    
    user.addEventListener('keyup', ()=>{
        if(user.value.length <= 2){
            labelUser.setAttribute('style', 'color: #EA3323')
            labelUser.innerHTML = 'Nome (-3 Caracteres)<img src="img/x.png">'
            user.setAttribute('style', 'border-color: #EA3323')
            validUser = false
        }else{
            labelUser.setAttribute('style', 'color: #75FB4C')
            labelUser.innerHTML = 'Nome<img src="img/check.png">'
            user.setAttribute('style', 'border-color: #75FB4C')
            validUser = true
        }
    })

    senha.addEventListener('keyup', ()=>{
        if(senha.value.length <= 5){
            labelSenha.setAttribute('style', 'color: #EA3323')
            labelSenha.innerHTML = 'Senha (-6 Caracteres)<img src="img/x.png">'
            senha.setAttribute('style', 'border-color: #EA3323')
            validSenha = false
        }else{
            labelSenha.setAttribute('style', 'color: #75FB4C')
            labelSenha.innerHTML = 'Senha<img src="img/check.png">'
            senha.setAttribute('style', 'border-color: #75FB4C')
            validSenha = true
        }
    })

    confirmaSenha.addEventListener('keyup', ()=>{
        if(confirmaSenha.value != senha.value){
            labelConfirma.setAttribute('style', 'color: #EA3323')
            labelConfirma.innerHTML = 'As senhas não coincidem<img src="img/x.png">'
            confirmaSenha.setAttribute('style', 'border-color: #EA3323')
            validConfirma = false
        }else{
            labelConfirma.setAttribute('style', 'color: #75FB4C')
            labelConfirma.innerHTML = 'As senhas coincidem<img src="img/check.png">'
            confirmaSenha.setAttribute('style', 'border-color: #75FB4C')
            validConfirma = true
        }
    })

    function validaCadastro(){
        if(validUser && validSenha && validConfirma){
            let listaUser = JSON.parse(localStorage.getItem('listaUser') || `[]`)

            listaUser.push({
                userCad: user.value,
                senhaCad: senha.value
            })

            localStorage.setItem('listaUser', JSON.stringify(listaUser))

            setTimeout(function(){
                window.location.href = "login.html"
            }, 2000)

            labelErro.innerHTML = 'Usuario cadastrado'
        } else {
            labelErro.innerHTML = 'Todos os campos precisam estar preenchidos corretamente'
        }
    }
    
    function toggleSenha(id){
        let campo = document.getElementById(id)
        let tipo = campo.getAttribute("type")
        campo.setAttribute("type", tipo === "password" ? "text" : "password")
    }
})
