'use strict';

const http = require('http');
const express = require('express');
const { log } = require('console');
const app = express();

const { connection, executeQuery } = require('./lib/modules/connection.js');

//#region Variables

var NE = null;
var NW = null; 
var SW = null;
var SE = null;
var timestamp = null;
var temperature = null;
var pressure = null;
var humidity = null;
var longitude = null;
var latitude = null;

var height = null;
var speed = null;
var image = 'RTZALjtoWDV6SngjTFZ3YkJVY2pWVCpIS2RlSmxKSUopLSNFPGFlUHBTRWRNZzU2TFdFQyxYWXdaOVZ1OTx6MiNYcz9rXT1BPmpTUDteJDKjPHpsN21We21rSEwtMWV4eGchd15DfSU4I3tqclJmWEtZblN2IVSjZDo0JkdiW0VPN19fWl0lTmZ9VC1AJj1PVT9Gbix3O0BjQjl4JDNiY0MtRFosck9VTSpGKFZhWntzdT0kcjdEQDs6ZENOKFJsMH1SX31mQHYoJVtUPjtBdyxfcHh9alRXTj19c0I7QCM/MmRQKX10bDI5dlg6Jm87XntdblM4ZGpPMCWjWkBAIy47Myo1USYoKiNwUSl0NmYqQjIlLkNnXqNAO3FHSmtVOCZuNSVVKmFSeEFhZEh7eUNBVXl5bDM7bFghW3AuXT5wdTNLQ3ZlZDdIUCUyODFYPmpAVUpKOmJleEg4WmtQI6NkSFp7MkVK';

//#endregion

//#region POST - droneRequests

// POST route from drone to server: 
// Sends sensors + saves them in db
app.post('/api/drone/sensori', async (req, res) => {
    const body = req.body;

    var result = { };

    try {
    
        log("DATI\n" + body);

    } catch (error) {
        res.status(500).send(result);
    }
    
    try {
        
        log("##### try db #####");
        
        //executeQuery('insert into leonardo', []);

        log("##### end try db #####");
        
    } catch (error) {
        res.status(500).send(result);
    }
    
    res.status(200).send(result);
});

//#endregion

//#region GET - clientRequests

app.get('/api/drone/sensori', async (req, res) => {
    // senaza img video
    var result = { };

    try {
        log("GET api/drone/sensori");

        result.ne = false;
        result.nw = false;
        result.sw = false;
        result.se = false;
        result.timestamp = '';
        result.temperature = 0;
        result.pressure = 0;
        result.humidity = 0;
        result.longitude = Math.floor(Math.random() * 180); //8.7097;
        result.latitude = Math.floor(Math.random() * 180); //45.8457;

        result.height = 0;
        result.speed = 0;
        result.image = image;

    } catch (error) {
        res.status(500).error();
    } finally {
        res.status(200).send(result);
    }
});

app.get('/api/drone/stream', async (req, res) => {
    // immagine/video
    var result = { };

    try {
        
        log("GET api/drone/stream");

        result.image = image;

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