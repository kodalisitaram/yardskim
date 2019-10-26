var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('ysrailcar', function(msg){
        console.log(msg);
        io.emit('ysrailcar', msg);
      });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
