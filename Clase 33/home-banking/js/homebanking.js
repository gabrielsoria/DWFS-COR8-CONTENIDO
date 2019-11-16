//Declaración de variables

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + usuario1.nombre;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + cuenta1.saldo;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + cuenta1.limiteExtraccion;
}

//CLASES 
class Usuario {
    constructor(nombre, password, cuenta) {
        this.nombre = nombre;
        this.password = password;
        this.cuenta = cuenta;
    }

    //metodos
    validarPassword = function (password) {
        return (password == this.password);
    };
}

class Cuenta {
    constructor(nroCuenta, saldo, limiteExtraccion, cuentasAsociadas) {
        this.nroCuenta = nroCuenta;
        this.saldo = saldo;
        this.limiteExtraccion = limiteExtraccion;
        this.cuentasAsociadas = cuentasAsociadas;
    }

    //metodos
    extraerDinero = function (monto) {
        this.saldo -= monto;
    };
    validarSaldoExtraccion = function (monto) {
        return (monto > 0 && this.saldo >= monto);
    };
    validarLimites = function (monto) {
        return (monto <= limiteExtraccion);
    };
    depositarDinero = function (monto) {
        this.saldo += monto;
    };
    validarCuentaAsociada = function (nroCuenta) {
        return this.cuentasAsociadas.includes(nroCuenta);
    };

    transferirDinero = function (monto, cuenta) {
        this.saldo -= monto;
    };
    pagarServicio = function (Servicio) {
        this.saldo -= Servicio.precio;
    };
    actualizarLimiteEnPantalla = function (monto) {
        this.limiteExtraccion = monto; 
    };

};

class Servicio {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
};

//Instanciamos los objetos
let cuenta1 = new Cuenta (1111, 0, 0, [2222, 4444]);
let usuario1 = new Usuario ("Eugenia", 1234)

let servicios = {
    luz: new Servicio("Servicio de luz", 300),
    agua: new Servicio("Servicio de agua", 500),
    gas: new Servicio("Servicio de gas", 250)

}

//botones
