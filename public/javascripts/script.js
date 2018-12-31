var socket = io('https://merio-server.herokuapp.com');

/*socket.on('move-command', function (data) {
    console.log(`server requests to ${data.command}`)
});

socket.on('stop-command', function (data) {
    console.log(`server requests stop to ${data.command}`)
});*/

function move(side) {
    socket.emit('move', { side: side });
}

function stop(side) {
    socket.emit('stop', { side: side });
}