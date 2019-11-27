// class Persona {

//     constructor(nombre, apellido, dni) {

//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.dni = dni;
//     }

//     getDatos() {
//         alert(`${this.nombre} ${this.apellido} ${this.dni}`)
//     }
// }





// class Alumno extends Persona {

//     constructor(nombre, apellido, dni, nroMatricula) {
//         super(nombre, apellido, dni);
//         this.nroMatricula = nroMatricula;
//     }

//     getDatosPersona() {
//         super.getDatos();
//     }

//     getDatos() {
//         alert(`${this.nombre} ${this.apellido} ${this.dni} ${this.nroMatricula}`)
//     }
// }

// class Mentor {

//     constructor(conocim) {
//         this.conocimiento = conocim;
//     }
// }



function Persona(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
}

Persona.prototype.getDatos = function() {
    alert(`${this.nombre} ${this.apellido} ${this.dni}`);
}

function Alumno(nombre, apellido, dni, nroMatricula) {

    Persona.call(this, nombre, apellido, dni);
    this.nroMatricula = nroMatricula;
}

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno;

Alumno.prototype.getDatos = function() {
    alert(`${this.nombre} ${this.apellido} ${this.dni} ${this.nroMatricula}`)
}

var persona = new Persona("gabriel", "soria", 2442242424);

var alumno = new Alumno("nombreAlumno", "apellidoAlumno", 12312312, 1111);
// persona.getDatos();

// //var persona2 = new Persona("gabriel2", "soria2", 24422424243);

// Persona.prototype.getDatos = function() {
//     alert(`${this.nombre} ${this.apellido} ${this.dni} MODIFICADA`);
// }

// persona.getDatos();

//var alumno = new Alumno("nombreAlumno", "apellidoAlumno", 12312312, 1111);


class Nuevo {

    constructor(nombres, apellido){
        this.nombres = nombres;
        this.apellido = apellido;
    }

    logNombres() {
        this.nombres.forEach( function(element) {
            console.log(this);
            console.log(element + this.apellido);
            
        });
    }
    
}

var nuevo = new Nuevo(["algo","otro"],"soria");

