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

app.get('/hammer.min.js', function (req, res) {
  res.sendFile(__dirname + '/hammer.min.js');
});

io.on('connection', function(socket) {
  console.log('a new connection');

  socket.on('sensor', function(data) {
    // do something with sensordata
    console.log(data);
  });

  socket.on('location', function(data) {
    // do something with locationinformation
    console.log(data);
  });

  socket.on('batterylevel', function(data) {
    // do something with batterielevelinformation
    console.log(data);
  });

  socket.on('hammerevent', function(data) {
    // do something with Hammerevent
    console.log(data);
  });

  socket.on('disconnection', function(){
    // do something with disconnedtioninformation
    console.log('a disconnection');
  });
});
