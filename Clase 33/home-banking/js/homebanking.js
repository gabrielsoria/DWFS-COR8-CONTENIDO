/**
 * clase para usuario.
 */
class Usuario {

	/**
	 * constructor
	 * @param {string} nombre 
	 * @param {Cuenta} cuenta 
	 * @param {string} pin 
	 */
    constructor(nombre, cuenta, pin){
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.pin = pin;
    }

	/**
	 * metodo de validacion de pin.
	 */
    validarPin() {
        return this.pin == pin;
    }
}

/**
 * clase para cuenta.
 */
class Cuenta {

	/**
	 * constructor
	 * @param {number} nroCuenta 
	 * @param {number} limiteDeExtraccion 
	 * @param {Array<string>} cuentasAsociadas 
	 */
    constructor(nroCuenta, limiteDeExtraccion, cuentasAsociadas) {
		this.nroCuenta=nroCuenta;
		this.saldo=0;
		this.limiteDeExtraccion=limiteDeExtraccion;
		this.cuentasAsociadas=cuentasAsociadas;
		this.saldoAnterior= 0;
    }

	/**
	 * funcion para extraer dinero
	 * @param {number} monto 
	 */
    extraerDinero(monto){
        this.saldoAnterior = this.saldo;
        this.saldo-=monto;

	}
	
	/**
	 * funcion para validar el dinero a extraer
	 * @param {number} monto 
	 */
    validarDineroExtraccion(monto){
        return monto>0 && this.saldo>=monto;

    }

	/**
	 * valida los limites de extraccion.
	 */
    validarLimiteExtraccion(monto){
        return this.limiteDeExtraccion>=monto;
	}
	
	/**
	 * valida el monto a depositar
	 * @param {number} monto 
	 */
	validarMontoDeposito(monto) {
		return monto > 0;
	}

	/**
	 * deposita el dinero.
	 * @param {number} monto 
	 */
    depositarDinero(monto) {
        this.saldoAnterior = this.saldo;
        this.saldo+=monto;
    }

	/**
	 * valida las cuentas amigas.
	 * @param {string} nrocuenta 
	 */
    validarCuentaAmiga(nrocuenta){

      return this.cuentasAsociadas && this.cuentasAsociadas.find(x => x == nrocuenta);
    }

	/**
	 * valida los montos a transferir.
	 * @param {number} monto 
	 */
    validarMontoTransferir(monto) {
      return monto > 0 && monto <= this.saldo;
    }
	
	/**
	 * transfiere dinero.
	 * @param {number} monto 
	 * @param {string} cuenta 
	 */
    transferirDinero(monto, cuenta){
        this.saldoAnterior = this.saldo;
        this.saldo-=monto;
    }

	/**
	 * valida el monto de los servicios.
	 * @param {number} monto 
	 */
    validarMontoPagoServicio(monto){
      return monto>0 && this.saldo>=monto;
    }

	/**
	 * Paga un servicio.
	 * @param {Servicio} servicio 
	 */
    pagarServicio(servicio){
        this.saldoAnterior = this.saldo;
        this.saldo-=servicio.precio;

    };

	/**
	 * valida un monto como limite.
	 * @param {number} monto 
	 */
    validarNuevoLimite(monto) {
      return monto>0;
    }
	
	/**
	 * actualiza un limite.
	 * @param {number} monto 
	 */
    actualizarLimite(monto){
        this.limiteDeExtraccion=monto;
    };

}

/**
 * clase para servicio.
 */
class Servicio{

	/**
	 * constructor.
	 * @param {string} nombre 
	 * @param {number} precio 
	 */
	constructor(nombre, precio) {
		this.nombre=nombre;
		this.precio=precio;
	}
}



// creacion de instancias.
let cajaAhorro = new Cuenta(00001, 1000, [44444]);

let usuario = new Usuario("Gabriel", cajaAhorro, 4444);

let servicios = {
    telefono: new Servicio("Telefono", 300),
    luz: new Servicio("Luz", 500),
    agua: new Servicio("Agua", 500),
    gas: new Servicio("Gas", 500),
    internet: new Servicio("Internet", 500)
};



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla(usuario);
    actualizarSaldoEnPantalla(usuario.cuenta);
    actualizarLimiteEnPantalla(usuario.cuenta);
}

    
  
  //funciones de pago segun servicio

  function pagarAgua() {
    
    if (usuario.cuenta.validarMontoPagoServicio(servicios.agua.precio)) {
      
      usuario.cuenta.pagarServicio(servicios.agua);
      actualizarSaldoEnPantalla(usuario.cuenta);
      alert("Saldo anterior:" + usuario.cuenta.saldoAnterior + '\n' + "pago del servicio Agua: " + servicios.agua.precio + '\n' + 'Saldo Actual: ' + usuario.cuenta.saldo);
    } else {
      alert("No hay suficiente saldo en la cuenta");
    }
  }
  
  function pagarTelefono() {
    
    if (usuario.cuenta.validarMontoPagoServicio(servicios.telefono.precio)) {
      usuario.cuenta.pagarServicio(servicios.telefono);
      actualizarSaldoEnPantalla(usuario.cuenta);
      
      alert("Saldo anterior:" + usuario.cuenta.saldoAnterior + '\n' + "pago del servicio telefono: " + servicios.telefono.precio + '\n' + 'Saldo Actual: ' + usuario.cuenta.saldo);
    } else {
      return alert("No hay suficiente saldo en la cuenta");
    }
  }
  
  function pagarLuz() {
    
    if (usuario.cuenta.validarMontoPagoServicio(servicios.luz.precio)) {
      usuario.cuenta.pagarServicio(servicios.luz);
      actualizarSaldoEnPantalla(usuario.cuenta);
      
      alert("Saldo anterior:" + usuario.cuenta.saldoAnterior + '\n' + "pago del servicio luz: " + servicios.luz.precio + '\n' + 'Saldo Actual: ' + usuario.cuenta.saldo);
    } else {
      return alert("No hay suficiente saldo en la cuenta");
    }
  }
  function pagarInternet() {
    if (usuario.cuenta.validarMontoPagoServicio(servicios.internet.precio)) {
      usuario.cuenta.pagarServicio(servicios.internet);
      actualizarSaldoEnPantalla(usuario.cuenta);
      alert("Saldo anterior:" + usuario.cuenta.saldoAnterior + '\n' + "pago del servicio internet: " + servicios.internet.precio + '\n' + 'Saldo Actual: ' + usuario.cuenta.saldo);
    } else {
      return alert("No hay suficiente saldo en la cuenta");
    }
  }
  
  // funcion de transferencia
  
  function transferenciaValida(monto) {
  
    saldoCuenta = saldoCuenta - monto;
    saldoAnterior = saldoCuenta + monto;
    actualizarSaldoEnPantalla();
  
    return alert("Saldo anterior:" + saldoAnterior + '\n' + "Tranferido: " + monto + '\n' + 'Saldo Actual: ' + saldoCuenta);
  
  
  }
  
  
  //Funciones que tenes que completar
  function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseFloat(prompt('Cual quiere que sea el nuevo limite?'));
  
    if (Number.isNaN(nuevoLimite) || nuevoLimite == "" || nuevoLimite === null || nuevoLimite < 0 || !usuario.cuenta.validarNuevoLimite(nuevoLimite)) {
      return alert("Error en ingreso" + '\n' + "Intente nuevamente");
    }else{

      usuario.cuenta.actualizarLimite(nuevoLimite);

    actualizarLimiteEnPantalla(usuario.cuenta);
  
    alert('El nuevo limite de extraccion es :' + usuario.cuenta.limiteDeExtraccion);
  }}



  // funcion para extraer dinero de la cuenta
  function extraerDinero() {
    var dineroAExtraer = parseFloat(prompt('Cuanto dinero quiere extraer?'));
  
    if (Number.isNaN(dineroAExtraer) || dineroAExtraer == "" || dineroAExtraer === null) {
      alert("Error en ingreso" + '\n' + "Intente nuevamente");
      return;
    }
    
    if (usuario.cuenta.validarDineroExtraccion(dineroAExtraer) 
      && usuario.cuenta.validarLimiteExtraccion(dineroAExtraer)) {
  
          usuario.cuenta.extraerDinero(dineroAExtraer);
          actualizarSaldoEnPantalla(usuario.cuenta);
  
            alert("Saldo anterior:" + usuario.cuenta.saldoAnterior + '\n' + "Deposito: " + dineroAExtraer + '\n' + 'Saldo Actual: ' + usuario.cuenta.saldo);
    }
        
  }
  
  
  
  
  // funcion para depositar dinero en la cuenta
  
  function depositarDinero() {

    var dineroADepositar = parseFloat(prompt('Cuanto dinero quiere depositar?'));
  
    if (Number.isNaN(dineroADepositar) || dineroADepositar == "" || dineroADepositar === null) {
	  alert("Error en ingreso" + '\n' + "Intente nuevamente");
	  return;
    }
	
	
	if (usuario.cuenta.validarMontoDeposito(dineroADepositar)) {

      usuario.cuenta.depositarDinero(dineroADepositar);
      actualizarSaldoEnPantalla(usuario.cuenta);
  
      alert("Saldo anterior:" + usuario.cuenta.saldoAnterior + '\n' + "Deposito: " 
      + dineroADepositar + '\n' + 'Saldo Actual: ' + usuario.cuenta.saldo);
  
    }
  }
  
  
  
  //funcion para pagar un servicio seleccionado
  
  function pagarServicio() {
    var servicioElegido = parseInt(prompt('Ingrese el numero del servicio que quiere pagar??' + '\n' + '1) Agua ' + '\n' + '2) Telefono ' + '\n' + '3) Luz ' + '\n' + '4) Internet '));
  
    switch (servicioElegido) {
      case 1:
        pagarAgua();
        break;
      case 2:
        pagarTelefono();
        break;
      case 3:
        pagarLuz();
        break;
      case 4:
        pagarInternet();
        break;
      default: alert('El numero ingresado no pertenece a un Servicio');
  
  
    }
  
  }
  
  function transferirDinero() {
  
    var montoATrasnferir = parseFloat(prompt("Ingrese Monto a transferir"));
  
    if (Number.isNaN(montoATrasnferir) || montoATrasnferir == "" || montoATrasnferir === null) {
      alert("Error en ingreso" + '\n' + "Intente nuevamente");
      return;
    }

    var ingresoCuenta = parseInt(prompt("Ingrese cuenta amiga"));

    if (usuario.cuenta.validarMontoTransferir(montoATrasnferir) 
      && usuario.cuenta.validarCuentaAmiga(ingresoCuenta)) {
  
        usuario.cuenta.transferirDinero(montoATrasnferir);
      

        actualizarSaldoEnPantalla(usuario.cuenta);
        
      
    }
    else {
      alert("Cuenta NO VALIDA");
      return;
    }
  }
  
  
  
  
  
  
  function iniciarSesion() {
    var codigoIngresado = parseInt(prompt('Ingrese su codigo de Usuario * * * * * * :'));
    if (codigoIngresado !== codigoDeUsuario) {
      saldoCuenta = 0
      return alert("Codigo ingresado INCORRECTO!");
    } else {
      return alert("Bienvenido" + nombreUsuario);
    }
  
  
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
