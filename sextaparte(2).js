var buttn = document.getElementById("button");

buttn.addEventListener("click", ()=>{
    var uno = document.getElementById("capitulo").value;
    var dos = document.getElementById("derrota").value;
    var tres = document.getElementById("ira").value;

    if(parseInt(uno) === 12 && dos.toLowerCase() === "san miguel" && tres.toLowerCase() === "ira"){
        window.location.href="sieteparte.html"
    } else {
        alert("incorrecto");
    }
});
