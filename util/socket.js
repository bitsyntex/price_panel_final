let io;

module.exports = {
    socketsDeploy: (httpServer) => {
        io = require('socket.io')(httpServer);
        return io;
    } ,
    getIO: () => {
        if (!io) {
            throw new Error('Socket is not initialized');
        }
        return io;
    }
};
