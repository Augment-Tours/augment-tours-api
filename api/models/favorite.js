const Knex = require("knex");
const { Model } = require("objection");
const Armodel = require("./armodel");
const Account = require("./account");

class Favorite extends Model {
  static get tableName() {
    return "favorites";
  }

  static get relationMappings() {
    return {
      armodels: {
        relation: Model.HasManyRelation,
        modelClass: Armodel,
        join: {
          from: "favorites.id",
          to: "armodels.favorites_id",
        },
      },
      accounts: {
        relation: Model.HasManyRelation,
        modelClass: Account,
        join: {
          from: "favorites.id",
          to: "accounts.favorites_id",
        },
      },
    };
  }
}

exports.addFavorite = async (armodelId, accountId) => {
  const account = Account.getAccount(accountId);
  if (!account) {
    throw new Error("account doesn not exsist");
  }
  const date = new Date();
  const favorite = await Favorite.query().insert({
    armodels_id: armodelId,
    accounts_id: accountId,
    favorited_date: date,
  });
  return favorite;
};

exports.removeFavorite = async (armodelId, accountId) => {
  const account = Account.getAccount(accountId);
  return Favorite.query()
    .where({ accounts_id: accountId, armodels_id: armodelId })
    .delete()
};

exports.getFavoriteByAccount = async (userId) => {
  const favorites = await Favorite.query()
    .join("armodels", "favorites.armodels_id", "armodels.id")
    .where("accounts_id", userId)
    .select("favorites.*", "armodels.*");
  return favorites;
};

exports.getFavoriteByAccountAndModel = async (userId, ARId) => {
  const favorite = await Favorite.query()
    .where("accounts_id", userId)
    .andWhere("armodels_id", ARId);

  if (favorite.length === 0) {
    return false;
  }
  return true;
};

exports.getFavoriteByEmail = async (email) => {
  const favorites = await Favorite.query()
    .join("armodels", "favorites.armodels_id", "armodels.id")
    .join("accounts", "favorites.accounts_id", "accounts.id")
    .where("email", email)
    .select("favorites.*", "accounts.*", "armodels.*");
  return favorites;
};
