
/*
OtherExpenses
SalesNotSubject
ExemptSales
TaxedSales
*/ 

export function hello(){
    console.log("mundo2")
}



// funcion para guardar el array con peraciones 
export function infoListProductCCF(infoListProductCCF){
    
    let listPrduc = infoListProductCCF
    
    listPrduc.forEach((item) => {
        const total = (item.CantProduc * item.UnitValue) - item.DiscountValue; //operacion de multiplicacion y resta
        //pregunta por el elemento para realizar las operaciones correspondients 

        if (item.OtherExpenses === 1) {
            item.OtherExpenses = total.toFixed(2);
            item.SalesNotSubject = 0.00;
            item.ExemptSales = 0.00
            item.TaxedSales = 0.00;
        } else if (item.SalesNotSubject === 2) {
            item.OtherExpenses = 0.00;
            item.SalesNotSubject = total.toFixed(2);
            item.ExemptSales = 0.00;
            item.TaxedSales = 0.00;
        } else if (item.ExemptSales === 3) {
            item.OtherExpenses = 0.00;  
            item.SalesNotSubject = 0.00;
            item.ExemptSales = total.toFixed(2);
            item.TaxedSales = 0.00;
        } else {
            item.OtherExpenses = 0.00;
            item.SalesNotSubject = 0.00;
            item.ExemptSales = 0.00;
            item.TaxedSales = total.toFixed(2);
        }
      });
      
      console.log("array reconstruido");
      console.log(listPrduc);
      return listPrduc;
}

// funcion para srealizar la suma de las columnas segun el tipo de venta realizado
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

export function calCuTaxes(totalSumAllItem){
     let taxes = {
        Iva: 0.00,
        retenIva : 0.00,
        rentaISR: 0.00
     }
    
    console.log("numdo 4")
    const tSumAllItem = totalSumAllItem
    console.log(tSumAllItem);
    taxes.Iva = tSumAllItem.sumTaxedSales * 0.13

    taxes.rentaISR = tSumAllItem.sumTaxedSales * 0.10

     if (tSumAllItem.sumTaxedSales > 100){
        taxes.retenIva = tSumAllItem.sumTaxedSales*0.01
     }
    

     console.log(taxes);
     console.log("saliendo de la funcion de impuestos ");
    return taxes;
}

