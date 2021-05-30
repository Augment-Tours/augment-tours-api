const Knex  = require('knex');
const { Model } = require('objection')
const Favorite= require('./favorite');
const Account = require('./armodel');
const Museum =  require ('./museum');

const connection = require('../../knexfile')

const knexConnection = Knex(connection)

Model.knex(knexConnection);
class Armodel extends Model {
    static get tableName () {
      return 'armodels';
    }
  
    static get relationMappings () {
      return {
        museum: {
          relation: Model.BelongsToOneRelation,
          modelClass: Museum,
          join: {
            from: 'armodels.museums_id',
            to: 'museums.id'
          }
        },
        accounts: {
            relation: Model.HasManyRelation,
            modelClass: Account,
            join: {
                from: 'armodels.id',
                to: 'accounts.armodels_id'
            }
        },
        favorites: {
            relation: Model.HasManyRelation,
            modelClass: Favorite,
            join: {
                from: 'armodels.id',
                to: 'favorites.armodels_id'
            }
        }
      }
    }
  }
  module.exports = Armodel;