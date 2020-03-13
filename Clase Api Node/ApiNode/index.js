var express = require("express");
var parser = require("body-parser");
var cors = require("cors");


var clienteController = require("./controllers/clienteController");
var conne = require("./dbConnection");

var app = express();
app.use(parser.json());
app.use(cors());




app.get("/clientes", clienteController.getAllClientes);

app.get("/cliente/:id", function(request, response) {
    
    let idCliente = request.params.id;

    let query = `select * from cliente 
                where IdCliente = ${idCliente}`;

    conne.query(query, function (error, results, fields) {
        
        if (error) {            
            console.log("error!!", error);
            throw error;
         } 
        
        response.send(JSON.stringify(results));
    });
        
});

app.post("/cliente", function(request, response) {

    // console.log("Body recibido en el post.", request.body);
    let query = `INSERT INTO pedidosdb.cliente
    (Nombre,
    Apellido,
    Dni)
    VALUES
    (
        '${ request.body.Nombre }',
        '${ request.body.Apellido }',
        '${ request.body.Dni }');`


    conne.query(query, function (error, results, fields) {
    
        if (error) {            
            console.log("error!!", error);
            throw error;
        } 
        
        response.send("El cliente ha sido agregado con exito.");
    });

    
});

app.put("/sumar", function(request, response) {

    console.log("metodo sumar invocado desde put.");
    response.send("response desde la api desde put!!");
});

app.delete("/sumar", function(request, response) {

    console.log("metodo sumar invocado.desde delete");
    response.send("response desde la api desde delete.!!");
});



app.listen(8089, function(){
    console.log("app iniciada en 8089!!");
    conne.connect();
})