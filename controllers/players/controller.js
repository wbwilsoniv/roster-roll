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
    findOne(req, res, next) {
        const { id } = req.params;
        playerModel.findOne(id)
        .then((soda) => {
            res.locals.player = player;
            next();
        })
        .catch(err => next(err));
    }
};