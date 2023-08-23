
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

        if (item.ExemptSales === 1) {
          item.ExemptSales = total.toFixed(2);
          item.OtherExpenses = 0.00;
          item.SalesNotSubject = 0.00;
          item.TaxedSales = 0.00;
        } else if (item.OtherExpenses === 2) {
          item.ExemptSales = 0.00;
          item.OtherExpenses = total.toFixed(2);
          item.SalesNotSubject = 0.00;
          item.TaxedSales = 0.00;
        } else if (item.SalesNotSubject === 3) {
          item.ExemptSales = 0.00;
          item.OtherExpenses = 0.00;
          item.SalesNotSubject = total.toFixed(2);
          item.TaxedSales = 0.00;
        } else {
          item.ExemptSales = 0.00;
          item.OtherExpenses = 0.00;
          item.SalesNotSubject = 0.00;
          item.TaxedSales = total.toFixed(2);
        }
      });
      
      console.log("array reconstruido");
      console.log(listPrduc);
      return listPrduc;
}