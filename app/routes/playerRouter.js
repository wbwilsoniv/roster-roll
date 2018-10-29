const express = require('express');

const playerController = require('../controllers/players/controller');

const playerRouter = express.Router();

playerRouter.route('/')
  .get(playerController.showAll)
  .post(playerController.createPlayer);

// playerRouter.get('/create').post(playerController.createPlayer);

// playerRouter.get('/:id/edit', playerController.findOne);

playerRouter.route('/:id')
  .get(playerController.showOne)
  .delete(playerController.deletePlayer)
  .put(playerController.updatePlayer);

module.exports = playerRouter;
