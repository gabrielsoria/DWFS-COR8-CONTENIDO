
describe('Test del objeto Persona', function() {

    it('Cantidad de propiedades en Persona', function() {
        
        let persona = new Persona("Gabriel", "Soria", "dni");
  
        let properties = Object.keys(persona);
      
        expect(properties).to.have.lengthOf(3);
    });
    
    it('Prueba los valores de las propiedades en Persona', function() {
        
        let persona = new Persona("Gabriel", "Soria", "222222");
  
        expect(persona.nombre).to.equal("Gabriel");
        expect(persona.apellido).to.equal("Soria");
        expect(persona.dni).to.equal("222222");

    });

    it('Prueba la obtencion de datos', function() {
        
        let persona = new Persona("Gabriel", "Soria", "222222");
  
        expect(persona.getDatos()).to.equal(`Nombre: ${persona.nombre}\n Apellido: ${persona.apellido}\n Dni: ${persona.dni}`);

    });

});


describe('Test del objeto ClienteBanco', function() {

    it('Cantidad de propiedades en ClienteBanco', function() {
        
        let cliente = new ClienteBanco("Gabriel", "Soria", "2323234234", "1111", "fisica");
  
        let propiedades = Object.keys(cliente);
      
        expect(propiedades).to.have.lengthOf(5);
    });
    
    it('Prueba los valores de las propiedades en Cliente', function() {
        
        let cliente = new ClienteBanco("Gabriel", "Soria", "2323234234", "1111", "fisica");
  
        expect(cliente.nombre).to.equal("Gabriel");
        expect(cliente.apellido).to.equal("Soria");
        expect(cliente.dni).to.equal("2323234234");
        expect(cliente.pin).to.equal("1111");
        expect(cliente.tipo).to.equal("fisica");

    });

    it('Prueba la obtencion de datos del cliente', function() {
        
        let cliente = new ClienteBanco("Gabriel", "Soria", "2323234234", "1111", "fisica");
  
        expect(cliente.getDatos()).to.equal(`Nombre: ${cliente.nombre}\n Apellido: ${cliente.apellido}\n Dni/Cuit: ${cliente.dni}\n Pin: ${cliente.pin}\n Tipo: ${cliente.tipo}`);

    });

});



