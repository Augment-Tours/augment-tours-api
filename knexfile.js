const pg = require('pg')
//pg.defaults.ssl=true;

module.exports = {
  development:{
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres', // Aymen's -> 'postgres'
      password: 'potterhead', // 
      database: 'augment_tours'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    }
  }
  
}

