

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
