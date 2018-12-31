var Socket = function () {




    this.runSocketListeners = function (socket, io) {

        socket.on('move', function (data) {
            io.emit('move-command', {
                command: data.side
            });
        });

        socket.on('stop', function (data) {
            io.emit('stop-command', {
                command: data.side
            });
        });

    };






};


module.exports = new Socket();