
exports.up = async function(knex) {
    await knex.schema.table('armodels', function (table) {
        table.string('image');
    });
};

exports.down = async function(knex) {
        await knex.schema.table('armodels', function (table) {
        table.dropColumn('image');
    });
};
