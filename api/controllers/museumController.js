const express = require('express')

const Museum =  require('../models/museum');


const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const museums = await Museum.getALLMuseums();
        res.json(museums)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

  router.get('/:id', async (req, res) => {
    try{
        const museum = await Museum.getMuseum(req.params.id);
        res.json(museum);
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

  router.post('/', async(req,res)=>{
    try{
        const newMuseum = req.body
        const museum = await Museum.addMuseum(newMuseum.name,newMuseum.description,newMuseum.image);
        res.json(museum)
    }
    catch(err){
        console.log('error ' + err);
    }
    
      
  })

  module.exports = router;