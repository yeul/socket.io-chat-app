const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// new socket.io connection

io.on('connection', (socket) => {
    console.log('A new user connected!');

    socket.emit('welcomeMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app!',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('adminMessage', {
        from: 'Admin',
        text: 'A new user joined!',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    // socket disconnect.

    socket.on('disconnect', () => {
        console.log('User disconnected.')

    });

});

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
});