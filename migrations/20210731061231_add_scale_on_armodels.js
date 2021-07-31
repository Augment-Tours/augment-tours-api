exports.up = async function(knex) {
    await knex.schema.table('armodels', function (table) {
        table.float('x_scale')
        table.float('y_scale')
        table.float('z_scale');
    });
};

exports.down = async function(knex) {
        await knex.schema.table('armodels', function (table) {
        table.dropColumn('x_scale')
        table.dropColumn('y_scale')
        table.dropColumn('z_scale');
    });
};

