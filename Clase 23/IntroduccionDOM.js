


Documento - DOCUMENT
es el nodo del cual derivan todos

Elemento - ELEMENT
representan a una etiqueta html.

Atributo - ATTRIBUTE
son los atributos de una etiqueta.

Texto - TEXT
es el texto de un elemento


// obtencion de elementos
document.getElementById("id"); // uno
document.getElementByName("id"); // uno
document.getElementsByTagName("tag"); // array

// Crear nodo de tipo Element
var parrafo = document.createElement("p");
// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");
// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(parrafo);


// remove node.
var parrafo = document.getElementById("provisional");
parrafo.parentNode.removeChild(parrafo);

-----------------------------------------------------------------------------------------------------

ejercicio: 


crear una estructura html que tenga 

html
head
body

un div con id="content"



en un js declarar un array con texto.

['primer texto','segundo texto','tercer texto','cuarto texto','quinto texto','sexto texto'];

crear una funcion que recorra ese array e inserte un ul con un li por cada texto.



