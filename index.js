var key = document.getElementById("contraseña");
var btt = document.querySelector("button");

btt.addEventListener("click", () => {
    if (key.value.toLowerCase() === "paloma") {
       window.location.href="sextaparte.html"
    } else {
        window.location.href="meme.html"
    }
});
