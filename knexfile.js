const pg = require('pg')
//pg.defaults.ssl=true;

module.exports = {
  development:{
    client: 'pg',
    connection: {
      host: 'localhost',
      user: process.env.USERNAME, // Aymen's -> 'postgres'
      password: process.env.PASSWORD, // 
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

