
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return Promise.all([
        knex.schema.createTable('museums', table => {
          table
            .uuid('id')
            .unique()
            .notNullable()
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
          table.string('name')
          table.string('description')
          table.string('image')
        })
    ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('museums')
    ])
};
