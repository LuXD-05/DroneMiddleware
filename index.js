'use strict';

const http = require('http');
const express = require('express');
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

    try {
        // Assign received values to global variables
        timestamp = body.timestamp;
        proximity = body.proximity;
        temperature = body.temperature;
        pressure = body.pressure;
        humidity = body.humidity;
        coordinates = body.coordinates; // { x: 45.845709, y: 8.709734 };
        height = body.height;
        speed = body.speed;
        image = body.image;
    } catch (error) {
        res.status(500).send({ error: error });
    }
    
    try {
        // test query execution
        var result = executeQuery('SELECT * FROM measurements', []);
        console.log(result);        
    } catch (error) {
        res.status(500).send({ error: error });
    }
    
    res.status(200).send(result);
});

//#endregion

//#region GET - clientRequests

app.get('/client', async (req, res) => {

    var result = { };

    try {
        // Assign to the resultro send the last received data from the drone
        result.timeStamp = timestamp;
        result.Proximity = proximity;
        result.Coordinates = coordinates;
        result.Temperature = temperature;
        result.Pressure = pressure;
        result.Height = height;
        result.Speed = speed;
        result.Image = image; // "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"
    } catch (error) {
        res.status(500).send({ error: error });
    }
        
    res.status(200).send(result);
});

//#endregion

var httpPort = 3001;
const httpServer = http.createServer(app);
httpServer.listen(httpPort, () => {
    console.log('Server HTTP in ascolto sulla porta ' + httpPort);
});