var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

http.listen(process.env.PORT||5000, ()=>{
  console.log('Server running at : ' + 5000);
});

io.on('connection', (socket)=>{
  console.log('A player joinned');
  console.log(socket.handshake.query);
});
