const path = require('path')
const BASE_PATH = path.join(__dirname, 'src', 'services', 'db')

const dotenv = require('dotenv')
dotenv.load()
const env = process.env.NODE_ENV || 'test'

let config
config = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8'
  },
  pool: {
    min: 2,
    max: 10
  }
}

config.migrations = {
  tableName: 'knex_migrations',
  directory: path.join(BASE_PATH, 'migrations')
}

module.exports = config
