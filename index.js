const express=require('express');

const app=express();


app.use(express.static(__dirname+'/public'));

const PORT=process.env.PORT ||5000 ;

const listener=app.listen(0,()=>console.log("Hub server is listening on port "+listener.address().port))