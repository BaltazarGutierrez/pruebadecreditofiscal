

/*llamando a las variables*/ 
const optionMenuCcf = document.getElementById("optionMenuCcf");
const sectionCreditoFiscal = document.getElementById("sectionCreditoFiscal")
const listInfoClient = document.getElementById("listInfoClient")
const customerInformationCcf = document.getElementById("customer-information-ccf");
const buttonSave = document.getElementById("buttonSave")
const infoCreateCcf= document.getElementById("infoCreateCcf")
const listProductsCF = document.getElementById("listProductsCF")
const buttonSaveCFF = document.getElementById("buttonSaveCFF")
const buttonAddCFF = document.getElementById ("buttonAddCFF");

let listDetailProduct = []
let boxInfo = []
let boxCreditoFiscInfo = []
let selectTypeVent = []

/*construyendo los objetos para la construccion HTML*/

class Client {
    constructor(infoIdName, infoDescript, typeDato, placeholder){
        this.infoIdName = infoIdName,
        this.infoDescript = infoDescript,
        this.typeDato = typeDato,
        this.placeholder = placeholder
    }

}

class InfoCreditoFiscal {
    constructor(infoNameCff, infoDescriptItem, typeDatoCff, placeholderCcf, typeSaleCFF){
        this.infoNameCff = infoNameCff,
        this.infoDescriptItem = infoDescriptItem,
        this.typeDatoCff = typeDatoCff,
        this.placeholderCcf = placeholderCcf,
        this.typeSaleCFF = typeSaleCFF,
        this.OtherSales = '0.00',
        this.SaleNoSujet = '0.00',
        this.ExtSale = '0.00',
        this.totalSales = '0.00'
    }
}

/*prime captura de datos de informacion de cliente*/ 
let boxName = new Client("name","Nombre de cliente:", "text", "Nombre o Razon Social");
let boxNit = new Client("infoNIT","Documento de Identidad:", "text", "NIT o DUI");
let boxNrc = new Client("infoNRC","Numero de IVA:", "text", "Numero de Registo de Contribuyente");
let boxEconomicActivity = new Client("economicActivity","Actividad Economica:", "text", "Actividad segun Tarjeta de IVA");
let boxAddressInfo = new Client("addressInfo","Direccion:", "text", "Departamento, Municipio, Calle, local");
let boxCustomerEmail = new Client("customerEmail","Correo Electronico:", "text", "ejemplo@extencion.com");
let boxComercialName = new Client("comercialName","Nombre Comercial:", "text", "Nombre comercial o nombre");
boxInfo.push(boxName, boxNit, boxNrc, boxAddressInfo, boxEconomicActivity, boxCustomerEmail, boxComercialName)
/* captura de datos para productos*/

let boxCant = new InfoCreditoFiscal ("CantProduc", "Cantidad de Producto", "number", "Ingrese la Cantidad de Productos");
let boxDescriptSvcProduct = new InfoCreditoFiscal ("DescriptSvcProduct", "Description de Producto", "text", "Descripcion de servicio");
let boxUnitValue = new InfoCreditoFiscal ("UnitValue", "Precio Unitario", "number", "$ 0.00");
let boxDiscountValue = new InfoCreditoFiscal ("DiscountValue", "Descuento", "number", "$ 0.00");
boxCreditoFiscInfo.push(boxCant, boxDescriptSvcProduct, boxUnitValue, boxDiscountValue);

let boxOtherExpenses = new InfoCreditoFiscal ("OtherExpenses", "Otros Montos No Afectados", "radio");
let boxSalesNotSubject = new InfoCreditoFiscal ("SalesNotSubject", "Ventas No Sujetas", "radio");
let boxExemptSales = new InfoCreditoFiscal ("ExemptSales", "Ventas Exentas", "radio");
let boxTaxedSales = new InfoCreditoFiscal ("TaxedSales", "Ventas Gravadas", "radio");
selectTypeVent.push(boxOtherExpenses, boxSalesNotSubject, boxExemptSales, boxTaxedSales)

let checkedOtherExpenses
let checkedSalesNotSubject
let checkedExemptSales
let checkedTaxedSales

const capturedDataCCfClient = {};
const capturedDataCCf = {};

/*Funcion que abri y cierra la captra de datos del cliente*/



optionMenuCcf.addEventListener("click", function toggleOptionMenuCcf(){
    const isClosed = sectionCreditoFiscal.classList.contains('disable');   
    if (!isClosed){
        sectionCreditoFiscal.classList.add('disable');
    }else {
        sectionCreditoFiscal.classList.remove('disable')
    } 
});

/*Funcion que abri y cierra la captra de datos del cliente*/



function startApp(){
    boxInfo.forEach((Client)=> {
        const infoBoxClient = 
        `<li>
        <label for=${Client.infoIdName}>${Client.infoDescript}</label>
        <input type=${Client.typeDato} id="${Client.infoIdName}" placeholder=${Client.placeholder}>
        </li>`;
        listInfoClient.innerHTML += infoBoxClient

    })
    
}

startApp();


/* Función para capturar los datos de los inputs */
function captureData() {

    boxInfo.forEach((Client) => {
        const inputElement = document.getElementById(Client.infoIdName);
        const inputValue = inputElement.value; 
        capturedDataCCfClient[Client.infoIdName] = inputValue;  
    });

    console.log(capturedDataCCfClient);
    sectionCreditoFiscal.classList.add('disable');
    infoCreateCcf.classList.remove('disable');
    dataCaptureCff();
    paintFactInfoClient(capturedDataCCfClient);

}

buttonSave.addEventListener("click", captureData);

// aqui toma los valores de la segunda seccion

function dataCaptureCff(){
    boxCreditoFiscInfo.forEach((InfoCreditoFiscal)=> {
        const infoBoxProduc = 
        `<li>
        <label for=${InfoCreditoFiscal.infoNameCff}>${InfoCreditoFiscal.infoDescriptItem}</label>
        <input type=${InfoCreditoFiscal.typeDatoCff} id="${InfoCreditoFiscal.infoNameCff}" placeholder=${InfoCreditoFiscal.placeholderCcf} $InfoCreditoFiscal.typeDatoCff === "number" ? 'step="0.00" pattern="^\d+(?:\.\d{1,2})?$"' : ''>
        </li>`;
        
        listProductsCF.innerHTML += infoBoxProduc

    })
    selectTypeVent.forEach((InfoCreditoFiscal)=> {
        const infoBoxProduc = 
        `<li>
        <label for=${InfoCreditoFiscal.infoNameCff}>${InfoCreditoFiscal.infoDescriptItem}</label>
        <input type=${InfoCreditoFiscal.typeDatoCff} name="saleType" id="${InfoCreditoFiscal.infoNameCff}" placeholder=${InfoCreditoFiscal.placeholderCcf} $InfoCreditoFiscal.typeDatoCff === "number" ? 'step="0.00" pattern="^\d+(?:\.\d{1,2})?$"' : ''>
        </li>`;
        
        listProductsCF.innerHTML += infoBoxProduc
        
        checkedOtherExpenses = document.getElementById("OtherExpenses")
        checkedSalesNotSubject = document.getElementById("SalesNotSubject")
        checkedExemptSales = document.getElementById("ExemptSales")
        checkedTaxedSales = document.getElementById("TaxedSales")

    })
    buttonSaveCFF.addEventListener("click", captureDataCreditoF);
    buttonAddCFF.addEventListener("click", captureDataAddCreditoF);
}

function captureDataCreditoF() {
    

    /*boxCreditoFiscInfo.forEach((InfoCreditoFiscal) => {
        const inputElement = document.getElementById(InfoCreditoFiscal.infoNameCff);
        console.log(InfoCreditoFiscal.infoNameCff);
        const inputValue = inputElement.value; 
        capturedDataCCf[InfoCreditoFiscal.infoNameCff] = inputValue;  
    });*/

    console.log();
    infoCreateCcf.classList.add('disable');

    selectSaleOptionsCF();
    
}

function captureDataAddCreditoF() {
    
    boxCreditoFiscInfo.forEach((InfoCreditoFiscal) => {
        const inputElement = document.getElementById(InfoCreditoFiscal.infoNameCff);
        const inputValue = inputElement.value;

        if (InfoCreditoFiscal.typeDatoCff === "number") {
            capturedDataCCf[InfoCreditoFiscal.infoNameCff] = inputValue;
            inputElement.value = "0.00";
        }
        if (InfoCreditoFiscal.typeDatoCff === "text") {
            capturedDataCCf[InfoCreditoFiscal.infoNameCff] = inputValue || " ";
            inputElement.value = " ";
        }
    });

    // Asigna valores según las opciones seleccionadas
    if (checkedOtherExpenses.checked) {
        capturedDataCCf.OtherSales = capturedDataCCf.UnitValue;
    } else if (checkedSalesNotSubject.checked) {
        capturedDataCCf.SaleNoSujet = capturedDataCCf.UnitValue;
    } else if (checkedExemptSales.checked) {
        capturedDataCCf.ExtSale = capturedDataCCf.UnitValue;
    }

    // Calcula y asigna el total de ventas para cada caso
    const totalSales = capturedDataCCf.CantProduc * capturedDataCCf.UnitValue;
    capturedDataCCf.OtherSalesTotal = (parseFloat(capturedDataCCf.OtherSales) * capturedDataCCf.CantProduc).toFixed(2);
    capturedDataCCf.SaleNoSujetTotal = (parseFloat(capturedDataCCf.SaleNoSujet) * capturedDataCCf.CantProduc).toFixed(2);
    capturedDataCCf.ExtSaleTotal = (parseFloat(capturedDataCCf.ExtSale) * capturedDataCCf.CantProduc).toFixed(2);
    capturedDataCCf.totalSales = totalSales.toFixed(2);

    console.log(capturedDataCCf);
    listDetailProduct.push({ ...capturedDataCCf }); // Guarda una copia de los datos en el array
    console.log(listDetailProduct);
    selectSaleOptionsCF();
    addItemCCF();
}

function selectSaleOptionsCF() {
    
    if (checkedOtherExpenses.checked) {
        const sumsalesCalcOE =  salesCalc (listDetailProduct);
        const sumTotalItemOE = sumSales(sumsalesCalcOE);
        console.log("Total sum:", sumTotalItemOE);
        console.log("funcion de otras no sujetas");
    } else if (checkedSalesNotSubject.checked) {
        const sumsalesCalcSNS =  salesCalc (listDetailProduct);
        const sumTotalItemSNS = sumSales(sumsalesCalcSNS);
        console.log("Total sum:", sumTotalItemSNS);
        console.log("ventas no sujetas");
    } else if (checkedExemptSales.checked) {
        const sumsalesCalcExentS =  salesCalc (listDetailProduct);
        const sumTotalItemExentS = sumSales(sumsalesCalcExentS);
        console.log("Total sum:", sumTotalItemExentS);
        console.log("ventas exentas");
    } else if (checkedTaxedSales.checked) {
        const sumsalesCalc =  salesCalc (listDetailProduct);
        const sumTotalItem = sumSales(sumsalesCalc);
        console.log("Total sum:", sumTotalItem);
        console.log("ventas gravadas");
    }
     
}

function salesCalc(sendDatosCFF) {
    const valueSale = sendDatosCFF
    const totalSalesCalc = [];

    valueSale.forEach(item => {
        const cantProduc = parseFloat(item.CantProduc); //convertir a un numero para operar
        const unitValue = parseFloat(item.UnitValue);
        const operation = cantProduc * unitValue
        totalSalesCalc.push(operation.toFixed(2)); // propieda que agrega dos cero
    });
    for (let i = 0; i < valueSale.length; i++) {
        valueSale[i].totalSales = totalSalesCalc[i];
    }
    console.log(totalSalesCalc); 
    return totalSalesCalc;
}

/*suma los array */

function sumSales(item){

    const resutSumAllItem = item.reduce((sum, value) => sum + parseFloat(value), 0);
    return resutSumAllItem.toFixed(2);
}


const infoBoxRecept = document.getElementById("infoRecp")
function paintFactInfoClient (infoclientcff){
    const infoclient = infoclientcff;
    console.log("Esta es la información para construir la caja");
    console.log(infoclient);

    const infoBox = `
            <h5>nombre o razon social:</h5> <p>${infoclient.name}</p>
            <h5>NIT:</h5> <p>${infoclient.infoNIT}</p>
            <h5>NRC:</h5> <p>${infoclient.infoNRC}</p>
            <h5>Actividad economica:</h5> <p>${infoclient.economicActivity}</p>
            <h5>Direccion:</h5> <p>${infoclient.addressInfo}</p>
            <h5>Correo Electronico:</h5> <p>${infoclient.customerEmail}</p>
            <h5>nombre Comercial:</h5> <p>${infoclient.comercialName}</p>
    `;

    infoBoxRecept.innerHTML = infoBox;
}

const tableBody = document.querySelector('.fact-body-tproduct');
function addItemCCF () {
    tableBody.innerHTML = ''; // Limpiamos el contenido existente de la tabla
    
    listDetailProduct.forEach((item, index) => {
        const newRow = tableBody.insertRow(); // Crea una nueva fila

        newRow.insertCell().textContent = index + 1;
        newRow.insertCell().textContent = parseFloat(item.CantProduc).toFixed(2); // Convertir a número y ajustar formato
        newRow.insertCell().textContent = item.DescriptSvcProduct; // Convertir a número y ajustar formato
        newRow.insertCell().textContent = parseFloat(item.UnitValue).toFixed(2); // Convertir a número y ajustar formato
        newRow.insertCell().textContent = parseFloat(item.DiscountValue).toFixed(2); // Convertir a número y ajustar formato
        newRow.insertCell().textContent = parseFloat(item.OtherSales).toFixed(2); // Convertir a número y ajustar formato
        newRow.insertCell().textContent = parseFloat(item.SaleNoSujet).toFixed(2); // Convertir a número y ajustar formato
        newRow.insertCell().textContent = parseFloat(item.ExtSale).toFixed(2); // Convertir a número y ajustar formato
        const totalSales = (parseFloat(item.CantProduc) * parseFloat(item.UnitValue)).toFixed(2);
        newRow.insertCell().textContent = totalSales;
    });
}

