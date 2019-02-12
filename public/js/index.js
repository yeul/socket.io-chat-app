var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.on('newMessage', function (messageToClient) {
        console.log('Message received!', messageToClient);
    });

    socket.on('adminMessage', function (joinedServer) {
        console.log('User joined chatroom!', joinedServer);
    });

    socket.on('welcomeMessage', function (greeting) {
        console.log(greeting);
    });

    socket.on('disconnect', function () {
        console.log('Disconnected from server.');
    });

});
