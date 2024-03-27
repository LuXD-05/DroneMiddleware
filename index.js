'use strict';

const http = require('http');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    
});

//#region POST - droneRequests

app.post('/sensor', async (req, res) => {
    const { sensor } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.post('/coordinates', async (req, res) => {
    const { x, y } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.post('/temperature', async (req, res) => {
    const { temperature } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.post('/pressure', async (req, res) => {
    const { pressure } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.post('/height', async (req, res) => {
    const { height } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.post('/speed', async (req, res) => {
    const { speed } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.post('/camera', async (req, res) => {
    const { image } = req.body;

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

//#endregion

//#region GET - clientRequests

app.get('/sensor', async (req, res) => {


    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.get('/coordinates', async (req, res) => {
    

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.get('/temperature', async (req, res) => {
    

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.get('/pressure', async (req, res) => {
    

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.get('/height', async (req, res) => {
    

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.get('/speed', async (req, res) => {
    

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

app.get('/camera', async (req, res) => {
    

    var status = null;
    var result = { };

    try {
        
    } catch (error) {
        
    } finally {
        res.status(status).send(result);
    }
});

//#endregion


var httpPort = 3001;
const httpServer = http.createServer(app);
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
