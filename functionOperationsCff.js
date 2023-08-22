
/*
OtherExpenses
SalesNotSubject
ExemptSales
TaxedSales
*/ 


function salesCalc(sendDatosCFF) {
    const valueSale = sendDatosCFF

    const totalSalesCalc = [];

    valueSale.forEach(item => {
        const cantProduc = parseFloat(item.CantProduc); //convertir a un numero para operar
        const unitValue = parseFloat(item.UnitValue);
        const operation = cantProduc * unitValue
        totalSalesCalc.push(operation.toFixed(2)); // propieda que agrega dos cero
    });
    
    console.log(totalSalesCalc); 
    return totalSalesCalc;
}

/*suma los array */

function sumSales(item){

    const resutSumAllItem = item.reduce((sum, value) => sum + parseFloat(value), 0);
    return resutSumAllItem.toFixed(2);
}


/*const sumaSaleItem = salesCalc();
const sumTotalItem = sumSales(sumaSaleItem)
console.log(sumTotalItem)*/