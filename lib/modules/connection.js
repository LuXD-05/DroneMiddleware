'use strict'

const mysql = require('mysql')

function createConnection() {
    const connection = mysql.createConnection({
      host: '192.168.7.147',
      user: 'innohub',
      password: 'innovationhub',
      database: 'leonardo',
    })
    return connection;
}

async function executeQuery(query, params) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query), params, (sqlError, result) => {
        if (!sqlError) {
          if (result.length > 0) {
            resolve(result);
          } else {
            resolve(null);
          }
        } else {
          reject("Errore nell'esecuzione della query:\n" + error);
        }
      }
    } catch (error) {
      reject("Errore nell'esecuzione della query:\n" + error);
    }
  });
}

module.exports = { createConnection, executeQuery };