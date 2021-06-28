const express = require('express')

const Favorite =  require('../models/favorite');

const router = express.Router()

router.get('/:accountId', async (req, res) => {
    try{
        const favorites = await Favorite.getFavoriteByAccount(req.params.accountId);
        res.json(favorites);
    }
    catch(err){
        console.log('error ' + err);
    }
    
  })

router.post('/', async(req,res)=>{
    try{
        const newFavorite = req.body;
        const favorite = await Favorite.addFavorite(newFavorite.armodels_id, newFavorite.accounts_id); 
        res.json(favorite);
    }
    catch(err){
        console.log('error '+ err);
    }
})

  module.exports = router;