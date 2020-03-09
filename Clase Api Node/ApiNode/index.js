console.log("hola hola desde node.!!!");

var express = require("express");
var app = express();

app.get('/Sumar', function(request, response) {

    console.log("estos son los parametros", 
        request.query["numero1"], request.query["numero2"] );

    let suma = request.query["numero1"] + request.query["numero2"];
    response.send("El valor de la suma es " + suma );

});

app.listen(8080, () =>{

    console.log("server iniciado.!!!");

});


