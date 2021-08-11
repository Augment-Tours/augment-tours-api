exports.up = async function(knex) {
    await knex.schema.table('targets', function (table) {
        table.enu('type',['museums','armodels']);
    });
};

exports.down = async function(knex) {
        await knex.schema.table('targets', function (table) {
        table.dropColumn('type');
    });
};

