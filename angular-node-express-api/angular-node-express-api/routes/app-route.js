/* var express = require("express");
var path = require("path");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/produit");

module.exports = app; */


const path = 'path';
module.exports = {
   //ici on dit qu'on surchage le port
    devServer: {
        //ici on def le proxy
        proxy: {
            '^/api': {
                //si on a un /api on renvoie à l'adresse mis dans le target
                //on écrit pu dans l'adresse le localhost et le port
                target: 'http://localhost:4200'
            }
        },
        port: 4201
    }
};
