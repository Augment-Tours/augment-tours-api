
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return Promise.all([
        knex.schema.createTable('accounts', table => {
          table
            .uuid('id')
            .unique()
            .notNullable()
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
          table.string('name')
          table.string('email').notNullable()
          table.string('password').notNullable()
          table.boolean('isAdmin').notNullable()
        })
    ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('accounts')
    ])
};
