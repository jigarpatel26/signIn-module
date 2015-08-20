// set up ======================================================================
var express  = require('express');
var app      = express();                       // create our app w/ express
var mongoose = require('mongoose');                // mongoose for mongodb
var port    = process.env.PORT || 3000;            // set the port
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/User');

// configuration ============================================================
app.use('/src',  express.static(__dirname + '/src'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

app.get('/', function(req, res){
    res.sendfile('./src/index.html');
});

app.get('/signIn',function(req,res){
    res.send("in fun");
    console.log('in login');
});

app.listen(port);
console.log("App listening on port " + port);