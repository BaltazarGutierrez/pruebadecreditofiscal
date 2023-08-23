
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


export function sumaItem (listDetailProduct){

    let itemSumaAll = {
        sumOtherExpenses: 0.00,
        sumSalesNotSubject: 0.00,
        sumExemptSales: 0.00,
        sumTaxeSales: 0.00
    };
    
    listDetailProduct.forEach((item) => {
        itemSumaAll.sumOtherExpenses += parseFloat(item.OtherExpenses);
        itemSumaAll.sumSalesNotSubject += parseFloat(item.SalesNotSubject);
        itemSumaAll.sumExemptSales += parseFloat(item.ExemptSales);
        itemSumaAll.sumTaxeSales += parseFloat(item.TaxedSales);
    })

    console.log (itemSumaAll);
    return itemSumaAll
}
