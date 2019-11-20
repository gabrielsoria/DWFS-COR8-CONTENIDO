//Declaración de variables

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla(usuario1);
    actualizarSaldoEnPantalla(cuenta1);
    actualizarLimiteEnPantalla(cuenta1);
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {

    let montoDepositar = parseInt(prompt("Ingrese el monto a depositar"));
    if (isNaN(montoDepositar) || montoDepositar == "" || montoDepositar == null ||montoDepositar <= 0) {
        return;
    }
        usuario1.cuenta.depositaDinero(montoDepositar);
        
        alert(`Has depositado: $ ${montoDepositar} \n Saldo anterior: $ ${usuario1.cuenta.saldoAnterior} \n Saldo actual: $ ${usuario1.cuenta.saldo}`)
    
        actualizarSaldoEnPantalla(usuario1.cuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla(usuario) {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + usuario.nombre;
}

function actualizarSaldoEnPantalla(cuenta) {
    document.getElementById("saldo-cuenta").innerHTML = "$" + cuenta.saldo;
}

function actualizarLimiteEnPantalla(cuenta) {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + cuenta.limiteExtraccion;
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
    constructor(nroCuenta, limiteExtraccion, cuentasAsociadas) {
        this.nroCuenta = nroCuenta;
        this.saldo = 0;
        this.limiteExtraccion = limiteExtraccion;
        this.saldoAnterior = 0;
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
    depositaDinero = function (monto) {
        this.saldoAnterior = this.saldo;
        this.saldo += monto;
    };
    validarCuentaAsociada = function (nroCuenta) {
        return this.cuentasAsociadas.includes(nroCuenta);
    };

    transferirDinero = function (monto, cuenta) {
        this.saldoAnterior = this.saldo;
        this.saldo -= monto;
    };
    pagarServicio = function (Servicio) {
        this.saldoAnterior = this.saldo;
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
let cuenta1 = new Cuenta (1111, 0, [2222, 4444]);
let usuario1 = new Usuario ("Eugenia", 1234, cuenta1)

let servicios = {
    luz: new Servicio("Servicio de luz", 300),
    agua: new Servicio("Servicio de agua", 500),
    gas: new Servicio("Servicio de gas", 250),
    telefono: new Servicio("Telefono", 500)

}

//botones
