'use strict';

const http = require('http');
const express = require('express');
const app = express();

app.get('/', async function(req, res) {
    
});

app.get('/sensor', async function(req, res) {
    
});

app.get('/coordinates', async function(req, res) {
    
});

app.get('/temperature', async function(req, res) {
    
});

app.get('/pressure', async function(req, res) {
    
});

app.get('/height', async function(req, res) {
    
});

app.get('/speed', async function(req, res) {
    
});

app.get('/camera', async function(req, res) {
    
});

const httpServer = http.createServer(app);

var httpPort = 3001;
httpServer.listen(httpPort, () => {
    console.log('Server HTTP in ascolto sulla porta ' + httpPort);
});

// 0 e 1 sensori
// coord x flight controller 
// temp
// pressione
// altezza 
// velocità
// telecamera blob
