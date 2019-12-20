
// chequea las propiedades
function chequearPropiedadesUsuario() {

    let user = new UsuarioClass("", undefined, "");
  
    let properties = Object.keys(user);
  
    return properties.length == 5;
  }
  
  // chequea las propiedades
  function chequearValoresPropiedadesUsuario() {
  
    let user = new UsuarioClass("Gabriel", undefined, "1");
  
    return user.nombre === "Gabriel" 
        && user.cuenta === undefined 
        && user.pin === "1";
  }
  
  // chequea las propiedades
  function chequearValoresPinUsuario() {
  
    let user = new UsuarioClass("Gabriel", undefined, "1");
  
    return !user.validarPin("2") && user.validarPin("1") && !user.validarPin("");
  }

// console.log("Caso de prueba del obj usuario ", chequearPropiedadesUsuario());
// console.log("Caso de prueba del obj usuario ", chequearValoresPropiedadesUsuario());
// console.log("Caso de prueba del obj usuario ", chequearValoresPinUsuario());

localStorage.setItem("AccessKey", {test: "holahola", key: "test"})



  var expect = chai.expect;

//   expect(foo).to.be.a('string');
//   expect(foo).to.equal('bar');
//   expect(foo).to.have.lengthOf(3);
//   expect(beverages).to.have.property('tea').with.lengthOf(3);


describe('Test del objeto usuario', function() {

    it('Prueba las propiedades', function() {
        
        let user = new UsuarioClass("", undefined, "");
  
        let properties = Object.keys(user);
      
        //return properties.length == 3;
        expect(properties).to.have.lengthOf(3);
    });
    
    it('Prueba los valores de las propiedades', function() {
        
        let user = new UsuarioClass("Gabriel", undefined, "1");
  
        // return user.nombre === "Gabriel" 
        //     && user.cuenta === undefined 
        //     && user.pin === "1";

        expect(user.nombre).to.equal("Gabriel");
        expect(user.cuenta).to.equal(undefined);
        expect(user.pin).to.equal("1");



    });

    it('chequea el metodo de validacion de pin de usuario', function() {
        
        
        let user = new UsuarioClass("Gabriel", undefined, "1");
  
        expect(user.validarPin(1)).to.equal(true);
        expect(user.validarPin(0)).to.equal(false);

    });


});



// DEFINIR UNIT TEST PARA LA CLASE CUENTA.!!!!!!!!

describe("test de la clase cuenta", function() {

    // definir aqui unit test.
    it('Prueba las propiedades de cuenta', function() {
        
        let cuenta = new Cuenta(123, 100, []);
  
        let properties = Object.keys(cuenta);
      
        //return properties.length == 3;
        expect(properties).to.have.lengthOf(5);
    });

});








