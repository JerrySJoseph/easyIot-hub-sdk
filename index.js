const express=require('express');
const connectionRouter=require('./routes/connection-route');


const PORT=4848;


const app=express();

//For serving static file for UI
app.use(express.static(__dirname+'/public'));
app.use(express.json())

//routes
app.use('/api/connection',connectionRouter);



//Listen to any free port for the UI
const listener=app.listen(5000,()=>console.log("Hub UI is available on localip:"+listener.address().port))