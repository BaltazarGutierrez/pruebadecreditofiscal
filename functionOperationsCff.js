
/*
OtherExpenses
SalesNotSubject
ExemptSales
TaxedSales
*/ 


function salesCalc() {
    const cantProduct = 15
    const valueUnit = 5
    let valueSales = cantProduct * valueUnit;
    console.log(valueSales)
    return valueSales;
}
salesCalc();

let calcTaxedSales = salesCalc() * 0.13;
console.log(calcTaxedSales)



function sumSales(){
    const valueSale =[
        {CantProduc: '1', DescriptSvcProduct: 'sistema1', UnitValue: '200.00', DiscountValue: '0.00'},
        {CantProduc: '2', DescriptSvcProduct: 'base de datos', UnitValue: '800.00', DiscountValue: '0.00'},
        {CantProduc: '3', DescriptSvcProduct: ' revision de program', UnitValue: '100', DiscountValue: '3.10'}
    ]

    const cantProducValues = [];
    const unitValueValues = [];

    valueSale.forEach(item => {
        cantProducValues.push(item.CantProduc);
        unitValueValues.push(item.UnitValue);
    });

    console.log(cantProducValues); 
    console.log(unitValueValues);   
}