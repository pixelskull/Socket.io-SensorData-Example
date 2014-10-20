var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/socket.io.js', function (req, res) {
  res.sendFile(__dirname + '/socket.io.js');
});

io.on('connection', function(socket) {
  console.log('a new connection');

  socket.on('sensor', function(data) {
    console.log(data);
  });

  socket.on('disconnection', function(){
    console.log('a disconnection');
  });
});
