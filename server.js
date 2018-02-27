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
  socket.on('join', (data)=>{
    console.log('Your score is ' + data.score);
    if(room){
      console.log('A player joinned room :' + room);
      console.log(game_rooms);
      //io.to(room).emit('state', {id:socket.id, score: data.score});
    }else{
      console.log('A player Joinned the Public Game');
    }

    socket.on('endgame', (data)=>{
      console.log('Player ' + socket.id + ' died');
      console.log(data);
      if(room){
        io.to(room).emit('playerScores', data);
      }else{
        io.emit('playerScores', data);
      }
    });

  });

  socket.on('disconnect', ()=>{
    if(room){
      console.log(socket.id + ' left private game '+ room);
    }else{
      console.log(socket.id + ' Left Public Game');
    }
  });


});
