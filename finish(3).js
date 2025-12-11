function mostrar(){
    var r = document.getElementById("res").value.trim().toLowerCase();
    if(r === "aristoteles"){
        window.location.href="finish(4).html"
    } else {
        alert("incorrecto")
    }
}