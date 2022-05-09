//estoy probando en github


// Crear entrada de texto con textarea
var input = document.createElement("textarea");
input.setAttribute("id", "input");
input.setAttribute("placeholder", "Ingrese tu texto aquí");
input.setAttribute("rows", "20");
input.setAttribute("cols", "35");
input.setAttribute("class","input");
document.body.appendChild(input);

//<p >⚠ Solo letras minúsculas y sin acentos</p>
// crear un texto que diga "⚠ Solo letras minúsculas y sin acentos"
var p = document.createElement("p");
p.innerHTML = "⚠ Solo letras minúsculas y sin acentos";
document.body.appendChild(p);



// crear entrada de texto para mostrar texto encriptado
var input2 = document.createElement("textarea");
input2.setAttribute("id", "input2");
input2.setAttribute("rows", "20");
input2.setAttribute("cols", "35");
input2.setAttribute("class", "input2");
document.body.appendChild(input2);

//si el valor de input2 contiene algo la propiedad background-image:url(/imagenes/Muñeco.png) es nula 
 

// crear un texto que diga ingún mensaje fué encontrado
var h2 = document.createElement("h2");
h2.innerHTML = "Ningún mensaje fué encontrado";
h2.setAttribute("class", "h2");
document.body.appendChild(h2);
//crear un texto que diga Ingresa el texto que deseas encriptar o desencriptar
var h3 = document.createElement("h3");
h3.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar.";
h3.setAttribute("class", "h3");
document.body.appendChild(h3);

// crear una funcion que muestre un mensaje de alerta si no hay texto ingreado
function mensaje() {
    var texto = document.getElementById("input").value;
    if (texto == "") {
        alert("Ingresa un texto para encriptar o desencriptar.");
        
        
    }else{
        validar();
    }
}

// crear una funcion validar solo haya letras minúsculas y sin acentos, caso contrario mostrar mensaje de error
//validar la entrada con un simple if, validando que el caracter se encuentre en el rango [97, 122], es decir, 97 <= caracter <= 122, o bien, caracter = 32 (para aceptar el espacio)
function validar() {
    var texto = document.getElementById("input").value;
    var texto2 = document.getElementById("input2").value;
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charCodeAt(i);
        if (caracter >= 97 && caracter <= 122 || caracter == 32 || caracter == 241) {
            encriptar();
        } else {
            alert("Ingresa un texto que contenga solo letras minúsculas y sin acentos.");
            break;
        }
    }
    
}
//---------------DESNCRIPTAR-----------------------------------------------------------------------------------------
function mensaje2() {
    var texto = document.getElementById("input").value;
    if (texto == "") {
        alert("Ingresa un texto para encriptar o desencriptar.");
        
        
    }else{
        validar2();
    }
}
function validar2() {
    var texto = document.getElementById("input").value;
    var texto2 = document.getElementById("input2").value;
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charCodeAt(i);
        if (caracter >= 97 && caracter <= 122 || caracter == 32 || caracter == 241) {
            desencriptar();
        } else {
            alert("Ingresa un texto que contenga solo letras minúsculas y sin acentos.");
            break;
        }
    }
    
}



// crear boton para almacenar texto en una variable si pasa 
var boton = document.createElement("button"); 
boton.setAttribute("id", "boton");
boton.setAttribute("onclick", "encriptar()");
boton.setAttribute("class", "btn-encriptar")
boton.setAttribute("onclick", "validar()");
boton.setAttribute("onclick", "mensaje()");
// boton.setAttribute("onclick", "ocultar()");
// boton.setAttribute("onclick", "ocultarh2h1()");
boton.innerHTML = "Encriptar";
document.body.appendChild(boton);

// crear boton para mostrar texto encriptado
var boton2 = document.createElement("button");
boton2.setAttribute("id", "boton2");
boton2.setAttribute("onclick", "desencriptar()");
boton2.setAttribute("class", "btn-desencriptar");
boton2.setAttribute("onclick", "validar2()");
boton2.setAttribute("onclick", "mensaje2()");
boton2.innerHTML = "Desencriptar";
document.body.appendChild(boton2);

// crear una funcion para ocultar el background-image y el h2 y h3 del texto encriptado
function ocultar() {
    var input2 = document.getElementById("input2");
    input2.style.backgroundImage = "none";
    var h2 = document.getElementsByClassName("h2")[0];
    h2.style.display = "none";
    var h3 = document.getElementsByClassName("h3")[0];
    h3.style.display = "none";
}

// funcion para vaciar el input 
function vaciar() {
    var input = document.getElementById("input",);
    
    input.value = "";
}

// Funcion para encriptar texto que remplaze las vocales e por enter por i = imes por a = ai por o = ober por u = ufat
function encriptar() {
    var texto = document.getElementById("input").value;
    var texto2 = texto.toLowerCase();
    var texto3 = texto2.replace(/e/g, "enter");
    var texto4 = texto3.replace(/i/g, "imes");
    var texto5 = texto4.replace(/a/g, "ai");
    var texto6 = texto5.replace(/o/g, "ober");
    var texto7 = texto6.replace(/u/g, "ufat");
    document.getElementById("input2").value = texto7;
    ocultar();
    copiar3();
    // vaciar();

}

// funcion para desencriptar 
function desencriptar() {
    var texto = document.getElementById("input").value;
    var texto2 = texto.toLowerCase();
    var texto3 = texto2.replace(/enter/g, "e");
    var texto4 = texto3.replace(/imes/g, "i");
    var texto5 = texto4.replace(/ai/g, "a");
    var texto6 = texto5.replace(/ober/g, "o");
    var texto7 = texto6.replace(/ufat/g, "u");
    document.getElementById("input2").value = texto7;
    validar2();
    if(texto7.length>1){
        
        ocultar();
        copiar3();
        // vaciar();
    }else if(texto7.length==0){
        alert("No hay texto para desencriptar.");
    }
          
    
}

// impedir que se pueda escribir en el area resultado
//  FUNCIONA
document.getElementById("input2").disabled = true;

//----------------------------------------------------------------------------------------------------------------------
// copiar el contenido encriptado en el portapapeles sin usar execCommand
// FUNCIONA
function copiar() {
    var texto = document.getElementById("input2").value;
    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    
    
}

// crear una funcion que muestre el boton copiar3
function copiar3() {
    var boton3 = document.createElement("button");
    boton3.setAttribute("id", "boton3");
    boton3.setAttribute("onclick", "copiar()");
    boton3.setAttribute("class", "btn-copiar");
    boton3.innerHTML = "Copiar";
    document.body.appendChild(boton3);
}


//---------------------------------------------------------------------------------------------------


//crear una funcion que si el elemento input.length es mayor a 0 oculte el h2 y el h3, sino, muestre el h2 y el h3
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






//----------------------------------------------------------------------------------------------------------------------

