//Declaración de variables
class Usuario {
    constructor(nombre,pin,cuenta) {
        this.nombre = nombre;
        this.pin = pin;
        this.cuenta = cuenta;
    }
        validarPin(){
            return pin == this.pin;
        }
}

class cuenta {
    constructor(nroCuenta, limiteExtraccion, cuentasAsociadas){
        this.saldo = 0;
        this.saldoAnterior = 0;
        this.nroCuenta = nroCuenta;
        this.limiteExtraccion = limiteExtraccion;
        this.cuentasAsociadas = cuentasAsociadas;
    }
    extraerDinero(monto){
        return this.saldo - monto;
    }
    validarSaldoExtraccion(monto){
        if (this.saldo >= monto){
            return true;
        }
    }
    validarLimites(monto){
        if (monto <= this.limiteExtraccion){
            return true
        }
    }
    depositarDinero(monto){
        return this.saldo + monto;
    }
    validarCuentaAmiga(nroCuenta){
        let result = this.cuentasAsociadas.find(x => x == nroCuenta);
        }
    transferirDinero(monto,cuenta){
        return  this.saldo - monto;
        }
    
    pagarServicio(servicio){
        return this.saldo - servicio.precio;
    }
    actualizarLimite(){
        
    }    
}

    








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