// module.exports = {
//   showAll(req, res) {
//     res.format({
//       html() {
//         res.render('../views/players/showAll');
//       },
//       json() {
//         res.json(res.locals.players);
//       },
//     });
//   },

//   showOne(req, res) {
//     res.render('../views/players/showOne');
//   },

//   showNew(req, res) {
//     res.render('../views/players/showNew');
//   },

//   showEdit(req, res) {
//     res.render('../views/players/showEdit');
//   },
//   // redirects to show all players after creating new player
//   handleCreate(req, res) {
//     res.redirect('/players');
//   },
//   // redirects to show players after edit is complete.
//   handleUpdate(req, res) {
//     res.redirect('/players');
//   },
//   // WIP redirects to show all players after player is deleted
//   handleDestroy(req, res) {
//     res.redirect('/players');
//   },

//   show404(req, res) {
//     res.send(404);
//   },
// };
