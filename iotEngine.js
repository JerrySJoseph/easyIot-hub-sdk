const io=require('socket.io-client');



const socket=io.connect('http://192.168.1.26:3001',{reconnection:true});


socket.on('connect',()=>{
    console.log('connected to Server')
    socket.emit('hub-handshake',"Hi from hub1",(response)=>{
        console.log(response);
    })
    
})

socket.on('command',(msg)=>{
    console.log("Command recieved: "+msg);
})