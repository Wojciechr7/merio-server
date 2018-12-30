var socket = io('http://localhost:3000');

socket.on('move-command', function (data) {
    console.log(`server requests to ${data.command}`)
});

function move(side) {

    socket.emit('move', { side: side });
}