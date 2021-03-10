
const io=require('socket.io-client');


const initServerConnection=(SERVER_URL)=>{
    return new Promise((resolve,reject)=>{

        try {
            const socket=io.connect(SERVER_URL,{reconnection:true});
            resolve(socket);
        } catch (error) {
            reject(error)
        }
    })
}
module.exports={initServerConnection};