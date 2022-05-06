

// function mensajeTextoVacio() {
//     var texto = document.getElementById("input").value;
//     if (texto == "") {
//         alert("Ingresa el texto que deseas encriptar o desencriptar.");
//     }else{
//         validar();
//     }
// }

// function validarCaracteres() {
//     var texto = document.getElementById("input").value;
//     var texto2 = document.getElementById("input2").value;
//     for (var i = 0; i < texto.length; i++) {
//         var caracter = texto.charCodeAt(i);
//         if (caracter >= 97 && caracter <= 122 || caracter == 32) {
//             encriptar();
//         } else {
//             alert("Ingresa un texto que contenga solo letras minúsculas y sin acentos.");
//             break;
//         }
//     }
    
// }


// function encriptar() {
//     var texto = document.getElementById("input").value;
//     var texto2 = texto.toLowerCase();
//     var texto3 = texto2.replace(/e/g, "enter");
//     var texto4 = texto3.replace(/i/g, "imes");
//     var texto5 = texto4.replace(/a/g, "ai");
//     var texto6 = texto5.replace(/o/g, "ober");
//     var texto7 = texto6.replace(/u/g, "ufat");
//     document.getElementById("input2").value = texto7;
// }


// function desencriptar() {
//     var texto = document.getElementById("input").value;
//     var texto2 = texto.toLowerCase();
//     var texto3 = texto2.replace(/enter/g, "e");
//     var texto4 = texto3.replace(/imes/g, "i");
//     var texto5 = texto4.replace(/ai/g, "a");
//     var texto6 = texto5.replace(/ober/g, "o");
//     var texto7 = texto6.replace(/ufat/g, "u");
//     document.getElementById("input2").value = texto7;
// }


// function ocultarh2h1() {
//     var texto = document.getElementById("input").value;
//     if (texto.length > 0) {
//         document.getElementById("h2").style.display = "none";
//         document.getElementById("h3").style.display = "none";
//     } else {
//         document.getElementById("h2").style.display = "block";
//         document.getElementById("h3").style.display = "block";
//     }
// }