require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DATABASE}`, { useMongoClient: true });

const db = mongoose.connection;
db.on('error', (err) => {console.error(err)})
let Blog, blogSchema;
db.once('open', function() {
  blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    updatedAt: Date,
    createdAt: Date
  })

  Blog = mongoose.model('Blog', blogSchema);
})


const app = express();

// const blogFile = fs.readFileSync('./seeds/blogs.json', 'utf-8')
// const blogArray = JSON.parse(blogFile);

app.use(morgan('combined'));

// app.use('/static', express.static(path.join(__dirname), 'public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use(bodyParser.json())

app.engine('pug', require('pug').__express)

app.set('views', 'views');

app.set('view engine', 'pug');

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'pink',
  'teal'
]
const sampleColor = () => {
  const randomIdx = Math.floor(Math.random() * colors.length)
  return colors[randomIdx]
}
const addColorToReq = (req, res, next) => {
  // check if this is the first time middleware is invoked
  if (req.colors instanceof Array) {
    // previous middleware has set a 'colors' property
    // Note: It's the same request object!
    req.colors.push(sampleColor())
  } else {
    req.colors = [sampleColor()]
  }
  // invoking next ensures our following middleware will be run
  next()
}

// we could also pass an array containing all middlewares as our second argument. Try it!
app.get(
  '/three-colors',
  addColorToReq,
  addColorToReq,
  addColorToReq,
  (req, res) => {
    res.end(req.colors.join(', '))
  }
)

app.get('/', (req, res) => {
  Blog.find( (err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(blogs);
      res.render('index', {blogs});
    }
  })
});

app.get('/new', (req,res) => {
  res.render('new');
});

app.post('/', (req, res) => {
  const blog = {...req.body, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now())}
  const newBlog = new Blog(req.body);

  newBlog.save( err => {
    if (err) {
      console.log(err)
    } else {
      console.log('saved!')
    }
  });
  res.redirect('/')
});

app.get('/:info', (req, res) => {
  res.end(req.params.info);
});

app.put('/:info', (req, res) => {
  res.send(JSON.stringify(req.body, null, 2));  
})

app.delete('/:info', (req, res) => {
  res.send('DELETE REQUEST');
})

app.listen(process.env.PORT, () => console.log(`i am listening on port ${process.env.PORT}`));