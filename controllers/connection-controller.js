//importing Iot-Engine 
const iotEngine=require('../iotEngine');



function startEngine(serverUrl) {
    return new Promise((resolve,reject)=>{
        iotEngine.initEngine(serverUrl)
            .then(()=>{
                console.log("Iot engine is up and connected to master server at "+serverUrl)
                resolve();
            })
            .catch((err)=>reject(err));
    })
           
        
}

module.exports={startEngine}