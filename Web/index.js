var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser')


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/loginnew.html');
});
app.get('/dash', function (req, res) {
    res.sendFile(__dirname + '/dashboard.html');
});
app.get('/yard', function (req, res) {
    res.sendFile(__dirname + '/yard.html');
});
app.post('/msg',function(req,res){
        console.log('/ping');
        console.log(req.body);
        io.sockets.emit('ysrailcar',req.body);
        res.send('ok');
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
