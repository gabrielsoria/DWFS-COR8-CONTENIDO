/**
 * clase para usuario.
 */
class UsuarioClass {

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
    validarPin(pin) {
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
     * valida el dinero de extraccion.
     * @param {string} monto 
     */
    validarDineroExtraccion(monto){
        return monto>0 && this.saldo>=monto;

    }

	/**
     * valida el limite
     * @param {number} monto 
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
