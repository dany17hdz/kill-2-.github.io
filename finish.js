var clave = document.getElementById("clave");
var bt = document.getElementById("button").addEventListener("click", ()=>{
    if(clave.value.toLowerCase() === "socrates"){
        window.location.href="finish(2).html"
    }else{
        document.write("coloca la palabra correcta");
    }

});