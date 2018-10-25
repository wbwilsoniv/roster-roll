const db = require('../../models/players');


// Show all players
function showAll(req, res) {
  db.findAll()
    .then((players) => {
      res.json(players);
    })
    .catch(err => res.status(400).json({ message: '400', err }));
}
// Gets 1 player by player id
function showOne(req, res) {
  db.findOne(req.params.id)
    .then((player) => {
      res.json(player);
    })
    .catch(err => res.status(400).json({ message: '400', err }));
}
// Create new player
// addNew(req, res, next) {
//   const player = {
//     firstname: '',
//     team: '',
//   };
//   res.locals.player = player;
//   next();
// },

function createPlayer(req, res) {
  const playerData = req.body;
  db.createPlayer(playerData)
    .then((player) => {
      res.json({
        message: 'ok',
        data: { player },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
}

function updatePlayer(req, res) {
  db.updatePlayer(req.body, req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(400).json({ message: '400', err }));
}

function deletePlayer(req, res) {
  db.deletePlayer(req.params.id)
    .then(() => {
      res.json({ message: 'ok' });
    });
}

module.exports = {
  showAll,
  showOne,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
