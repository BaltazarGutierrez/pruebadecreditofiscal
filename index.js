/*llamando a las variables*/ 
const optionMenuCcf = document.getElementById("optionMenuCcf");
const sectionCreditoFiscal = document.getElementById("sectionCreditoFiscal")
const listInfoClient = document.getElementById("listInfoClient")
const customerInformationCcf = document.getElementById("customer-information-ccf");
const buttonSave = document.getElementById("buttonSave")
const infoCreateCcf= document.getElementById("infoCreateCcf")
const listProductsCF = document.getElementById("listProductsCF")
const buttonSaveCFF = document.getElementById("buttonSaveCFF")

let boxInfo = []
let boxCreditoFiscInfo = []

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
    constructor(infoNameCff, infoDescriptItem, typeDatoCff, placeholderCcf){
        this.infoNameCff = infoNameCff,
        this.infoDescriptItem = infoDescriptItem,
        this.typeDatoCff = typeDatoCff,
        this.placeholderCcf = placeholderCcf
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
let boxOtherExpenses = new InfoCreditoFiscal ("OtherExpenses", "Otros Montos No Afectados", "number", "$ 0.00");
let boxSalesNotSubject = new InfoCreditoFiscal ("SalesNotSubject", "Ventas No Sujetas", "number", "$ 0.00");
let boxExemptSales = new InfoCreditoFiscal ("ExemptSales", "Ventas Exentas", "number", "$ 0.00");
let boxTaxedSales = new InfoCreditoFiscal ("TaxedSales", "Ventas Gravadas", "number", "$ 0.00");
boxCreditoFiscInfo.push(boxCant, boxDescriptSvcProduct, boxUnitValue, boxDiscountValue, boxOtherExpenses, boxSalesNotSubject, boxExemptSales, boxTaxedSales );

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
    const capturedData = {};

    boxInfo.forEach((Client) => {
        const inputElement = document.getElementById(Client.infoIdName);
        const inputValue = inputElement.value; 
        capturedData[Client.infoIdName] = inputValue;  
    });

    console.log(capturedData);
    sectionCreditoFiscal.classList.add('disable');
    infoCreateCcf.classList.remove('disable');
    dataCaptureCff();

}

buttonSave.addEventListener("click", captureData);

// aqui toma los valores de la segunda seccion

function dataCaptureCff(){
    boxCreditoFiscInfo.forEach((InfoCreditoFiscal)=> {
        const infoBoxProduc = 
        `<li>
        <label for=${InfoCreditoFiscal.infoNameCff}>${InfoCreditoFiscal.infoDescriptItem}</label>
        <input type=${InfoCreditoFiscal.typeDatoCff} id="${InfoCreditoFiscal.infoNameCff}" placeholder=${InfoCreditoFiscal.placeholderCcf}>
        </li>`;
        
        listProductsCF.innerHTML += infoBoxProduc

    })
    buttonSaveCFF.addEventListener("click", captureDataCreditoF);
}

function captureDataCreditoF() {
    const capturedDataCCf = {};

    boxCreditoFiscInfo.forEach((InfoCreditoFiscal) => {
        const inputElement = document.getElementById(InfoCreditoFiscal.infoNameCff);
        console.log(InfoCreditoFiscal.infoNameCff);
        const inputValue = inputElement.value; 
        capturedDataCCf[InfoCreditoFiscal.infoNameCff] = inputValue;  
    });

    console.log(capturedDataCCf);
    infoCreateCcf.classList.add('disable');
    
}

