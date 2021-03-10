const express=require('express');
const iotEngine=require('./iotEngine');

const SERVER_URL='http://192.168.1.26:3001'

const app=express();

iotEngine.initEngine(SERVER_URL)
.then(()=>console.log("Iot engine is up and running on "+SERVER_URL))
.catch((err)=>console.log(err));

app.use(express.static(__dirname+'/public'));

const PORT=process.env.PORT ||5000 ;

const listener=app.listen(0,()=>console.log("Hub server is listening on port "+listener.address().port))