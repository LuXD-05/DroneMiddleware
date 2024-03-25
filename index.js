'use strict';

const http = require('http');
const express = require('express');
const app = express();

app.get('/', async function(req, res) {
    res.redirect(`/home.html`);
});

const httpServer = http.createServer(app);

var httpPort = 3001;
httpServer.listen(httpPort, () => {
    console.log('Server HTTP in ascolto sulla porta ' + httpPort);
});