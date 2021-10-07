const express = require('express');
const app = express();
const http= require('http');
const server= http.createServer(app);
const socketio= require('socket.io');
const io= socketio(server);

const path= require('path');

app.use('/', express.static(path.join(__dirname, 'public')))

const users={};

io.on('connection',(socket) => {

    socket.on('send_msg', (data) => {
        io.emit('received_msg',{
            msg: data.msg,
            // id: socket.id
            user: users[socket.id]
        })
    });

    socket.on('login' , (data)=>{
    	users[socket.id] = data.user;

    })

})


const port = process.env.PORT || 3000;


server.listen(port, function(){
    console.log('listening on port 3000');
})
