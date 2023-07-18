function calcular() {
    var select = document.getElementById("categoria");
    var categoriaSeleccionada = select.value;
    var porcentaje;

    var cantidadComprada = document.getElementById("cantidad");
    var cantidadEntradas = parseInt(cantidadComprada.value);

    var h4 = document.getElementById("resultado");
    
    var porcentaje = 1.0;
    
    console.log(categoriaSeleccionada);

    switch (categoriaSeleccionada) {
        case "es":
            porcentaje = 0.20;
            break;
        case "tr":
            porcentaje = 0.50;
            break;
        case "ju":
            porcentaje = 0.85;
            break;
    }
    
    if (cantidadEntradas > 10) {
        h4.textContent = "Cantidad máxima permitida: 10 entradas";
        document.getElementById("total-pagar").style.backgroundColor="red";

    } else if (cantidadEntradas > 0) {
        var resultado = cantidadEntradas * 200 * porcentaje;
        document.getElementById("total-pagar").style.backgroundColor="rgb(160, 179, 201)";
        h4.textContent = "Total a Pagar: $ " + resultado;
    } else {
        document.getElementById("total-pagar").style.backgroundColor="rgb(160, 179, 201)";
        h4.textContent = "Total a Pagar: $ ";
    } 
}

function borrar() {
    var h4 = document.getElementById("resultado");
    h4.textContent ="Total a Pagar: $"
    document.getElementById("total-pagar").style.backgroundColor="rgb(160, 179, 201)";

    var cantidadComprada = document.getElementById("cantidad");
    cantidadComprada.value = "";


}

function validarLetras(input) {
    var regex = /[^a-zA-Z\s]/g;
    input.value = input.value.replace(regex, '');
}

function validarEmail(input) {
    var regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    var esValido = regex.test(input.value);
    var arrobas = input.value.split("@").length - 1;
    
    if (!esValido || arrobas > 1) {
        input.setCustomValidity("Ingresa una dirección de correo electrónico válida");
    } else {
        input.setCustomValidity("");
    }
}
