const Knex  = require('knex');
const { Model } = require('objection');
const Armodel = require ('./armodel');
const Target = require('./target');


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
        },
        targets: {
          relation: Model.HasManyRelation,
          modelClass: Target,
          join: {
            from: 'museums.id',
            to: 'targets.museums_id'
          }
        }
      }
    }
  }

exports.getALLMuseums = async () =>{
  const museums = await Museum.query();
  return museums;
}

exports.getMuseum = async (museumId)=>{
  const museum = await Museum.query().findById(museumId);
  if(!museum){
    throw new Error('Museum doesn not exsist');
  }
  return museum; 
}

exports.addMuseum = async (museumName,museumDescription,museumImage)=>{
  const museum = await Museum.query().insert({
    name: museumName,
    description: museumDescription,
    image: museumImage
  });
  return museum;
}

  
  