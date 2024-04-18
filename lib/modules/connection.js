'use strict'

const mysql = require('mysql');

const host = '192.168.1.57';
const user = 'innohub';
const password = 'innovationhub';
const database = 'leonardo';

// Creates the connection to the db
async function createConnection() {

    // Initializes connection to null
    var connection = null;

    return new Promise((resolve, reject) => {
        try {

            // Tries to create the connection
            connection = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database,
            })

        } catch (error) {

            // Sets a custom error message and returns the error
            error.customMessage +=
                `Errore nel tentativo di creazione della connessione a mysql, funzione \"createConnection()\".\n` +
                `Parametri: host = ${host}, user = ${user}, password = ${password}, database = ${database}\n`;
            reject(error);

        } finally {

            // Tries to connect to the db. returns the connection if succesful, otherwise the error
            connection.connect((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(connection);
                }
            });

        }
    })

    return connection;
}

// Executes a query
async function executeQuery(query, params = []) {
    try {

        // Creates the connection
        const connection = await createConnection();

        // Executes the query
        const result = await new Promise((resolve, reject) => {
            connection.query(query, params, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

    } catch (error) {
        throw error;
    } finally {
        return result;
    }
}

module.exports = { executeQuery };