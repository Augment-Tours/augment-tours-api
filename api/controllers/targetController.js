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

router.get('/', async (req, res) => {
    try{
        const targets = await Target.getAllTargets();
        res.json(targets)
    }
    catch(err){
        console.log('error ' + err);
    }
})

router.get('/museums/:museums_id',async(req,res) => { 
    try{ 
        const targets = await Target.getTargetsByMuseum(req.params.museums_id);
        res.json(targets);
    }
    catch(err){
        console.log('error '+err);
    }
})

router.get('/type/:type',async(req,res) => { 
    try{ 
        const targets = await Target.getTargetsByType(req.params.type);
        res.json(targets);
    }
    catch(err){
        console.log('error '+err);
    }
})

  router.post('/', async(req,res)=>{
    try{
        const newTarget = req.body;
        const target = await Target.addTarget(newTarget.information,newTarget.model,newTarget.x_location,newTarget.y_location,newTarget.floor,newTarget.museums_id,newTarget.type);
        res.json(target);
    }
    catch(err){
        console.log('error '+ err);
    }
})

  module.exports = router;