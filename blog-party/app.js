const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('combined'));

app.engine('pug', require('pug').__express)

app.set('views', 'views');

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('hello', {variablePassed: 'jeff'}));

app.listen(process.env.PORT, () => console.log(`i am listening on port ${process.env.PORT}`));