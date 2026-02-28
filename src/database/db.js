const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco', err);
    } else {
        console.log('Banco conectado com sucesso.');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            status TEXT NOT NULL DEFAULT 'ativo',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;