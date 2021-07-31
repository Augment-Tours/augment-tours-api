const express = require('express')

const Armodel =  require('../models/armodel');

const router = express.Router()

router.get('/:id', async (req, res) => {
    try{
        const armodel = await Armodel.getArmodel(req.params.id);
        res.json(armodel)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

router.get('/', async (req, res) => {
    try{
        const armodels = await Armodel.getAllArModels();
        res.json(armodels)
    }
    catch(err){
        console.log('error ' + err);
    }
})

router.get('/:museumId/:floor', async(req,res)=>{
    try{
        const armodels = await Armodel.getArmodelsbyMuseumFloor(req.params.museumId,req.params.floor);
        console.log(armodels);
        res.json(armodels);
    }
    catch(err){
        console.log('error '+err);
    }
})

router.post('/', async(req,res)=>{
    console.log("in create ar model")
    try{
        const newArmodel = req.body;
        console.log("ArModel", newArmodel); 
        const armodel = await Armodel.addArmodel(newArmodel.name, newArmodel.description, newArmodel.model, newArmodel.x_location,newArmodel.y_location, newArmodel.floor, newArmodel.museums_id, newArmodel.image, newArmodel.x_scale, newArmodel.y_scale, newArmodel.z_scale);
        res.json(armodel);
    }
    catch(err){
        console.log('error '+err);
    }
})

  module.exports = router;