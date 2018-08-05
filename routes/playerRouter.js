const express = require('express');

const playerController = require('../controllers/players/controller');
const viewController = require('../controllers/players/viewController');

const playerRouter = express.Router();

const showJSON = (req, res) => {
    res.json(res.locals.data);
};

playerRouter.route('/')
  .get(playerController.index, viewController.showAll, showJSON);

module.exports = playerRouter;