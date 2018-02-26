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
const game_rooms = [];
var room;
io.use((socket, next)=>{
console.log(socket.handshake.query);
  room = socket.handshake.query.token;
  if(room){
    socket.join(room);
    game_rooms.push(room);
    return next();
  }else{
    return next() // Join the public namespace
  }
});

io.on('connection', (socket)=>{
  console.log('A player joinned');
  if(room){
    console.log('A player joinned room :' + room);
    console.log(game_rooms);
  }else{
    console.log('A player Joinned the Public Game');
    console.log(game_rooms);
  }
});
