var Socket = function () {




    this.runSocketListeners = function (socket, io) {

        socket.on('move', function (data) {
            io.emit('move-command', {
                command: `move-${data.side}`
            });
        });

    };






};


module.exports = new Socket();