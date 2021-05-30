const Knex  = require('knex');
const { Model } = require('objection')
const Armodel = require ('./armodel');

const connection = require('../../knexfile')

const knexConnection = Knex(connection)

Model.knex(knexConnection);
class Museum extends Model {
    static get tableName () {
      return 'museums';
    }
  
    static get relationMappings () {
      return {
        armodels: {
          relation: Model.HasManyRelation,
          modelClass: Armodel,
          join: {
            from: 'museums.id',
            to: 'armodels.museums_id'
          }
        }
      }
    }
  }

module.exports = Museum;
  
  