const express = require('express');
const app = express();
const http = require('http').createServer(app);

const chatServer = require('./lib/chatServer');
chatServer.listen(http);

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index.html'));

http.listen(8000, () => console.log('Listening on Port 8000'));
