const db = require('../../models/games');

function showAll(req, res) {
  db.findAll()
    .then((games) => {
      res.json(games);
    })
    .catch(err => res.status(400).json({ message: '400', err }));
}

function showOne(req, res) {
  const { id } = req.params;
  db.findOne(id)
    .then((games) => {
      res.json(games);
    })
    .catch(err => res.status(400).json({ message: '400', err }));
}

function createGame(req, res) {
  const gameData = req.body;
  db.create(gameData)
    .then((game) => {
      res.json({
        message: 'ok',
        data: { game },
      });
    })
    .catch(err => res.status(400).json({ message: '400', err }));
}

function updateGame(req, res) {
  const { id } = req.params;
  const gameData = req.body;
  db.update(id, gameData)
    .then(game => res.json(game))
    .catch(err => res.status(400).json({ message: '400', err }));
}

function deleteGame(req, res) {
  const { id } = req.params;
  db.delete(id)
    .then(() => {
      res.json({ message: 'ok' });
    });
}

module.exports = {
  showAll,
  showOne,
  createGame,
  updateGame,
  deleteGame,
};
