var conne = require("../dbConnection");


var getAllClientes = function(request, response) {
    
    let query = 'select * from cliente';

    conne.query(query, function (error, results, fields) {
        
        if (error) {            
            console.log("error!!", error);
            throw error;
         } 
        
        response.send(JSON.stringify(results));
    });       
}

// var metodo1 = function(req, res) {

// }

module.exports = {
    getAllClientes: getAllClientes
    //metodo2: metodo1
}