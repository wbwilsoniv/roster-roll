const { db } = require('../config/connection');

function findAll() {
  return db.many(`
        SELECT * 
        FROM players
        ORDER BY team
        `);
}

function findOne(id) {
  return db.one(`
        SELECT *
        FROM players
        WHERE id = $1
        `, id);
}

function createPlayer(player) {
  return db.one(`
        INSERT INTO players
        (firstname, team)
        VALUES
        ($/firstname/, $/team/)
        RETURNING *
        `, player);
}

function deletePlayer(id) {
  return db.none(`
        DELETE FROM players
        WHERE id = $1
        `, id);
}

function updatePlayer(data, id) {
  return db.one(`
        UPDATE players
        SET
          firstname = $/firstname/,
          team = $/team/
        WHERE id = ${id}
        RETURNING *
        `, data);
}

module.exports = {
  findAll,
  findOne,
  createPlayer,
  deletePlayer,
  updatePlayer,
};

// module.exports.create('frank','Sliders').then(players => console.log(players));
