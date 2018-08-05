module.exports = {
  showAll(req, res) {
    res.format({
        html() {
          res.render('../views/games/showAll');
        },
        json() {
            res.json(res.locals.games);
        }
    });
  }
};