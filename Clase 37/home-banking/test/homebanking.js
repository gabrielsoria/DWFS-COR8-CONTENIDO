// Chequea las propiedades
function chequearPropiedades() {
    let user = new UsuarioClass("", undefined, "")
  
    let propiedades = Object.keys(user)
  
    return propiedades.length == 3;
  }
  
  function chequeaValoresPropiedades() {
    let user = new UsuarioClass("Gabriel", undefined, "1")
  
    return user.nombre == "Gabriel" && user.cuenta == undefined && user.pin == 1; 
  }
  
  function chequearPin() {
    let user = new UsuarioClass("Gabriel", undefined, "1")

    return !user.validarPin("2") && user.validarPin("3") && user.validarPin("");
  }
  
  //console.log("Test de propiedades de cantidad de propiedades del Objeto: Resultado", chequearPropiedades());
  //console.log("Test de propiedades de Valores de propiedades del Objeto: Resultado", chequearPropiedades());
  //console.log("Test de pim: Resultado", chequearPin());
  
describe('Test del objeto del usuario', function() {
   it('Prueba las propiedades', function(){
       chequearPropiedades()
   }); 
});