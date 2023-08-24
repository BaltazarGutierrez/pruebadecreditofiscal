# pruebadecreditofiscal
un archivo de prueba de credito fiscal 

es un modulo sensillo solo funciona el decredito fiscal y funciona con click para pasar enre los input

aun falta agregar la funcion para convertir los numeros en string automaticamente  tambien la de convertir a objeto JSON la captura de numeros he tenido probelas con agrear las librerias:

//import * as numberToWords from './node_modules/number-to-words';
//const fs = require('fs');


Aunque no se porque, ademas he usado chatGTP para que escriba algunas lineas pero no la logica por ejemplo:

export function sumaItem (listDetailProduct){

        let sumaAll = {
            sumOtherExpenses: 0.00,
            sumSalesNotSubject: 0.00,
            sumExemptSales: 0.00,
            sumTaxedSales: 0.00,
        }
    

    listDetailProduct.forEach((item) => {
        sumaAll.sumOtherExpenses += parseFloat(item.OtherExpenses);
        sumaAll.sumSalesNotSubject += parseFloat(item.SalesNotSubject);
        sumaAll.sumExemptSales += parseFloat(item.ExemptSales);
        sumaAll.sumTaxedSales += parseFloat(item.TaxedSales);
    });
    return sumaAll;
}
en esa funcion se agregor em modulo 'parseFloat()' para convertir a numeros los datos, y en el objeto 'sumaAll' agrego los los '0.00' para que saliera en el archivo 

o cuando una funcion no corria bien o me daba error la pasaba para saber donde estaba en el error  pero la logia de como funciona no fue hecha por mi aun se que se puede mejorar este modulo pero lo envio entre hoy y mañana veria cual es el problema con las librerias pero no cambiaria mucho el modulo por lo que se lo comparto el repositorio en gitHUB

que me dio el problema de que el archivo main tenia historias diferente porque lo hice cuando ya habia iniciado el proyecto y no antes 

