const serverConnection=require('./connection/server-connection');
const commandProcessor=require('./helpers/command-processor')

//Initialting a null socket
let mSocket=null;

//A promise to initialize the engine
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

//called when Connection Established
const onConnectListener=(socket)=>{

    const sid=mSocket.id!=null?mSocket.id:"unknown socket id";
    console.log('Connected to Server in socket: '+sid)

    //Send hub handshake event immediately after connect
    mSocket.emit('hub-handshake',"some random hub ID",onHubHandshakeListener);
}

//called when new command recived
const onCommandListener=(msg)=>{
    console.log('New command recieved: '+msg)
}

//called when handshake acknowloedgemt is recived
const onHubHandshakeListener=(response)=>{
    console.log("Handshake response from server: "+response);
}

module.exports={initEngine}