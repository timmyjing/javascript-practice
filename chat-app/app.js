const express = require('express');
const app = express();
const http = require('http').Server(app);
const chatServer = require('./lib/chatServer');

const server = chatServer.listen(http);

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html'));

http.listen(3000, () => console.log('Listening on Port 3000'));