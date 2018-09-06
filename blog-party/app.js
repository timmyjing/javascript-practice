const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const blogFile = fs.readFileSync('./seeds/blogs.json', 'utf-8')
const blogArray = JSON.parse(blogFile);

app.use(morgan('combined'));

// app.use('/static', express.static(path.join(__dirname), 'public'));

app.use(express.static('public'))

app.use(bodyParser.json())

app.engine('pug', require('pug').__express)

app.set('views', 'views');

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {blogs: blogArray}));

app.get('/post/:info', (req, res) => {
  res.end(req.params.info)
});

app.get('/post', (req,res) => {
  res.render('new')
});

app.post('/post', (req, res) => {
  console.log(req)
  res.send(JSON.stringify(req.body))
});

app.put('/post/:info', (req, res) => {
  res.send('PUT REQUEST TO HOMEPAGE');
})

app.delete('/post/:info', (req, res) => {
  res.send('DELETE REQUEST');
})


app.listen(process.env.PORT, () => console.log(`i am listening on port ${process.env.PORT}`));