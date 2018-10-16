const playerModel = require('../../models/players');

module.exports = {
  // Index of all players
  index(req, res, next) {
    playerModel.findAll()
      .then((players) => {
        res.locals.players = players;
        next();
      })
      .catch(err => next(err));
  },
  // Gets 1 player by player id
  findOne(req, res, next) {
    const { id } = req.params;
    playerModel.findOne(id)
      .then((players) => {
        res.locals.players = players;
        next();
      })
      .catch(err => next(err));
  },
  // Create new player
  addNew(req, res, next) {
    const player = {
      name: '',
      team: '',
    };
    res.locals.player = player;
    next();
  },

  create(req, res, next) {
    const playerData = req.body;
    playerModel.create(playerData)
      .then((player) => {
        res.locals.player = player;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    const { id } = req.params;
    const playerData = req.body;
    playerModel.update(id, playerData)
      .then(() => next())
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    const { id } = req.params;
    playerModel.delete(id)
      .then(() => next())
      .catch(err => next(err));
  },
};
