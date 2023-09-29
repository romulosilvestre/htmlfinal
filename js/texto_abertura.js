function inicio() {
    /*let, var e const*/
    const textoOriginal = "Planeta Alien";
    //DOM -objeto 1 - parágrafo : tag
    const elementoTexto = document.querySelector("p")
    //DOM - objeto 2 
    const audio = document.querySelector("audio")
    //DOM - objeto 3
    const btn = document.querySelector("button")
    //DOM - 5000 milisegundos (5 segundos)
    const atrasoRapido = 5000 // Atraso em milissegundos (2 segundos)
    //DOM - 10000 milisegundo (7 segundos)
    const atrasoDevagar = 7000

    setTimeout(function () {
        btn.style.display = "none"
        audio.play()
    }, atrasoRapido);

    setTimeout(function () {
        elementoTexto.textContent = textoOriginal
    }, atrasoDevagar);


}