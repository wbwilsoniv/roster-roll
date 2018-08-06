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

    destory(req, res, next) {
        const { id } = req.params;
        playerModel.delete(id)
        .then((players) => next())
        .catch(err => next(err));
    },
};