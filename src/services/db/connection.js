const knex = require('knex');
const knexfile = require('../../../knexfile.js');
const environment = process.env.NODE_ENV || 'test'
const config = knexfile;

module.exports = knex(config);

