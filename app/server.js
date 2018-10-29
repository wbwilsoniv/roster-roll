const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const playerRouter = require('./routes/playerRouter');
const gameRouter = require('./routes/gameRouter');

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}, in ${app.get('env')} mode.`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.use(cors());

app.use('/players', playerRouter);
app.use('/games', gameRouter);

app.get('/', (req, res) => {
  res.redirect('/players');
});

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Oops! Not found.' });
});
