const express = require('express');

const gameController = require('../controllers/games/controller');
const viewController = require('../controllers/games/viewController');

const gameRouter = express.Router();

const showJSON = (req, res) => {
  res.json(res.locals.data);
};

gameRouter.route('/')
  .get(gameController.index, viewController.showAll, showJSON);

module.exports = gameRouter;