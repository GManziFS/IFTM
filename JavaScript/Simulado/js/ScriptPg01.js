document.addEventListener('DOMContentLoaded', function(){
    let txtQualquer = document.getElementById("txtQualquer")
    let btnQualquer = document.getElementById("btnQualquer")

    btnQualquer.addEventListener("click", function(){
        localStorage.setItem("txtQualquer",txtQualquer.value)
        window.open("analise.html", "_self")
    })
})