const express = require('express')

const Museum =  require('../models/museum');

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const museums = await Museum.query()
    res.json(museums)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

  module.exports = router;