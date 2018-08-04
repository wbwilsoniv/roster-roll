const gameModel = require('../../models/players');

module.exports = {
  index(req, res, next) {
      gameModel.findAll()
      .then((games) => {
        res.locals.games = games;
        next();
    })
    .catch(err => next(err));
  },
};