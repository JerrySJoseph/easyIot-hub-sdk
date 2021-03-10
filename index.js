const express=require('express');
const io=require('socket.io-client');
const app=express();

const socket=io.connect('http://192.168.1.26:3001',{reconnection:true});

app.use(express.static(__dirname+'/public'));

const PORT=5000;
socket.on('connect',()=>{
    console.log('connected to Server')
    socket.emit('hub-handshake',"Hi from hub1",(response)=>{
        console.log(response);
    })
    
})
socket.on('command',(msg)=>{
    console.log("Command recieved: "+msg);
})

app.listen(PORT,()=>console.log("Hub server is listening on port "+PORT))