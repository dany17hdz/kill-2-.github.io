function mostrar(){
    var r = document.getElementById("res").value.trim().toLowerCase();
    if(r.value === "aristoteles"){
        window.location.href="finish(4).html"
    } else {
        alert("incorrecto")
    }

}
