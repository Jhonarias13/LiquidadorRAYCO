const precioTecno = document.querySelector('#precioTecno');
const precioRAYCO = document.querySelector('#precioRAYCO');
const btnSubmit = document.querySelector('#submit');
const btnLimpiar = document.querySelector('#limpiar')
const porcentaje = 15 / 100;
const valorAdicional = 30000

let inputNumeroUno, cociente, producto;

function mensaje() {
    inputNumeroUno = parseInt(precioTecno.value);
    // let inputNumeroDos = parseInt(precioRAYCO.value);

    cociente = (inputNumeroUno + valorAdicional) * porcentaje;
    producto = inputNumeroUno + valorAdicional + cociente;

    precioRAYCO.value = '$ ' + producto;

}

function limpiar() {
    precioTecno.value = '';
    precioTecno.focus();

    precioRAYCO.value = '';
}

btnSubmit.addEventListener('click', mensaje);
btnLimpiar.addEventListener('click', limpiar);