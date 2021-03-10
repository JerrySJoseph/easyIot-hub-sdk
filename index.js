const express=require('express');

//importing Iot-Engine 
const iotEngine=require('./iotEngine');

//Warning: Change the Server URL according to your network
const SERVER_URL='http://192.168.1.26:3001'


const app=express();

//For serving static file for UI
app.use(express.static(__dirname+'/public'));

//Initializing the Iot-Engine
iotEngine.initEngine(SERVER_URL)
.then(()=>console.log("Iot engine is up and connected to master server at "+SERVER_URL))
.catch((err)=>console.log(err));

//Listen to any free port for the UI
const listener=app.listen(0,()=>console.log("Hub UI is available on localip:"+listener.address().port))