const { db } = require('../config/connection');

module.exports = {
  findAll() {
    return db.many(`
        SELECT * 
        FROM games
        ORDER BY gdate
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
    return db.none(`
        DELETE FROM games
        WHERE id = $1
        `, id);
  },

  update(data, id) {
    return db.one(`
        UPDATE games
        SET
          gdate = $/gdate/,
          gtime = $/gtime/,
          home = $/home/,
          team = $/team/
        WHERE id = ${id}
        RETURNING *
        `, data);
  },

};

// module.exports.findAll().then(games => console.log(games));
