document.addEventListener('DOMContentLoaded', function(){  
    let qtdPapaiNoel = document.getElementById("qtdPapaiNoel")
    let btnPapaiNoel = document.getElementById("btnPapaiNoel")
    
    btnPapaiNoel.addEventListener("click", function(){
        for(let i = 0; i < qtdPapaiNoel.value; i++){
            let papaiNoel = document.createElement("p")
            papaiNoel.innerHTML = "Ho Ho Ho Feliz Natal!"
            document.body.appendChild(papaiNoel)
        }
    })
})