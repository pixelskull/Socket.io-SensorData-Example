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
  console.log(     'a new connection');
  // socket.on('disconnected', function(){
  //   console.log('user is gone');
  // });
  socket.on('sensor', function(data) {
    console.log(data);
  });
});

// io.on('sensor', function(data) {
//   console.log('data:' + data);
// });
//
// io.onmessage = function(event) {
//   console.log(event);
// }
//
// io.on('disconnected', function(){
//   console.log('user is gone');
// });
