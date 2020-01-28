/**
 * Modelo para clientes
 */
class ClienteModel {

    constructor() {
        
        let persona = new ClienteItem(1, "Gabriel", "Soria", "234234234");
        let persona2 = new ClienteItem(2, "Juan", "Martinez", "32342234");
        let persona3 = new ClienteItem(3, "Adrian", "Sanchez", "22223242");
        let persona4 = new ClienteItem(4, "Luis", "Toloza", "442323423");

        this.clientes = [persona, persona2, persona3, persona4];
    }

    obtenerClientes() {
        return this.clientes;
    }
    
    buscarPorId(id) {

        return this.clientes.find(x => x.id == id);
    };

    borrarPorId(id) {
        this.clientes = this.clientes.filter(x => x.id != id);

        return this.clientes;
    };

    actualizarCliente(cliente) {

        let c = this.clientes.find(x => x.id == cliente.id)
        
        if(!c) return undefined;

        c.nombre = cliente.nombre;
        c.apellido = cliente.apellido;
        c.id = cliente.id;
        c.dni = cliente.dni;

        return c;
    };

    agregarItem(persona) {

        this.clientes.push(persona)
        return this.clientes;
    };
}

/**
 * representacion para un item
 */
class ClienteItem {
    constructor(id, nombre, apellido, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }   
}

module.exports = ClienteModel;