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
        .then((players) => {
            res.locals.players = players;
            next();
        })
        .catch(err => next(err));
    },
    destory(req, res, next) {
        const { id } = req.params;
        playerModel.delete(id)
        .then((players) => next())
        .catch(err => next(err));
    },
};