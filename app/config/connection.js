const pgp = require('pg-promise')();

const opts = process.env.DATABASE_URL || {
  database: process.env.DB_NAME || 'team_db',
};

const db = pgp(opts);

module.exports = {
  pgp,
  db,
};
