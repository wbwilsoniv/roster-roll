const express = require('express');

const playerController = require('../controllers/players/controller');
const playerRouter = express.Router();


playerRouter.route('/')
  .get(playerController.index, (req, res) => res.json(res.locals.players));

module.exports = playerRouter;