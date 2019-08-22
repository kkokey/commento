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
  socket.on('newMessage', ({ message }) => {
    socket.broadcast.emit('messageNotification', {
      message,
      nickname: socket.nickname || 'Anonymous'
    });
  });

  socket.on('setNickname', ({ nickname }) => {
    socket.nickname = nickname;
  });
});

// http =>

export default { app, httpServer };
