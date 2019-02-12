var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.on('newMessage', function (messageToClient) {
        console.log('Message received!', messageToClient);
    });

    socket.on('disconnect', function () {
        console.log('Disconnected from server.');
    });

});
