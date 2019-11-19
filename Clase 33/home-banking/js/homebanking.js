//Declaración de variables

var Usuario=function(nombre, pin, cuenta){
    this.nombre=nombre;
    this.pin=pin;
    this.cuenta=cuenta;
    this.validarPin=function(nro){
        return nro==this.pin;
    }
}

var Cuenta=function(nroCuenta, saldo, limiteDeExtraccion, cuentasAsociadas, saldoAnterior){
    this.nroCuenta=nroCuenta;
    this.saldo=saldo;
    this.limiteDeExtraccion=limiteDeExtraccion;
    this.cuentasAsociadas=cuentasAsociadas;
    this.saldoAnterior=saldoAnterior;
    this.extraerDinero=function(monto){
        this.saldo-=monto;

    };
    this.validarSaldoExtraccion=function(monto){
        return monto>0 && this.saldo>=monto;

    };
    this.validarLimite=function(monto){
        return this.limiteDeExtraccion<=monto;

    };
    this.depositarDinero=function(monto){
        this.saldo+=monto;

    };
    this.validarCuentaAmiga=function(nrocuenta){
        let result=this.cuentasAsociadas.find(function(x){
            return x==nroCuenta;
        })
    }
    this.transferirDinero=function(monto, cuenta){
        this.saldo-=monto;

    };
    this.pagarServicio=function(servicio){
        this.saldo-=servicio.precio;

    };
    this.actualizarLimite=function(monto){
        this.limiteDeExtraccion=monto;

    };

}

var Servicio=function(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}


let cuenta = new Cuenta(1111, 0, 0, [2222, 4444], 0 );
let usuario = new Usuario("Gabriel", "4444", cuenta);

let servicios = { 
    luz: new Servicio("Servicio de luz", 300),
    agua: new Servicio("Servicio de agua", 200),
    gas: new Servicio("Servicio de gas", 400),
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla(usuario);
    actualizarSaldoEnPantalla(usuario.cuenta);
    actualizarLimiteEnPantalla(usuario.cuenta);
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
function cargarNombreEnPantalla(usuario) {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + usuario.nombre;
}

function actualizarSaldoEnPantalla(cuenta) {
    document.getElementById("saldo-cuenta").innerHTML = "$" + cuenta.saldo;
}

function actualizarLimiteEnPantalla(cuenta) {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + cuenta.limiteDeExtraccion;
}