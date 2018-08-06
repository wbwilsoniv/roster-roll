const express = require('express');

const playerController = require('../controllers/players/controller');
const viewController = require('../controllers/players/viewController');

const playerRouter = express.Router();

const showJSON = (req, res) => {
    res.json(res.locals.data);
};

// playerRouter.get(playerController.findOne);

// playerRouter.get('/new', viewController.showNew);

// playerRouter.route('/new')
// .get(playerController.index, viewController.handleCreate);

playerRouter.route('/')
.get(playerController.index, viewController.showAll, showJSON, viewController.show404)
.post(playerController.create, viewController.handleCreate);

playerRouter.get('/new', playerController.addNew, viewController.showNew);

playerRouter.route('/:id')
  .get(
      playerController.findOne,
      viewController.showOne,
      viewController.show404)
      .delete(playerController.destory, viewController.handleDestroy);

      module.exports = playerRouter;