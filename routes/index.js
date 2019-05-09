var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
const io = require ('../app')


module.exports  = function(io){
  
router.get('/', function(req, res){
    var tweets = tweetBank.list();
    res.render('index', {tweets: tweets, showForm: true})
});

router.get('/users/:name', function(req, res){
    var name = req.params.name;
    var list = tweetBank.find({name: name});
    console.log(name,'====')
    name = name.trim()
    res.render('index', {tweets: list, showForm: true, name: name});
  });

router.get('/tweets/:id', function(req, res){
  var id = parseInt(req.params.id);
  var list = tweetBank.find({id: id});
  res.render('index', {tweets: list})
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

io.sockets.emit('newTweet', {  });

return router;

}