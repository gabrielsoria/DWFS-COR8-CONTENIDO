'use strict'

let server = require('./server');
let cors = require('cors');
let ClienteModel = require('./models/cliente.model');


let app = server();
app.use(cors());

let model = new ClienteModel();


app.get("/clientes",(req, res) => {
    res.send(model.obtenerClientes());
});

app.get("/cliente/:id", (req, res) => {
    res.send(model.buscarPorId(req.params.id));
});

app.post("/cliente", (req, res) => {
    
    res.send(model.agregarItem(req.body));
});

app.delete("/cliente/:id", (req, res) => {
    res.send(model.borrarPorId(req.params.id));
});

app.put("/cliente", (req, res) => {
    res.send(model.actualizarCliente(req.body));
});