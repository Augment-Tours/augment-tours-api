const express = require('express')

const Armodel =  require('../models/armodel');

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const armodel = await Armodel.query();
        res.json(armodel)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

  module.exports = router;