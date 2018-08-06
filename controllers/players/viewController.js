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
        res.render('/players/showOne');
    },

    showNew(req, res) {
        res.render('../views/players/showNew');
    },
    // redirects to created page for new player
    handleCreate(req, res) {
        res.redirect('/players');
    },

    handleDestroy(req, res) {
        res.redirect('/players');
    },

    show404(req, res) {
        res.send(404);
    },
};