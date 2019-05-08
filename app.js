var express = require('express');
var app = express();
var nunjucks = require('nunjucks')

app.get('/', function(req, res){
    res.render( 'index', {title: 'Hall of Fame', people: locals.people});
});

app.listen(3000, function(){
    console.log("Funciona en puerto 3000")
});

app.use(function (req, res, next){
    console.log("Primer middleware")
    next();
})

var locals = {
    title: 'Ejemplo',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);


nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//res