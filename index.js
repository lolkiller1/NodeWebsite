const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

import Clock from './clock.js';
const clock = new Clock();

var homePage = function(req, res) {
	res.send('<h1>Home</h1><p>Clock says ' + clock.getNum() + '</p>');
	console.log("Sent home to " + req.ip);
}

app.get('/', (req, res) => {
	homePage(req, res);
});

app.get('/home', (req, res) => {
	homePage(req, res);
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});