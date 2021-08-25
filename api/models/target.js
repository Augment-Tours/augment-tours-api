const Knex = require("knex");
const { Model } = require("objection");
const Favorite = require("./favorite");
const Account = require("./armodel");
const Museum = require("./museum");

class Target extends Model {
  static get tableName() {
    return "targets";
  }

  static get relationMappings() {
    return {
      museum: {
        relation: Model.BelongsToOneRelation,
        modelClass: Museum,
        join: {
          from: "targets.museums_id",
          to: "museums.id",
        },
      },
    };
  }
}
  exports.getTarget = async(targetId)=>{
    const target = await Target.query().findById(targetId);
    if(!target){
      throw new Error('Target does not exist');
    }
    return target;
  };

  exports.getTargetsByMuseum = async(museumId)=>{
    const targets = await Target
      .query()
      .where('museums_id',museumId)
      .where('type','armodels');

exports.getTarget = async (targetId) => {
  const target = await Target.query().findById(targetId);
  if (!target) {
    throw new Error("Target does not exsist");
  }
  return target;
};

exports.getAllTargets = async () => {
  const targets = await Target.query();
  return targets;
};

exports.getTargetsByMuseum = async (museumId) => {
  const targets = await Target.query()
    .where("museums_id", museumId)
    .where("type", "armodels");

  return targets;
};

exports.getTargetsByType = async (type) => {
  const targets = await Target.query().where("type", type);

  return targets;
};

exports.addTarget = async (
  targetInformation,
  targetModel,
  targetXlocation,
  targetYlocation,
  targetFloor,
  museumId,
  targetType
) => {
  const museum = await Museum.getMuseum(museumId);
  if (!museum) {
    throw new Error("Museum does not exsist");
  }
  const target = await Target.query().insert({
    information: targetInformation,
    model: targetModel,
    x_location: targetXlocation,
    y_location: targetYlocation,
    floor: targetFloor,
    museums_id: museumId,
    type: targetType,
  });
  return target;
}};
