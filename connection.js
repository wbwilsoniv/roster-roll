const pgp = require('pg-promise')();

const opts = {
    database: 'team_db'
};

const db = pgp(opts);

module.exports = db;