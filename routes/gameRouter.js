const express = require('express');

const gameController = require('../controllers/games/controller');
const gameRouter = express.Router();

gameRouter.route('/')
  .get(gameController.index, (req, res) => res.json(res.locals.games));

module.exports = gameRouter;