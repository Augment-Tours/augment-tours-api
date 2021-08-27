const express = require('express')
const { URL } = require('url');

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

router.get('/getBy/email/', async (req, res) => {
    try{
        const favorites = await Favorite.getFavoriteByEmail(req.query.email);
        res.json(favorites);
    }
    catch(err){
        console.log('error ' + err);
    }
    
})

router.get('/:acountId/:arId',async(req, res) =>{
    try{ 
        const favorite = await Favorite.getFavoriteByAccountAndModel(req.params.acountId, req.params.arId);
        res.json(favorite);
    }
    catch(err){
        console.log('error' + err);
    }
})


router.post('/', async(req,res)=>{
    try{
        const newFavorite = req.body;
        const is_favorited = await Favorite.getFavoriteByAccountAndModel(newFavorite.accounts_id, newFavorite.armodels_id);
        if(is_favorited) {
            const removed_from_favorite = await Favorite.removeFavorite(newFavorite.armodels_id, newFavorite.accounts_id);
            res.json(removed_from_favorite);
            return
        }
        const favorited = await Favorite.addFavorite(newFavorite.armodels_id, newFavorite.accounts_id); 
        res.json(favorited);
    }
    catch(err){
        console.log('error '+ err);
    }
})

  module.exports = router;