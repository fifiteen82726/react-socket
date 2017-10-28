const express = require('express');
const path = require('path');
const http = require('http');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let clientCount = 0;

io.on('connection', socket => {

  clientCount++;

  socket.on('newUser', username => {
    socket.emit('clientCount', clientCount)
  })

  socket.broadcast.emit('clientCount', clientCount)
  console.log("a user connected. Client number:", clientCount);

  socket.on('message', message => {
    console.log(message);
    socket.broadcast.emit('message', message)
  })

  socket.on('disconnect', () => {
    clientCount--;
    socket.broadcast.emit('clientCount', clientCount)
    console.log("a user disconnect. Client number:", clientCount);
  });

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(4000, () => {
  console.log('Listening on 4000');
})
