var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.on('newMessage', function (message) {
        console.log('Message received!', message);
        var li = $('<li></li>');
        li.text(`${message.from}: ${message.text}`);

        $('#messages').append(li);
    });

    socket.on('disconnect', function () {
        console.log('Disconnected from server.');
    });
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message').val()
    }, function () {

    });
});