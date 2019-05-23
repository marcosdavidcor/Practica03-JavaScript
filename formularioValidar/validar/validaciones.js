var cedula = document.getElementById("cedula");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
var fechana = document.getElementById("fechana");
var correo = document.getElementById("correo");


cedula.addEventListener('input', validarCedula)
nombre.addEventListener('input', validarLetras)
apellido.addEventListener('input', validarLetrasA)
direccion.addEventListener('input', validarLetrasD)
telefono.addEventListener('input', validarNumeros)
fechana.addEventListener('input', validarFecha)
correo.addEventListener('input', validarCorreo2)

function validarCamposObligatorios(formulario) {

    for (var i = 0; i < formulario.length - 2; i++) {
        var elemento = formulario.elements[i];
        elemento.style.border = "2px solid green";
        //alert(elemento.value);
        if (formulario.elements[i].value == '' || elemento.value == null) {
            alert("Elementos vacios, llene todos los campos *");
            elemento.style.border = "2px solid red";
            return false;
        }
    }
    var c = 0;
    if (validarCedula() == true) {
        c++;
    } else {
        return false;

    }
    if (validarLetras() == true) {
        c++;
    } else {
        return false;
    }
    if (validarCorreo2() == true) {
        c++;
    } else {
        return false;

    }
    if (validarNumeros() == true) {
        c++;
    } else {
        return false;

    }
    if (validarLetrasA() == true) {
        c++;
    } else {
        return false;

    }
    if (validarLetrasD() == true) {
        c++;
    } else {
        return false;

    }

}

function validarCedula() {
    //document.getElementById('cedula').style.border = "2px solid black";
    var numero = cedula.value;
    if (numero.length > 9) {
        var total = 0;
        var longitud = numero.length;
        var checkLongitud = longitud - 1;
        if (numero != '' && longitud == 10) {
            for (var i = 0; i < checkLongitud; i++) {
                if (i % 2 == 0) {
                    var aux = numero.charAt(i) * 2;
                    if (aux > 9)
                        aux -= 9;
                    total += aux;
                } else {
                    total += parseInt(numero.charAt(i));
                }
            }
            total = total % 10 ? 10 - total % 10 : 0;

            if (numero.charAt(longitud - 1) == total) {
                cedula.style.border = "2px solid green";
                console.log('Valio')
                return true;
            } else {
                console.log('No Valio')
                cedula.style.border = "2px solid red";
                return false;
            }
        } else {
            alert("ingrese 10 digitos en el campo cedula");
            cedula.style.border = "2px solid red";
            return false;
        }
    }

}

function validarCorreo2() {

    campo = event.target;
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        //alert('Valido')
        correo.style.border = "2px solid green";
    } else {
        //alert('No Valido')
        correo.style.border = "2px solid red";
    }

}

function validarLetras(event) {
    console.log(event)
    
    regLetras = /^[a-zA-Z\s]+$/i;
    if (regLetras.test(nombre.value)) {
        nombre.style.border = "2px solid green";
    } else {
        nombre.style.border = "2px solid red";
        alert('Solo letras')
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
            event.preventDefault();
        }

    }

}
function validarLetrasA(event) {
    console.log(event)
    
    regLetrasA = /^[a-zA-Z\s]+$/i;
    if (regLetrasA.test(apellido.value)) {
        apellido.style.border = "2px solid green";
    } else {
        apellido.style.border = "2px solid red";
        alert('Solo letras')
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
            event.preventDefault();
        }
   
}
}

function validarLetrasD(event) {
    console.log(event)
    regLetrasD = /^[a-zA-Z]+$/i && /^[0-9]+$/i;
    regNumeros = /^[0-9]+$/i;
    if (regLetrasD.test(direccion.value) && regNumeros.test(direccion.value)) {
        direccion.style.border = "2px solid green";
    } else {
        direccion.style.border = "2px solid green";
        //alert('Solo letras')
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
            if (!(key >= 48 && key <= 57) || (key == 8)) {
                event.preventDefault();
            }
        }
    }

}
function validarNumeros(event) {
    console.log(event)
   
    regNumeros = /^[0-9]+$/i;
    if (regNumeros.test(telefono.value)) {
        telefono.style.border = "2px solid green";
    } else {
        telefono.style.border = "2px solid red";
        alert('Solo Numeros')
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if (!(key >= 48 && key <= 57) || (key == 8)) {
            event.preventDefault();
        }
   
    }

}
function validarFecha(event) {
    console.log(event)
    if (fechana.value.length > 8) {
        regFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i;
        if (regFecha.test(fechana.value)) {
            fechana.style.border = "2px solid green";
        } else {
            fechana.style.border = "2px solid red";
            alert('Formato invalido ingrese dia,mes,año')
            var inputValue = event.which;
            // allow letters and whitespaces only.

        }
    }
}
