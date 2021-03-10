const router=require('express').Router();
const connectionController=require('../controllers/connection-controller')


router.post('/connect',(req,res)=>{
    const {serverUrl}=req.body;
    if(!serverUrl)
        return res.status(400).send("NO server Url specified");
    else
        {
            connectionController.startEngine(serverUrl)
            .then(()=>res.status(200).send("Connected to server at url "+ serverUrl))
            .catch((error)=>res.status(400).send(error));
        }
})

module.exports=router;