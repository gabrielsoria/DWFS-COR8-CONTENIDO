

function testPropiedadesUsuario() {
    let user = new UsuarioClass("", undefined, "");

    return user.nombre === "" && user.cuenta === undefined && user.pin === "";
}

function testPropiedadesCorrectas() {
    let user = new UsuarioClass("", undefined, "");

    let keys = Object.keys(user);

    return keys.length === 3;
}

// console.log("Test de propiedades ", testPropiedadesUsuario());
// console.log("Test de propiedades correctas ", testPropiedadesCorrectas());

describe('Test del objeto usuario', function() {

    it('Prueba las propiedades', function() {
        testPropiedadesUsuario();
    });
    it('Prueba los valores de las p', function() {
        testPropiedadesCorrectas();
    });


});


// describe('Testing del objeto usuario', function() {
//         it('test de propiedades', function() {
//             // // Test implementation goes here
//             // let user = new UsuarioClass("", undefined, "");

//             // return user.nombre === "" && user.cuenta === undefined && user.pin === "";

//             testPropiedadesUsuario();
//         });

//         it('Test de cantidad de propiedades', function() {
//             // // Test implementation goes here
//             // let user = new UsuarioClass("", undefined, "");

//             // let keys = Object.keys(user);

//             // return keys.length === 3;

//             testPropiedadesCorrectas();
//     });

// // We can have more its here
// return true
//});