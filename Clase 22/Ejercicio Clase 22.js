/**
 CONSIGNA: REFACTORIZAR TODO EL ARCHIVO PARA QUE TRABAJE CON LA NUEVA 
 SINTAXIS DE ES6. USAR LAS FUNCIONES Y OPERADORES VISTOS HASTA EL MOMENTO.
 const
 let
 filter
 map
 forEach
 find
 findIndex
 interpolation
 spread
 arrow functions donde sea necesario
**/



// array de productos.
var array = [
    {id: 1, descripcion: "producto 1", precio: 50 },
    {id: 2, descripcion: "producto 2", precio: 100 },
    {id: 3, descripcion: "producto 3", precio: 50 },
    {id: 4, descripcion: "producto 4", precio: 25 },
    {id: 5, descripcion: "producto 5", precio: 50 },
    {id: 6, descripcion: "producto 6", precio: 20 },
];


/**
 * funcion que retorna un producto buscando en 
 * el array por id.
 * @param id int
 */
function buscarProductoPorId(id) {

    for(var i = 0; i < array.length; i++) {

        if(array[i].id == id)
            return array[i];
    }

    return undefined;
}


/**
 * funcion que busca los productos por precio.
 * retorna un nuevo array con los productos que cumplen
 * con el precio pasado por parametro. 
 * @param precio int
 */
function buscarProductosPorPrecio(precio) {

    var resultado = array.filter(function(element) {
        return element.precio == precio;
    });

    return resultado;
}


/**
 * funcion que recibe un producto y muestra sus propiedades 
 * por consola.
 * @param producto objeto
 */
function productoDetalle(producto) {

    var detalle = "Detalles del producto \n Nombre: " + producto.descripcion +
                 "\nId: " + producto.id + 
                 "\nPrecio: $" + producto.precio;
    
    console.log(detalle);
}

/**
 * funcion que retorna la posicion de un producto
 * en el array, buscando por id.
 * @param id int
 */
function buscarPosicionProductoPorId(id) {

    for(var i = 0; i < array.length; i++) {

        if(array[i].id == id) {
            return i;
        }
    }

    return -1;
}


/**
 * funcion que retorna un nuevo array 
 * SIN ALTERAR EL ARRAY ORIGINAL incrementando
 * el precio con el monto recibido por parametro.
 * @param incremento int
 */
function actualizarPrecios(incremento) {

    var arrayResult = [];

    for(var i = 0; i < array.length; i++) {

        var newItem = {
            id: array[i].id,
            descripcion: array[i].descripcion,
            precio: array[i].precio + incremento 
        };
        
        arrayResult.push(newItem);
    }

    return arrayResult;
}


/**
 * function que actualiza las descripciones 
 * contactenando lo recibido por parametro.
 * @param descripcion string
 */
function actualizarDescripciones(descripcion) {

    for(var i = 0; i < array.length; i++) {

        array[i].descripcion = array[i].descripcion + " " + descripcion;
    }
}




/**
 * funcion que suma los parametros recibidos.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */
function sumarArgumentos(a, b, c) {

    return a + b + c;
}

// array a sumar
var arraySuma = [3, 4, 5];

// llamada a la funcion.
var resulta= sumarArgumentos(arraySuma[0], arraySuma[1], arraySuma[2]);

console.log(resultado);







/**
 * funcion que agrega el array recibido al array original.
 * @param {Array} nuevoArray 
 */
function concatenarArrays(nuevoArray) {

    for(var i = 0; i < nuevoArray.length; i ++) {

        array.push(nuevoArray[i]);
    }
}



