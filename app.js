var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var routes = require('./routes');
var morgan = require('morgan')
var bodyParser = require('body-parser');
var socketio = require('socket.io'); 
var server = app.listen(4000);
var io = socketio.listen(server);

app.use('/', routes(io));
app.use(bodyParser.urlencoded({ extended: true })) //urlencoded
app.use(bodyParser.json()) //json

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', function (err, output){});

app.use(morgan('tiny'))

app.use(express.static('public'));

app.use(function
     (req, res, next){
    console.log("Primer middleware")
    next();
});

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

// app.listen(4000, function(){
//     console.log("Funciona en puerto 4000")
// });