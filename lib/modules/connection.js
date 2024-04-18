'use strict'

const mysql = require('mysql');

function Do()
{
  const connection = mysql.createConnection({
    host: '192.168.1.57',
    user: 'innohub',
    password: 'innovationhub',
    database: 'leonardo',
  });

  // Connetti al database
  connection.connect((err) => {
    if (err) {
      console.error('Errore durante la connessione al database:', err);
      return;
    }
    console.log('Connesso al database MySQL.');
  });

  // Funzione per eseguire una query
function eseguiQuery(query, callback) {
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Errore durante l\'esecuzione della query:', error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

// Utilizzo della funzione per eseguire una query
const query = "SELECT * FROM measurements";
eseguiQuery(query, (error, results) => {
  if (error) {
    console.error('Errore:', error);
    return;
  }
  console.log('Risultati:', results);
});
}


//var connection;
//
// function createConnection() {
//     connection = mysql.createConnection({
//       host: '192.168.1.57',
//       user: 'innohub',
//       password: 'innovationhub',
//       database: 'leonardo',
//     })
//     return connection;
// }

// async function executeQuery(query, params) {
//   return new Promise((resolve, reject) => {
//     try {
//       connection.query(query), params, (sqlError, result) => {
//         if (!sqlError) {
//           if (result.length > 0) {
//             resolve(result);
//           } else {
//             resolve(null);
//           }
//         } else {
//           reject("Errore nell'esecuzione della query:\n" + error);
//         }
//       }
//     } catch (error) {
//       reject("Errore nell'esecuzione della query:\n" + error);
//     }
//   });
// }

//module.exports = { createConnection, executeQuery };
module.exports = { Do };