//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/apage', function(req, res){
  res.sendFile(path.join(__dirname, 'views/apage.html'));
});

app.get('/MOCK_DATA', function(req, res){
  res.sendFile(path.join(__dirname, 'views/MOCK_DATA.htm'));
});

app.get('/regis', function(req, res){
  res.sendFile(path.join(__dirname, 'views/regis.html'));
});

app.get('/profile', function(req, res){
  res.sendFile(path.join(__dirname, 'views/profile.html'));
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'views/contact.php'));
});

app.get('/services', function(req, res){
  res.sendFile(path.join(__dirname, 'views/services.html'));
});

app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port 5000 ',app.get('port'));
 });