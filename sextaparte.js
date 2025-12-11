function verificar() {
    const input = document.getElementById('respuesta').value;
    const correcto = "OBSERVA";

    const asciiArtDiv = document.getElementById('asciiArt').querySelector('pre');
    const enlaceDiv = document.getElementById('enlace');
    asciiArtDiv.textContent = "";
    enlaceDiv.innerHTML = ""; 

    if(input.toUpperCase() === correcto) {

        const mensaje = `
___________.__                                    .___
\\_   _____/|  |           _____  __ __  ____    __| _/____
 |    __)_ |  |          /     \\|  |  \\/    \\  / __ |/  _ \\
 |        \\|  |__       |  Y Y  \\  |  /   |  \\/ /_/ (  <_> )
/_______  /|____/       |__|_|  /____/|___|  /\\____ |\\____/
        \\/                    \\/           \\/      \\/

        es una mentira cuidado
`;

        let i = 0;
        const interval = setInterval(() => {
            asciiArtDiv.textContent += mensaje[i];
            i++;
            if(i >= mensaje.length){
                clearInterval(interval);

                const link1 = document.createElement('a');
                link1.href = "llave.docx"; 
                link1.textContent = "Descarga la llave (.docx)";
                link1.target = "_blank"; 
                enlaceDiv.appendChild(link1);

                const link2 = document.createElement('a');
                link2.href = "sextoparte(2).html"; 
                link2.textContent = "siguiente"
                link2.target = "_blank"; 
                enlaceDiv.appendChild(link2);
            }
        }, 10);

    } else {
        asciiArtDiv.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        enlaceDiv.innerHTML = "";
    }
}