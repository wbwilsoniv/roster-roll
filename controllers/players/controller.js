const playerModel = require('../../models/players');

module.exports = {
    index(req, res, next) {
        playerModel.findAll()
          .then((players) => {
              res.locals.players = players;
              next();
          })
          .catch(err => next(err));
    },
};