var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    // new message received => from server to client

    socket.on('newMessage', function (messageToClient) {
        console.log('Message received!', messageToClient);
    });

    // new message event => from client to server

    socket.emit('createMessage', {
        from: 'user1',
        text: 'hello!'
    });

    socket.on('disconnect', function () {
        console.log('Disconnected from server.');
    });

});
