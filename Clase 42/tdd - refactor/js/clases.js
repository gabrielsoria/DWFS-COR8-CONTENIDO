/**
 * clase que representa una 
 * comision de un curso.
 */
class Comision {

	/**
	 * constructor para un objeto
	 * del tipo comision.
	 * @param {number} codigo 
	 * @param {string} nombre 
	 * @param {Alumno[]} alumnos 
	 * @param {Mentor[]} mentores 
	 * @param {string} horarios 
	 */
    constructor(codigo, nombre, alumnos, mentores, horarios){
		this.codigo = codigo;
		this.nombre = nombre;
        this.alumnos = alumnos;
		this.mentores = mentores;
		this.horarios = horarios;
    }

	/**
	 * asigna un mentor al curso
	 */
    asignarMentor(mentor) {

		if(!this.mentores)
			this.mentores = [];

        this.mentores.push(mentor);
	}
	
	/**
	 * agrega un nuevo alumno al curso.
	 */
    agregarAlumno(alumno) {

		if(!this.alumnos)
			this.alumnos = [];
			
        this.alumnos.push(alumno);
	}
	
	/**
	 * busca un alumno en el curso buscando por dni
	 * si lo encuentra lo retorna, sino undefined.
	 * @param {string} dni 
	 */
	buscarAlumnoPorDni(dni) {

		var i;
		var encontrado = false;
		for(i = 0; i < this.alumnos.length; i++) {
			if(this.alumnos[i].dni == dni) {
				break;
			}
		}

		if(encontrado)
			return this.alumnos[i];
		else
			return undefined;
	}
}




/**
 * clase base persona.
 */
class Persona {

	/**
	 * constructor para un objeto persona.
	 * @param {string} nombre 
	 * @param {string} apellido 
	 * @param {string} dni 
	 */
	constructor(nombre, apellido, dni) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
	}
}

/**
 * clase que representa un alumno
 */
class Alumno extends Persona {

	/**
	 * constructor para la clase alumno.
	 * @param {string} nombre 
	 * @param {string} apellido 
	 * @param {string} dni 
	 * @param {string} legajo 
	 */
	constructor(nombre, apellido, dni, legajo) {
		super(nombre, apellido, dni);
		this.legajo = legajo;
	}
}

/**
 * clase que representa a un mentor
 */
class Mentor extends Persona {
	
	/**
	 * constructor para la clase Mentor
	 * @param {string} nombre 
	 * @param {string} apellido 
	 * @param {string} dni 
	 * @param {string} cuenta 
	 * @param {string} telefono 
	 */
	constructor(nombre, apellido, dni, cuenta, telefono) {
		super(nombre, apellido, dni);
		this.cuenta = cuenta;
		this.telefono = telefono;
	}
}