const pg = require('pg')
//pg.defaults.ssl=true;
require('dotenv').config()
module.exports = {
  development:{
    client: 'pg',
    connection: {
      host: 'localhost',
      user: process.env.DB_USERNAME, // Aymen's -> 'postgres'
      password: process.env.DB_PASSWORD,
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
      connectionString: process.env.PROD_DB_URL,
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

