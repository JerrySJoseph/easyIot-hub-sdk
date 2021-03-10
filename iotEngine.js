const serverConnection=require('./connection/server-connection');

let mSocket=null;

const initEngine=(SERVER_URL)=>{
return new Promise((resolve,reject)=>{

       serverConnection.initServerConnection(SERVER_URL)
        .then((socket)=>{
            mSocket=socket;
            // register socket events
            socket.on('connect',onConnectListener)
            socket.on('command',onCommandListener)
            resolve();
        }).catch((error)=>reject(error));

})
}


const onConnectListener=(socket)=>{

    const sid=mSocket.id!=null?mSocket.id:"unknown socket id";
    console.log('Connected to Server in socket: '+sid)

    //Send hub handshake event immediately after connect
    mSocket.emit('hub-handshake',"some random hub ID",onHubHandshakeListener);
}
const onCommandListener=(msg)=>{
    console.log('New command recieved: '+msg)
}
const onHubHandshakeListener=(response)=>{
    console.log("Handshake response from server: "+response);
}

module.exports={initEngine}