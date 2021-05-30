const express = require('express')

const Account =  require('../models/account');

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const accounts = await Account.query();
        res.json(accounts)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

  module.exports = router;