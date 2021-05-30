const Knex = require('knex');
const { Model } = require('objection')
const Armodel = require('./armodel');
const Account = require('./armodel');

const connection = require('../../knexfile')

const knexConnection = Knex(connection)

Model.knex(knexConnection);

class Favorite extends Model {
    static get tableName () {
      return 'favorites';
    }
  
    static get relationMappings () {
      return {
        armodels: {
            relation: Model.HasManyRelation,
            modelClass: Armodel,
            join: {
                from: 'favorites.id',
                to: 'armodels.favorites_id'
            }
        },
        accounts: {
            relation: Model.HasManyRelation,
            modelClass: Account,
            join: {
                from: 'favorites.id',
                to: 'accounts.favorites_id'
            }
        }
      }
    }
  }
module.exports = Favorite;
