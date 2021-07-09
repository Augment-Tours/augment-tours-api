const pg = require('pg')
//pg.defaults.ssl=true;

module.exports = {
  development:{
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'augment', // Aymen's -> 'postgres'
      password: 'Welcome1',
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
      //connectionString: 'postgres://kcypslqhnajbpe:79dd10bfc662a0ebd7faa1b5416c471b24e53fd61cd14335f737b42d1bf4a667@ec2-34-230-115-172.compute-1.amazonaws.com:5432/da9tsgi1uhibve',
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

