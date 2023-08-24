

export function paintFactInfoClient (infoclientcff){
    const infoclient = infoclientcff;
    //console.log(infoclient);

    const infoBox = `
            <h5>nombre o razon social:</h5> <p>${infoclient.name}</p>
            <h5>NIT:</h5> <p>${infoclient.infoNIT}</p>
            <h5>NRC:</h5> <p>${infoclient.infoNRC}</p>
            <h5>Actividad economica:</h5> <p>${infoclient.economicActivity}</p>
            <h5>Direccion:</h5> <p>${infoclient.addressInfo}</p>
            <h5>Correo Electronico:</h5> <p>${infoclient.customerEmail}</p>
            <h5>nombre Comercial:</h5> <p>${infoclient.comercialName}</p>
    `;
    return infoBox;
}


export function addItemCCF (listtProduct) {
    const tableBody = document.querySelector('.fact-body-tproduct');
    const listDetailProduct = listtProduct;
    console.log ("aqui esta lo que estra en el arrray para pasar a la tabla")
    console.log (listDetailProduct)
    listDetailProduct.forEach((item, index) => {
        const newRow = tableBody.insertRow();
        
        newRow.insertCell().textContent = index + 1;
        
        // Verificar si los valores son números antes de realizar operaciones numéricas
        newRow.insertCell().textContent = isNaN(parseFloat(item.CantProduc)) ? '' : parseFloat(item.CantProduc).toFixed(2);
        newRow.insertCell().textContent = item.DescriptSvcProduct;
        newRow.insertCell().textContent = isNaN(parseFloat(item.UnitValue)) ? '' : parseFloat(item.UnitValue).toFixed(2);
        newRow.insertCell().textContent = isNaN(parseFloat(item.DiscountValue)) ? '' : parseFloat(item.DiscountValue).toFixed(2);
        newRow.insertCell().textContent = item.OtherExpenses || '0.00'; 
        newRow.insertCell().textContent = item.SalesNotSubject || '0.00'; 
        newRow.insertCell().textContent = item.ExemptSales || '0.00'; 
        newRow.insertCell().textContent = item.TaxedSales || '0.00'; 
    });
    
    return listDetailProduct;
}
 /*construcion de la tabla de totales*/


 export function tableTotalSum (totalSumAllItem){
    const sumAllItem = totalSumAllItem
    console.log(sumAllItem)
    const tableSuma = `
    <table>
                    <thead>
                        <th></th>
                        <th>Otros Montos NO Afectados</th>
                        <th>Ventas No sujetas</th>
                        <th>Ventas Exentas</th>
                        <th>Ventas Gravadas</th>
                    </thead>
                    <tbody>
                        <td>Sumas Totales</td>
                        <td>$ ${sumAllItem.sumOtherExpenses} </td>
                        <td>$ ${sumAllItem.sumSalesNotSubject} </td>
                        <td>$ ${sumAllItem.sumExemptSales} </td>
                        <td>$ ${sumAllItem.sumTaxedSales} </td>
                    </tbody>
                </table>
    `

    return tableSuma;
 }
 


 export function tableTaxes (taxesItem, totalSumAllItem) {
    const sumAllItem = totalSumAllItem
    const taxes = taxesItem
    const Sumtotal = sumAllItem.sumOtherExpenses + sumAllItem.sumSalesNotSubject + sumAllItem.sumExemptSales + sumAllItem.sumTaxedSales;
    
    let subTotalCFF =  Sumtotal +taxes.Iva


    let totalSumasCCF = subTotalCFF + taxes.retenIva + taxes.rentaISR

    function formatValue(value) {
        return parseFloat(value).toFixed(2);
    }

    const tableTaxes = `
        <tr>
            <td>Suma Total de Operaciones</td>
            <td>$ ${formatValue(Sumtotal)}</td>
        </tr>
        <tr>
            <td>IVA 13%</td>
            <td>$ ${formatValue(taxes.Iva)}</td>
        </tr>
        <tr>
            <td>Sub total</td>
            <td>$ ${formatValue(subTotalCFF)}</td>
        </tr>
        <tr>
            <td>IVA Percibido</td>
            <td>$ ${formatValue(0)}</td>
        </tr>
        <tr>
            <td>IVA Retenido</td>
            <td>$ ${formatValue(taxes.rentaISR)}</td>
        </tr>
        <tr>
            <td>Retencion de Renta</td>
            <td>$ ${formatValue(taxes.retenIva)}</td>
        </tr>
        <tr>
            <td>Total a Pagar</td>
            <td>$ ${formatValue(totalSumasCCF)}</td>
        </tr>
    
    `
    return tableTaxes
 }