/*llamando a las variables*/ 
const optionMenuCcf = document.getElementById("optionMenuCcf");
const sectionCreditoFiscal = document.getElementById("sectionCreditoFiscal")
const listInfoClient = document.getElementById("listInfoClient")
const customerInformationCcf = document.getElementById("customer-information-ccf");
const buttonSave = document.getElementById("buttonSave")


let boxInfo = []

/*construyendo los objetos para la construccion HTML*/

class Client {
    constructor(infoIdName, infoDescript, typeDato, placeholder){
        this.infoIdName = infoIdName,
        this.infoDescript = infoDescript,
        this.typeDato = typeDato,
        this.placeholder = placeholder
    }

}
/*informacion de campos basico*/
let boxName = new Client("name","Nombre de cliente:", "text", "Nombre o Razon Social");
let boxNit = new Client("infoNIT","Documento de Identidad:", "text", "NIT o DUI");
let boxNrc = new Client("infoNRC","Numero de IVA:", "text", "Numero de Registo de Contribuyente");
let boxEconomicActivity = new Client("economicActivity","Actividad Economica:", "text", "Actividad segun Tarjeta de IVA");
let boxAddressInfo = new Client("addressInfo","Direccion:", "text", "Departamento, Municipio, Calle, local");
let boxCustomerEmail = new Client("customerEmail","Correo Electronico:", "text", "ejemplo@extencion.com");
let boxComercialName = new Client("comercialName","Nombre Comercial:", "text", "Nombre comercial o nombre");
boxInfo.push(boxName, boxNit, boxNrc, boxAddressInfo, boxEconomicActivity, boxCustomerEmail, boxComercialName)

let inputName
let inputInfoNIT
let inputInfoNRC
let inputEconomicActivity
let inputAddressInfo
let inputCustomerEmail
let inputComercialName

let saveName 
let saveInfoNIT 
let saveInfoNRC 
let saveEconomicActivity 
let saveAddressInfo 
let saveCustomerEmail 
let saveComercialName 

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
        <input type=${Client.typeDato} id="name" placeholder=${Client.placeholder}>
        </li>`;
        console.log(Client);
        listInfoClient.innerHTML += infoBoxClient

        inputName = document.getElementById("name")
        inputInfoNIT = document.getElementById("infoNIT")
        inputInfoNRC = document.getElementById("infoNRC")
        inputEconomicActivity = document.getElementById("economicActivity")
        inputAddressInfo = document.getElementById("addressInfo")
        inputCustomerEmail = document.getElementById("customerEmail")
        inputComercialName = document.getElementById("comercialName")

    })
     
}

startApp();



buttonSave.addEventListener("click", function saveInforClient(){
    saveName = inputName.value;
    saveInfoNIT = inputInfoNIT.value;
    saveInfoNRC = inputInfoNRC.value;
    saveEconomicActivity =  inputEconomicActivity.value;
    saveAddressInfo = inputAddressInfo.value;
    saveCustomerEmail = inputCustomerEmail.value;
    saveComercialName =inputComercialName.value;

    console.log(saveName, saveInfoNIT, saveInfoNRC, saveEconomicActivity, saveAddressInfo, saveCustomerEmail, saveComercialName)
});

//window.addEventListener("load", inicio)