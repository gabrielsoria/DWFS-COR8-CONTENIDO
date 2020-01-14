// tarea = {
//     id:,
//     value:
// }

// Modelo
class Model {
    constructor() {
        this.tareas = []
        this.ids = 0
    }

     add(tarea) {
         
        this.tareas.id = this.ids++
        this.tareas.push(tarea)
        this.fnAviso(this.tareas)
    }

    delete(idTarea) {
       let index = this.tareas.findIndex(x => x.id == idTarea)
    }

    avisar(callback) {
        this.fnAviso = callback
    }
}


// Vista
class View {
    constructor(){
    }

    onAgregar(callback) {
        let button = document.getElementById("btnTodo")
        let texto = document.getElementById("txtTodo")

        button.addEventListener("click", ()=> {
            callback(texto.value)
            texto.value = ""
        })
    }

    mostrar(tareas) {

        let ul = document.getElementById("ulList")
        ul.innerHTML = ""

        tareas.forEach(element => {
            let li = document.createElement("li")
            li.id = ""

            let button = document.createElement("button")
            button.textContent = "Borrar"

            button.addEventListener("click", this.borrar)

            let span = document.createElement("span")
            span.innerHTML = element.value

            li.appendChild(span)
            li.appendChild(button)
            ul.appendChild(li)
 
            
        });
    }

    borrar() {
        
    }

}


// Controlador
class Controller {
    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista

        this.modelo.avisar(this.mostrar)
        this.vista.onAgregar(this.agregarTarea)
    }

    agregarTarea = (texto) =>  {
        let tarea = {
            value: texto
        }

        this.modelo.add(tarea)
    }

    borrarTareas = (idTarea) => {
        this.modelo.delete(idTarea)
    }

    mostrar = (tareas) => {
        this.vista.mostrar(tareas)
    }
}

var app = new Controller(new Model(), new View())