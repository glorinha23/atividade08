document.querySelector(".modifica").addEventListener( "click", ()=>{ 
    let selecao = document.querySelector("body"); 
    selecao.classList.toggle("dark"); 
    let areaTexto = document.querySelector("textArea");
    document.body.style.backgroundColor = document.body.style.backgroundColor == "black" ? "white" : "black"; 
    areaTexto.style.backgroundColor = areaTexto.style.backgroundColor == "white" ? "plum" : "white"; 
})
