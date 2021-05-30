
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return Promise.all([
        knex.schema.createTable('favorites', table => {
          table
            .uuid('id')
            .unique()
            .notNullable()
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'));
          table.uuid('armodels_id').references('armodels.id');
          table.uuid('accounts_id').references('accounts.id');
          table.timestamp('favorited_date');
        })
    ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('armodels')
    ])
};
