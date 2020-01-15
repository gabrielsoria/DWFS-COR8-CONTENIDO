// tarea = {
//     id :,
//     value:
// }

class Model {
    constructor() {
        this.tareas = StorageInfo.obtenerInfo("tareas") || [];
        this.observadores = [];
        this.ids = 0;
    }

    add(tarea) {
        tarea.id = this.ids++;
        this.tareas.push(tarea);

        this.avisar();

        StorageInfo.guardarInfo("tareas", this.tareas);
    }

    delete(idTarea) {

        let index = this.tareas.findIndex(x => x.id == idTarea);
        this.tareas.splice(index, 1);
        this.avisar();

        StorageInfo.guardarInfo("tareas", this.tareas);
    }

    // avisar(callback) {
    //     this.fnAviso = callback;
    // }
    avisar() {
        this.observadores.forEach(x => x.modeloActualizado(this.tareas))
    }

    agregarObservador(observer) {
        this.observadores.push(observer);
        this.avisar();
        
    }
}

class View {
    constructor() {

    }

    onAgregar(callback) {

        let button = document.getElementById("btnTodo");
        let texto = document.getElementById("txtTodo");
        button.addEventListener("click", () => {
            callback(texto.value);
            texto.value = "";
        });
    }

    mostrar(tareas) {
        let ul = document.getElementById("ulList");
        ul.innerHTML = "";
        tareas.forEach(element => {
            // creacion de li.
            let li = document.createElement("li");
            
            let button = document.createElement("button");
            button.textContent = "borrar";
            
            button.addEventListener("click", this.borrar);
            button.id = element.id;

            let span = document.createElement("span");
            span.innerHTML = element.value;

            li.appendChild(span); 
            li.appendChild(button); 
            ul.appendChild(li); 
 
        });
    }

    borrar = (e) => {

        console.log("info del boton", e);
        //console.log("el id del boton clickeado es ", e.id);
        this.fnAvisoBorrado(e.target.id);
    }

    onBorrar(callback) {
        this.fnAvisoBorrado = callback;
    }



}

class Controller {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        //this.modelo.avisar(this.mostrar);
        this.vista.onAgregar(this.agregarTarea);
        this.vista.onBorrar(this.borrarTarea);
        this.modelo.agregarObservador(this);
    }

    agregarTarea = (texto)  => {

        let tarea = {
            value: texto
        };

        this.modelo.add(tarea);
    }

    modeloActualizado = (tareas) => {
        this.vista.mostrar(tareas);
    }

    borrarTarea = (idTarea) => {

        this.modelo.delete(idTarea);
    }

}

class ListView {

    constructor() {

    }

    mostrarContadorTareas(tareas) {

        let span = document.getElementById("spnContador");
        span.textContent = tareas.length;
    }
}

class ListController {

    constructor(modelo, vista) {
        this.vista = vista;
        this.modelo = modelo;

        //this.modelo.avisar(this.actualizarContador);
        this.modelo.agregarObservador(this);
    }

    modeloActualizado = (tareas) => {
        this.vista.mostrarContadorTareas(tareas);
        
    }
}

 class StorageInfo {

    constructor() {

    }

    static guardarInfo(key, value) {

        let stringData = JSON.stringify(value);
        localStorage.setItem(key, stringData);
    }

    static obtenerInfo(key) {
        
        let data = localStorage.getItem(key);
        let objectData = JSON.parse(data);
        return objectData;
    }
}


let model = new Model();

console.log("modelo creado", model);
var app = new Controller(model, new View());
var app2 = new ListController(model, new ListView());
