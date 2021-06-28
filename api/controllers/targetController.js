const express = require('express')

const Target =  require('../models/target');

const router = express.Router()

router.get('/:id', async (req, res) => {
    try{
        const targets = await Target.getTarget(req.params.id);
        res.json(targets)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

  router.post('/', async(req,res)=>{
    try{
        const newTarget = req.body;
        const target = await Target.addTarget(newTarget.information,newTarget.model,newTarget.x_location,newTarget.y_location,newTarget.floor,newTarget.museums_id);
        res.json(target);
    }
    catch(err){
        console.log('error '+ err);
    }
})

  module.exports = router;