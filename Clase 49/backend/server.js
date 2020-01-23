
'use strict'

module.exports = function () {

    var express = require("express");
    var parser = require("body-parser");

    var app = express();

    app.use(parser.urlencoded({
        extended: true
    }));

    app.use(parser.json());

    var puerto= 8080;

    app.listen(puerto, () => {
        console.log("Tu apicacion de node esta iniciada.!!!!");
    });

    return app;

}

