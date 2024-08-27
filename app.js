
function encriptacion(){
    var texto = document.getElementById("input__texto").value.toLowerCase();
    var texto__cifrado = texto.replace(/e/img, "enter");
    var texto__cifrado = texto__cifrado.replace(/o/img, "ober");
    var texto__cifrado = texto__cifrado.replace(/i/img, "imes");
    var texto__cifrado = texto__cifrado.replace(/a/img, "ai");
    var texto__cifrado = texto__cifrado.replace(/u/img, "ufat");

    document.getElementById("imagen__muneco").style.display = "none";
    document.getElementById("texto__muneco").style.display = "none";
    document.getElementById("texto__encriptar").innerHTML = texto__cifrado;
    document.getElementById("copiar__texto").style.display = "show";
    document.getElementById("copiar__texto").style.display = "inherit";
}

function desencriptacion(){
    var texto = document.getElementById("input__texto").value.toLowerCase();
    var texto__cifrado = texto.replace(/enter/img, "e");
    var texto__cifrado = texto__cifrado.replace(/ober/img, "o");
    var texto__cifrado = texto__cifrado.replace(/imes/img, "i");
    var texto__cifrado = texto__cifrado.replace(/ai/img, "a");
    var texto__cifrado = texto__cifrado.replace(/ufat/img, "u");

    document.getElementById("imagen__muneco").style.display = "none";
    document.getElementById("texto__muneco").style.display = "none";
    document.getElementById("texto__encriptar").innerHTML = texto__cifrado;
    document.getElementById("copiar__texto").style.display = "show";
    document.getElementById("copiar__texto").style.display = "inherit";
}

function copiar__texto__suministrado(){
    var texto__contenido = document.getElementById("texto__encriptar");  // Usamos el ID correcto
    var rango = document.createRange();
    var seleccion = window.getSelection();

    rango.selectNodeContents(texto__contenido);  
    seleccion.removeAllRanges();  
    seleccion.addRange(rango);  
    navigator.clipboard.writeText(texto__contenido.innerText);  
}
