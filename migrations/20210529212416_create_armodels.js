
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return Promise.all([
        knex.schema.createTable('armodels', table => {
          table
            .uuid('id')
            .unique()
            .notNullable()
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
          table.string('name')
          table.string('description')
          table.string('model')
          table.float('x_location', 4, 2)
          table.float('y_location', 4,2)
          table.integer('floor')
          table.uuid('museums_id').references('museums.id');
        })
    ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('armodels')
    ])
};
