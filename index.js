var http = require('http');
var express = require('express');
var app = express();
var server= http.Server(app);
var bodyParser = require("body-parser");

var db_url = "mongodb+srv://Tahmid:asdf@cluster0-mzzjc.mongodb.net/test?retryWrites=true&w=majority"

var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/instruction.html')
})

app.get('/new-book', function (req, res) {
    res.sendFile(__dirname + '/form.html')
})

require('./routes/routes.js')(app);
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});