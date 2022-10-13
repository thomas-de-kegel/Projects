const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html'); //We point to the current directory and then to the html file
});

io.on('connection', (socket)=>{
    console.log('A user has connected!')
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    })
    socket.on('disconnect', ()=>{
        console.log('A user has disconnected!')
    });
});



server.listen(3000, ()=>{
    console.log('listening on port 3000');
})