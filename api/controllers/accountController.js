const express = require('express')

const Account =  require('../models/account');

const router = express.Router()

router.get('/:id', async (req, res) => {
    try{
        const account = await Account.getAccount(req.params.id);
        res.json(account)
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

router.post('/', async(req,res)=>{
    try{ 
        const newAccount = req.body;
        const account = await Account.registerUser(newAccount.name,newAccount.email,newAccount.password);
        res.json(account);
    }
    catch(err){
        console.log('error '+ err);
    }
})
  module.exports = router;