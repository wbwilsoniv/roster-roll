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
    show404(req, res, next) {
        res.send(404);
    }
};