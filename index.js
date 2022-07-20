const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const clock = require("./clock")

var homePage = function(req, res) {
        res.send('<h1>Home</h1><p>clock says ' + clock.clock.getNum() + '</p>');
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
