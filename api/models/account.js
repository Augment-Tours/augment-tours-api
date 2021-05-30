const Knex = require('knex');
const { Model } = require('objection')
const Favorite= require('./favorite');
const Armodel = require ('./armodel');

const connection = require('../../knexfile')

const knexConnection = Knex(connection)

Model.knex(knexConnection);

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

module.exports = Account;

