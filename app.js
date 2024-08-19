function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");    
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");

    let textoEncriptado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

if (texto.length != 0) {
    document.getElementById("texto").value = textoEncriptado;
    titulomensaje.textContent = "Texto Encriptado con éxito";
    parrafo.textContent = "";
    imagen1.src ="./img/dibujo2.jpg";
    }else {
        imagen1.src= "./img/dibujo1.jpg";
        titulomensaje.textContent = "No hay mensaje para encriptar";
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");    
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");
    
    let textoDesencriptado = texto
    .replace(/UFAT/gi, "u")
    .replace(/OBER/gi, "o")
    .replace(/IMES/gi, "i")
    .replace(/ENTER/gi, "e")
    .replace(/AI/gi, "a");

if (texto.length != 0) {
    document.getElementById("texto").value = textoDesencriptado;
    titulomensaje.textContent = "Texto Desencriptado con éxito";
    parrafo.textContent = "";
    imagen1.src ="./img/dibujo3.jpg";
    }else {
        imagen1.src= "./img/dibujo1.jpg";
        titulomensaje.textContent = "No hay mensaje para encriptar";
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function copiar() {
    let mensaje = document.getElementById("texto");
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}

function pegar() {
    let texto = document.getElementById("texto");
    navigator.clipboard.readText().then(text => {
        document.getElementById("mensaje").value = text;
    }).catch(err => {
        console.error("Error al pegar texto: ", err);
    });
}

function Limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById("mensaje").value = "";


    document.getElementById("titulo-mensaje").textContent = "No hay mensaje para encriptar";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
    document.getElementById("imagen1").src = "./img/dibujo1.jpg";
}
