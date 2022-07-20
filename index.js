const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


def homePage = function(res) {
	res.send('<h1>Home</h1>');
}

app.get('/', (req, res) => {
	homePage(res);
});

app.get('/home', (req, res) => {
	homePage(res);
}

server.listen(3000, () => {
	console.log('listening on *:3000');
});