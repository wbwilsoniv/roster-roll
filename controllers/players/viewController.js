module.exports = {
    showAll(req, res) {
        res.format({
            html() {
                res.render('../views/players/showAll');
            },
            json() {
                res.json(res.locals.players);
            }
        });
    },
    showOne(req, res) {
        res.render('players/showOne');
    },
    show404(req, res) {
        res.send(404);
    },
};