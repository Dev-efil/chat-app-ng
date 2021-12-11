const express = require('express');
const socket = require('socket.io');

const server = express();
const PORT = process.env.PORT || 3500;



server.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));