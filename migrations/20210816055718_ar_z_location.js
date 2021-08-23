exports.up = async function (knex) {
  await knex.schema.table("armodels", function (table) {
    table.float("z_location");
  });
};

exports.down = async function (knex) {
  await knex.schema.table("armodels", function (table) {
    table.dropColumn("z_location");
  });
};
