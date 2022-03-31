const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'root',   
    password: 'sua_senha_aqui',
    host: 'localhost',
    database: 'StoreManager',
});

module.exports = connection;