const db = require('../connection');

module.exports = {
  findAll() {
    return db.many(`
        SELECT * 
        FROM games
        `);
  },

  findOne(id) {
    return db.one(`
        SELECT *
        FROM games
        WHERE id = $1
        `, id);
  },

  create(gameData) {
    return db.one(`
        INSERT INTO games
        (gdate, gtime, home, team)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *
        `, [gameData.gdate, gameData.gtime, gameData.home, gameData.team]);
  },

  delete(id) {
    return db.one(`
        DELETE FROM games
        WHERE id = $1
        `, id);
  },

  update(id, gameData) {
    return db.one(`
        UPDATE games
        SET
          gdate = $2,
          gtime = $3
          home = $4
          team = $5
        WHERE id = $1
        RETURNING *
        `, [id, gameData.gdate, gameData.gtime, gameData.home, gameData.team]);
  },

};

// module.exports.findAll().then(games => console.log(games));
