const Knex  = require('knex');
const { Model } = require('objection')
const Favorite= require('./favorite');
const Account = require('./armodel');
const Museum =  require ('./museum');


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

  exports.getArmodel = async (armodelId)=>{
    const armodel = await Armodel.query().findById(armodelId);
    if(!armodel){
      throw new Error('AR Model doesn not exsist');
    }
    return armodel; 
  };

  exports.getArmodelsbyMuseumFloor = async(museumId, floor) => {
    console.log(museumId);
    console.log(floor);
    const arModels = await Armodel
    .query()
    .where('museums_id',museumId)
    .where('floor',floor);
    //console.log(arModels);
    return arModels;
  }


  exports.addArmodel = async (arName,arDescription ,arModelurl,arXlocation,arYlocation,arFloor,arMuseumId)=>{
    const museum = await Museum.getMuseum(arMuseumId);
    if(!museum){
      throw new Error('Museum does not exsist');
    }
    const armodel = await Armodel.query().insert({
      name: arName,
      description: arDescription,
      model: arModelurl,
      x_location: arXlocation,
      y_location: arYlocation,
      floor:arFloor,
      museums_id: arMuseumId
    });
    return armodel;
  }

