// Setup basic express server 
var express = require('express'); 
var app = express(); 
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 
var port = process.env.PORT || 25565;  
 
server.listen(port, function () { 
  console.log('Server listening at port %d', port); 
}); 

// Routing 
app.use(express.static(__dirname + '/public')); 

var connected_users = {};

// Socket.io
io.on('connection', function (socket) {
  var worldX = 0;
});