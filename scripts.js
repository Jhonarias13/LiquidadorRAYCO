(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {

        const precioTecno = document.querySelector('#precioTecno');
        const precioRAYCO = document.querySelector('#precioRAYCO');
        const btnSubmit = document.querySelector('#submit');
        const btnLimpiar = document.querySelector('#limpiar');
        const incremento = 30000;
        const numberFormat = new Intl.NumberFormat("en-US");

        //variables
        let inputNumeroUno, producto;

        //eventos
        btnSubmit.addEventListener('click', liquidar);
        btnLimpiar.addEventListener('click', limpiar);

        //funciones
        function liquidar() {
            inputNumeroUno = precioTecno.value;
            producto = (parseInt(inputNumeroUno) + parseInt(incremento)) * 1.15;
            precioRAYCO.value = '$ ' + numberFormat.format(producto);
        }

        function limpiar() {
            precioTecno.value = '';
            precioTecno.focus();
            precioRAYCO.value = '';
        }
    });
}());