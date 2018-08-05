const app = require('express')();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const playerRouter = require('./routes/playerRouter');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.set('view engine', 'ejs');

app.use('/players', playerRouter);

app.listen(PORT, () => console.log(`Listening on port: ${3000}`));