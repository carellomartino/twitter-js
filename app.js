var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var routes = require('./routes');
var morgan = require('morgan')
app.use('/', routes);

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

app.listen(4000, function(){
    console.log("Funciona en puerto 4000")
});