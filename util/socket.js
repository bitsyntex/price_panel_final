let io;

module.exports.socketDeploy = function (httpServer) {
    io = require('socket.io')(httpServer);
    return io;
};
module.exports.getIO = function () {
    if (!io) {
        throw  new Error('Socket error');
    }
    else {
        return io;
    }
};



// module.exports = {
//     socketsDeploy: (httpServer) => {
//         io = require('socket.io')(httpServer);
//         return io;
//     } ,
//     getIO: () => {
//         if (!io) {
//             throw new Error('Socket is not initialized');
//         }
//         return io;
//     }
// };