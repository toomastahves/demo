import socketio from 'socket.io';
const io = socketio().listen(4000);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message send', (message) => {
    console.log('message', message);
    io.emit('chat message emit', message);
  });
});
