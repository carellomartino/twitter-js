var express = require('express');
var app = express();

app.use(function (req, res, next){
    console.log("Primer middleware")
    next();
})