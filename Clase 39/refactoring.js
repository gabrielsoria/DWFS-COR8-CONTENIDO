

/**
 * objeto base.
 */
function BaseObject(type) {
    this.type = type;
}


/**
 * clase para un objeto de 3 propiedades. id, propiedad1, propiedad2
 */
function CustomObject(type, id, propiedad1, propiedad2) {
    BaseObject.call(type);
    this.id = id;
    this.propiedad1 = propiedad1;
    this.propiedad2 = propiedad2;
}


CustomObject.prototype = Object.create(BaseObject.prototype);
CustomObject.prototype.constructor = CustomObject;

let object1 = new CustomObject("CustomObject", 1, "propiedad a", "propiedad b");
let object2 = new CustomObject("CustomObject", 2, "propiedad c", "propiedad d");
let object3 = new CustomObject("CustomObject", 3, "propiedad e", "propiedad f");

// array.
var array = [];
array.push(object1);
array.push(object2);
array.push(object3);

/**
 * busca un item en el array y lo retorna si lo encuentra
 * si no undefined.
 * @param {number} id 
 */
function buscarItemsEnArrayPorId (id) {
    
    var i;
    var encontrado = false;
    for(i = 0; i < array.length; i++) {
       if(array[i].id == id) {
           break;
       }
    }

    if(encontrado)
        return array[i];
    else
        return undefined;
}

/**
 * actualiza un item en el array, encontrandolo
 * y cambiando sus propiedades.
 * @param {number} id 
 * @param {string} propiedad1 
 * @param {string} propiedad2 
 */
function actualizarItemEnArray(id, propiedad1, propiedad2) {
    
    for(var i = 0; i < array.length; i++) {
       if(array[i].id == id) {
            array[i].propiedad1 = propiedad1;
            array[i].propiedad2 = propiedad2;
       }
    }
}


/**
 * borra los valores de las propiedades en todo el array.
 */
function borrarValoresItemsEnArray() {

    for(var i = 0; i < array.length; i++) {
        array[i].propiedad1 = "";
        array[i].propiedad2 = "";
    }
}


/**
 * function que clona un array.
 * 
 */
function clonarArray() {

    var arrayClonado = [];

    for(var i = 0; i < array.length; i++) {

        var itemClon = new CustomObject(array[i].id, array[i].propiedad1, array[i].propiedad2)
        arrayClonado.push(itemClon);
    }

    return arrayClonado;
}




/**
 * Filtra los objetos por tipo dentro del array.
 * Retorna un array. El array retornado se debe poder modificar
 * sin alterar el array original.
 * Ej: tipoFiltro = "CustomObject"
 * @param {string} tipoFiltro 
 */
function filtrarObjetosPorTipo(tipoFiltro) {

    var arrayResultante = array.filter(function(item) {

        var result = item.type == tipoFiltro;

        if(result == true)
            return true;
        else 
            return false;
    })

    return arrayResultante;

}



/**
 * retorna true o false si 
 * el array contiene al item.
 * @param {CustomObject[]} array
 * @param {number} id 
 */
function contieneAlItem(array, id) {

    let item = array.find(x => x.id == id);

    let result = item != undefined;

    if(result == true) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * compara 2 objetos.
 * retorna true si son iguales
 * retorna false si no lo son.
 * @param {CustomObject} item1 
 * @param {CustomObject} item2 
 */
function compararItems(item1, item2) {

    if(item1 == item2)
        return true;
    else
        return false;
}


/**
 * compara 2 propiedades.
 * returna true si son iguales
 * retorna false si no lo son.
 * @param {any} property1 
 * @param {any} property2 
 */
var compararPropiedades = function(property1, property2) {

    if(property1 == property2){
        return true;
    }
    else {
        return false;
    }

}


/**
 * recibe un objeto y el nombre de la propiedad por parametro
 * y retorna el valor de la propiedad
 * @param {CustomObject} item 
 * @param {string} propiedad 
 */
var SacarValorPropiedadOBJETO = function(item, propiedad) {

    switch(propiedad) {
        case 'type':
            return item.type;
        case 'id': 
            return item.id;
        case 'propiedad1': 
            return item.propiedad1;
        case 'propiedad2': 
            return item.propiedad2;
        default:
            return '';
    }
}



