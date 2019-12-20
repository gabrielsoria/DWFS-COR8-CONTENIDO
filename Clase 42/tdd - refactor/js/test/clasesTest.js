
var expect = chai.expect;

describe('Test del objeto Comision', function() {

    /**
     * hacer un test para probar la propiedad de agregar alumno
     */



    /**
     * hacer un test para probar la propiedad de asignar mentor
     */



    /**
     * hacer un test para la funcion de buscar alumno por dni.
     */
    
 

    /**
     * prueba la funcionalidad de desasignar mentor
     */
    it('Funcion de desasignar mentor', function() {
        
        let comision = new Comision('xx', 'Comision de test', [], [], 'de 7 a 22 hs.');
  
        comision.asignarMentor(new Mentor('mentor1', 'mentor1', '12345678', '998989/9', '3515445544'));
        comision.asignarMentor(new Mentor('mentor2', 'mentor2', '98765432', '889989/9', '3515446677'));
        comision.asignarMentor(new Mentor('mentor3', 'mentor3', '09876543', '789900/9', '3515447788'));

        expect(comision.desasignarMentor('09876543')).to.equal(true);
        expect(comision.mentores).to.have.lengthOf(2);

        expect(comision.desasignarMentor('00000000')).to.equal(false);
        expect(comision.mentores).to.have.lengthOf(2);

    });

});




