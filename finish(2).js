var llave = document.querySelector("input")
var butt = document.querySelector("button");

butt.addEventListener("click", ()=>{
    if(llave.value==="explorador"){
        window.location.href="finish(3).html"
    }else{
        alert("no fue posible !!incorrecto!!")
    }

})
