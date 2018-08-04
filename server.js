const app = require('express')();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.listen(PORT, () => console.log(`Listening on port: ${3000}`));