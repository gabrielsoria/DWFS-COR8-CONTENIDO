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