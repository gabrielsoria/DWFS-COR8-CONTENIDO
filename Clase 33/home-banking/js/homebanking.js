//Declaración de variables

var pinUsuario = 1234;




class Usuario{
    constructor(usuario, cuenta, pin){
        this.usuario = usuario;
        this.cuenta = cuenta;
        this.pin = pin;
    }

    get validarPin(pin) {
        if(this.pin == pin){
            return this.pin == pin;
        }
    }
}

class Cuenta{
    constructor(nroCuenta, saldo, limiteExtraccion, cuentasAsociadas, saldoAnterior){
        this.nroCuenta = nroCuenta;
        this.saldo = saldo;
        this.limiteExtraccion = limiteExtraccion;
        this.cuentasAsociadas = cuentasAsociadas;
        this.saldoAnterior = saldoAnterior;
    }
    get extraerPlata(monto){
        return saldo - monto;
    }
    get validarSaldo(monto){
        if(this.saldo<monto) {
            return 
        }
    }
    get validarLimite(monto){
        if(monto>this.limiteExtraccion){
            return false;
        }
    }
    get depositarPlata(monto){
        return this.saldo + monto;
    }

    get transferirplata(monto){
        return this.saldo - monto;
    }
    get pagarFactura(Servicio){
        return this.saldo<=this.precio;
    }
    get actualizarLimiteSaldo(monto){
        return monto == this.limiteExtraccion;
    }


    /*array.includes(element)*/
}

class Servicio{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

}

var usuarioNuevo = new Usuario('yamil', 1, 1234);







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
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

