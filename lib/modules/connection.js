'use strict'

const mysql = require('mysql')

function createConnection() {
    const connection = mysql.createConnection({
      host: '192.168.7.147',
      user: 'root',
      password: 'Keynes2024!',
      database: '',
    })
    return connection;
}

module.exports = { createConnection };