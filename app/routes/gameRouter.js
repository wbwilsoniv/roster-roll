const express = require('express');

const gameController = require('../controllers/games/controller');

const gameRouter = express.Router();

gameRouter.route('/')
  .get(gameController.showAll)
  .post(gameController.createGame);

gameRouter.route('/:id')
  .get(gameController.showOne)
  .put(gameController.updateGame)
  .delete(gameController.deleteGame);
//   .delete(gameController.destory, viewController.handleDestroy);
module.exports = gameRouter;
