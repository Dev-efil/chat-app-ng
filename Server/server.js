const express = require('express');
const socket = require('socket.io');

const server = express();
const PORT = process.env.PORT || 3500;



const app = server.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));


// Socket.io setup
const io = socket(app, {
    cors: {
        origin: 'http://localhost:4200'
    },
});

io.on('connection', function (socket) {
    console.log(`Made a Socket connection : ${socket.id}`);
    // socket.on('disconnect', () => {
    //     console.log('User disconnected');
    // });
    // Register an event to console the data which coming from Client.
    socket.on('sender', (msg) => {
        console.log('Message : '+ JSON.stringify(msg));
        // broadcast the event to all connected users
        io.emit('broadcast', `server broadcast : ${JSON.stringify(msg)}`);
    });
});