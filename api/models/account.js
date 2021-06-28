const Knex = require('knex');
const { Model } = require('objection')
const Favorite= require('./favorite');
const Armodel = require ('./armodel');

const bcrypt = require('bcrypt');



class Account extends Model {
    static get tableName () {
      return 'accounts';
    }
  
    static get relationMappings () {
      return {
        armodels: {
            relation: Model.HasManyRelation,
            modelClass: Armodel,
            join: {
                from: 'accounts.id',
                to: 'armodels.accounts_id'
            }
        },
        favorites: {
            relation: Model.HasManyRelation,
            modelClass: Favorite,
            join: {
                from: 'accounts.id',
                to: 'favorites.accounts_id'
            }
        }
      }
    }
  }

  exports.registerUser = async (userName,userEmail,userPassword)=>{
    const hashedPassword = await bcrypt.hash(userPassword, 12);
    const user = await Account.query().insert({
      name: userName,
      email: userEmail,
      password: hashedPassword,
      isAdmin: false
    });
    return user;
  }

  exports.getAccount = async (accountID)=>{
    const account = await Account.query().findById(accountID);
    if(!account){
      throw new Error('account doesn not exsist');
    }

    const userAccount = {
      name: account.name,
      email: account.email,
      isAdmin: account.isAdmin
    }
    return userAccount; 
  }

  exports.getAccountEmail = async (accountEmail) => { 
    const account = await Account.query().findOne({email: accountEmail});
    if(!account){
      throw new Error('account doesn not exsist');
    }

    const userAccount = {
      name: account.name,
      email: account.email,
      isAdmin: account.isAdmin
    }
    return userAccount; 
  }

  