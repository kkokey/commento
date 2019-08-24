import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import user from './api/router';
import socketIo from 'socket.io';
import http from 'http';

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', user);

io.on('connection', socket => {
  socket.emit('CONNECTIONS', Object.keys(io.sockets.connected).length);
  socket.on('NEW_MESSAGE', data => {
    socket.broadcast.emit('MESSAGE', data);
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  });

  socket.on('stopTyping', () => {
    socket.broadcast.emit('stopTyping');
  });
});

export default { app, httpServer };
