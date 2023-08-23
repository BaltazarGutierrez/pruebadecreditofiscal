
/*importa las funciones desde otro archivo para que no sea tan pesado este */
import {hello, infoListProductCCF, sumaItem} from './functionOperationsCff.js' //operaciones
import {paintFactInfoClient, addItemCCF} from './FunctionCreateFact.js' // construcion de tabla de productos

hello()
/*constantes para escritura de html*/

const optionMenuCcf = document.getElementById("optionMenuCcf"); //etiqueta del menu del CCF del navbar para el html
const listInfoClient = document.getElementById("listInfoClient") // es crear la seccion de la informacion del cliente
const listProductsCF = document.getElementById("listProductsCF") // es para recibir la informacion del cliente en el html

const creditoFiscalForm = document.getElementById("creditoFiscalForm"); // constante para habilitar ccf


let boxInfo = [] //para la construccion del html info cliente
const capturedDataCCfClient = {} //guarda la informacion del cliente

// clase constructora de clientes 
class Client {
    constructor(infoIdName, infoDescript, typeDato, placeholder){
        this.infoIdName = infoIdName,
        this.infoDescript = infoDescript,
        this.typeDato = typeDato,
        this.placeholder = placeholder
    }

}
// insertando los elementos para la construccion del html para cliente
let boxName = new Client("name","Nombre de cliente:", "text", "Nombre o Razon Social");
let boxNit = new Client("infoNIT","Documento de Identidad:", "text", "NIT o DUI");
let boxNrc = new Client("infoNRC","Numero de IVA:", "text", "Numero de Registo de Contribuyente");
let boxEconomicActivity = new Client("economicActivity","Actividad Economica:", "text", "Actividad segun Tarjeta de IVA");
let boxAddressInfo = new Client("addressInfo","Direccion:", "text", "Departamento, Municipio, Calle, local");
let boxCustomerEmail = new Client("customerEmail","Correo Electronico:", "text", "ejemplo@extencion.com");
let boxComercialName = new Client("comercialName","Nombre Comercial:", "text", "Nombre comercial o nombre");
boxInfo.push(boxName, boxNit, boxNrc, boxAddressInfo, boxEconomicActivity, boxCustomerEmail, boxComercialName)

const boxCreditoFiscInfo = [] // paguardar la informacoin del clientes en html

const capturedDataCCf = {}; // guarda los datos del cliente 

//estas funciones es para guardar el tipo de venta

let checkedOtherExpenses
let checkedSalesNotSubject
let checkedExemptSales
let checkedTaxedSales

let listDetailProduct = [] //para guardar la informacion ccf de los productos
let listDetailProductFinal = [] // guarda la informacion fianl para mandar al html
//constructor de lista de clientes
class InfoCreditoFiscal {
    constructor(infoNameCff, infoDescriptItem, typeDatoCff, placeholderCcf, typeSaleCFF,nameInputCCF){
        this.infoNameCff = infoNameCff,
        this.infoDescriptItem = infoDescriptItem,
        this.typeDatoCff = typeDatoCff,
        this.placeholderCcf = placeholderCcf,
        this.typeSaleCff = typeSaleCFF,
        this.nameInputCCF = nameInputCCF
        this.OtherSales = '0.00',
        this.SaleNoSujet = '0.00',
        this.ExtSale = '0.00',
        this.taxedSales = '0.00'
    }
}


// insertando elementos el la clase 
let boxCant = new InfoCreditoFiscal ("CantProduc", "Cantidad de Producto", "number", "0.00", "CantProduc");
let boxDescriptSvcProduct = new InfoCreditoFiscal ("DescriptSvcProduct", "Description de Producto", "text", "Descripcion de servicio", "DescriptSvcProduct");
let boxUnitValue = new InfoCreditoFiscal ("UnitValue", "Precio Unitario", "number", "0.00", "UnitValue");
let boxDiscountValue = new InfoCreditoFiscal ("DiscountValue", "Descuento", "number", "0.00", "DiscountValue");
boxCreditoFiscInfo.push(boxCant, boxDescriptSvcProduct, boxUnitValue, boxDiscountValue);

let boxOtherExpenses = new InfoCreditoFiscal ("OtherExpenses", "Otros Montos No Afectados", "radio", "saleType");
let boxSalesNotSubject = new InfoCreditoFiscal ("SalesNotSubject", "Ventas No Sujetas", "radio", "saleType");
let boxExemptSales = new InfoCreditoFiscal ("ExemptSales", "Ventas Exentas", "radio", "saleType");
let boxTaxedSales = new InfoCreditoFiscal ("TaxedSales", "Ventas Gravadas", "radio", "saleType");
boxCreditoFiscInfo.push(boxOtherExpenses, boxSalesNotSubject, boxExemptSales, boxTaxedSales)

const totalSumAllItem = {};


//funcion para abrir y cerra el meno con la informacion del cliente
optionMenuCcf.addEventListener("click", function toggleOptionMenuCcf(){
    infoCustomerInit();
    sectionCreditoFiscal.classList.remove('disable')
    optionMenuCcf.classList.add('disable');
});

// construye en el html los campos a llenar del cliente
function infoCustomerInit(){
    
    boxInfo.forEach((Client)=> {
        const infoBoxClient = 
        `<li>
        <label for=${Client.infoIdName}>${Client.infoDescript}</label>
        <input type=${Client.typeDato} id="${Client.infoIdName}" placeholder=${Client.placeholder}>
        </li>`;
        listInfoClient.innerHTML += infoBoxClient

    })
    
}

// captura de datos de clientes

function captureData() {

    boxInfo.forEach((Client) => {
        const inputElement = document.getElementById(Client.infoIdName);
        const inputValue = inputElement.value; 
        capturedDataCCfClient[Client.infoIdName] = inputValue;  
    });

    console.log(capturedDataCCfClient);
    sectionCreditoFiscal.classList.add('disable');
    infoCreateCcf.classList.remove('disable');
    // llama a la funcion para capturar datos del credito fiscal
    dataCaptureCff();
    // manda la informacion al cff
    //paintFactInfoClient(capturedDataCCfClient);

}
//evento que guarda los datos delcliente 
buttonSave.addEventListener("click", captureData);


// construye en el html para guardar los datos de lista de productos

function dataCaptureCff(){
    boxCreditoFiscInfo.forEach((InfoCreditoFiscal)=> {
        const infoBoxProduc = 
        `<li>
        <label for=${InfoCreditoFiscal.infoNameCff}>${InfoCreditoFiscal.infoDescriptItem}</label>
        <input type=${InfoCreditoFiscal.typeDatoCff} inputmode="numeric" pattern="[0-9]*" name="${InfoCreditoFiscal.nameInputCCF}" id="${InfoCreditoFiscal.infoNameCff}" placeholder=${InfoCreditoFiscal.placeholderCcf} $InfoCreditoFiscal.typeDatoCff === "number" ? 'step="0.00" pattern="^\d+(?:\.\d{1,2})?$"' : ''>
        </li>`;
        
        listProductsCF.innerHTML += infoBoxProduc
        
        //para guardar que ver que tipo de transaccion utilizo
        
        checkedOtherExpenses = document.getElementById("OtherExpenses")
        checkedSalesNotSubject = document.getElementById("SalesNotSubject")
        checkedExemptSales = document.getElementById("ExemptSales")
        checkedTaxedSales = document.getElementById("TaxedSales")
    })
    buttonSaveCFF.addEventListener("click", captureDataCreditoF);
    buttonAddCFF.addEventListener("click", captureDataAddCreditoF);
}

// guarda la informacion en un array
function captureDataAddCreditoF() {
    boxCreditoFiscInfo.forEach((InfoCreditoFiscal) => {
        const inputElement = document.getElementById(InfoCreditoFiscal.infoNameCff);
        let inputValue = inputElement.value;

        if (InfoCreditoFiscal.typeDatoCff === "number") {
            // Verifica si es un número válido antes de asignarlo
            if (!isNaN(parseFloat(inputValue))) {
                capturedDataCCf[InfoCreditoFiscal.infoNameCff] = parseFloat(inputValue);
            }
        } else if(InfoCreditoFiscal.typeDatoCff === "text"){
            capturedDataCCf[InfoCreditoFiscal.infoNameCff] = inputValue;
             
        } else {
            capturedDataCCf[InfoCreditoFiscal.infoNameCff] = slectTypeSale()
        }
    });
    
    listDetailProduct.push({ ...capturedDataCCf }); // Guarda una copia de los datos en el array
    console.log(listDetailProduct);
}

// funcion para des habilitar el formulario
function captureDataCreditoF() {
    infoCreateCcf.classList.add('disable');
    //funcion para llenar el array con las operaciones en el valor correspondiente
    listDetailProductFinal = infoListProductCCF(listDetailProduct);
    creditoFiscalForm.classList.remove('disable')
    infoBoxRecept.innerHTML = paintFactInfoClient (capturedDataCCfClient);
    addItemCCF(listDetailProductFinal);
    //totalSumAllItem = sumaItem() // llamando a la funcion para suma y de vuelve un objeto con todos los totales
    sumaItem(listDetailProductFinal)
}

// funcion para ver a que tipo de venta se realizo
function slectTypeSale() {

    if(checkedOtherExpenses.checked){
        console.log("otras ventas exenta")
        return 1;
    } else if (checkedSalesNotSubject.checked){
        console.log("ventas no sujetas")
        return 2;
    } else if (checkedExemptSales.checked){
        console.log("Ventas exentas")
        return 3;
    } else if (checkedTaxedSales.checked){
        console.log("Ventas Gravadas")
        return 4;
    }

}

const infoBoxRecept = document.getElementById("infoRecp") // para construccion de emisor
const tableBody = document.querySelector('.fact-body-tproduct'); // lista de productos

