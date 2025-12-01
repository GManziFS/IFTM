window.addEventListener("DOMContentLoaded", function(){

    /*==================== Variáveis ====================*/
    
    let mostraSenha = document.getElementById("verSenha")
    let btnEntrar = document.getElementById("btnEntrar")

    let user = document.getElementById("user")
    let userLabel = document.getElementById("userLabel")

    let senha = document.getElementById("senha")
    let senhaLabel = document.getElementById("senhaLabel")

    let labelErro = document.getElementById("labelErro")

    let listaUser = []
    let userValid = {
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(this.localStorage.getItem('listaUser'))

    /*==================== Listeners ====================*/

    mostraSenha.addEventListener("click", function(){
        toggleSenha("senha")
    })

    btnEntrar.addEventListener("click", entrar)

    /*==================== Funções ====================*/

    function toggleSenha(id){
        let campo = document.getElementById(id)
        let tipo = campo.getAttribute("type")
        campo.setAttribute("type", tipo === "password" ? "text" : "password")
    }

    function entrar(){
        listaUser.forEach((item) => {
            if(user.value == item.userCad && senha.value == item.senhaCad){
                userValid = {
                    user: item.userCad,
                    senha: item.senhaCad
                }
            }
        })

        if(user.value == userValid.user && senha.value == userValid.senha && user.value != '' && senha.value != ''){
            window.location.href = "index.html"
        }else{
            userLabel.setAttribute("style", "color: red")
            user.setAttribute("style", "border-color: red")
            senhaLabel.setAttribute("style", "color: red")
            senha.setAttribute("style", "border-color: red")
            labelErro.innerHTML = 'Senha ou usuarios incorretos ou não preenchidos, favor tente novamente'
            user.focus()
        }
    }
})
