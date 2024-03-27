'use strict';

const http = require('http');
const express = require('express');
const { log } = require('console');
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

app.get('/client', async (req, res) => {

    var result = { };

    try {
        log("ok");

        result.Sensor = "";
        result.Coordinates = { x: 45.845709, y: 8.709734 };
        result.Temperature = 0;
        result.Pressure = 0;
        result.Height = 0;
        result.Speed = 0;
        result.Image = "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC";

    } catch (error) {
        log("errore");
        res.status(500).error();
    } finally {
        res.status(200).send(result);
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
