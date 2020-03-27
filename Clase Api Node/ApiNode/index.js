var express = require("express");
var parser = require("body-parser");
var cors = require("cors");


var clienteController = require("./controllers/clienteController");
var conne = require("./dbConnection");

var app = express();
app.use(parser.json());
app.use(cors());


// peliculas?pagina=1&genero=9&anio=2002&cantidad=52&columna_orden=titulo&tipo_orden=ASC

app.get("/peliculas", function mostrarPelicula(request, response){
    

    let anio = request.query.anio;
    let titulo = request.query.titulo;
    let genero = request.query.genero;
    let orden = request.query.columna_orden;
    let tipo_orden = request.query.tipo_orden;
    let pagina = request.query.pagina;
    let cantidad = (request.query.cantidad = 52) ? request.query.cantidad : undefined

    function crearQuery (anio, titulo, genero, orden, tipo_orden, pagina, cantidad){

        let q = "select * from pelicula where";

        q += anio? ""

        query = "select * from pelicula where (anio = '" + anio + "' or titulo like '%" + titulo + "' or genero_id = '" + genero + "')"

        let query = "select * from pelicula Order by "+ orden + " " + tipo_orden + " LIMIT " + (pagina - 1) * cantidad + "," + cantidad + "";

        if (anio != undefined || titulo != undefined || genero != undefined){
            query = "select * from pelicula where (anio = '" + anio + "' or titulo like '%" + titulo + "' or genero_id = '" + genero + "')"
        }

        return query
    }
    
    let query2 = crearQuery(anio, titulo, genero, orden, tipo_orden, pagina, cantidad);
    conexion.query(query2, function(error, result, fields){
        if (error) {
            console.log("error!!", error);
            throw error;
        }

        var respuesta = {
            peliculas: result
        };

        response.send(JSON.stringify(respuesta));
    })

});





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