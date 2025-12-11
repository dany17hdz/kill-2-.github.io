var llave = document.getElementById("kill");
    var button1 = document.getElementById("button1").addEventListener("click", ()=>{
        if(llave.value.toLowerCase() ==="astros"){
            window.location.href="finish.html"
        }else{
            alert("incorrecto")
        }
    })
