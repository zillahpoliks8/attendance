
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/apage.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/MOCK_DATA.htm'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/regis.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/profile.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/contact.php'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/services.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
