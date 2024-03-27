'use strict';

const http = require('http');
const express = require('express');
const { log } = require('console');
const app = express();

const { connection, executeQuery } = require('../modules/connection.js');

//#region Variables

var timestamp = null;
var proximity = null;
var temperature = null;
var pressure = null;
var humidity = null;
var coordinates = null;
var height = null;
var speed = null;
var image = null;

//#endregion

//#region POST - droneRequests

app.post('/drone', async (req, res) => {
    const body = req.body;

    var result = { };

    try {
    
        log("ok");
        log(body);

    } catch (error) {
        res.status(500).send(result);
    }
    
    try {
        
        log("##### try db #####");
        
        executeQuery('', []);

        log("##### end try db #####");
        
    } catch (error) {
        res.status(500).send(result);
    }
    
    res.status(200).send(result);
});

//#endregion

//#region GET - clientRequests

app.get('/client', async (req, res) => {

    var result = { };

    try {
        log("ok");

        result.timeStamp = 
        result.Proximity = false;
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
