//Importamos la clase Batabase Sync desde el modulo SQlite en nodeJS
import { DatabaseSync } from 'node:sqlite';
//Creamos una DB en memoria
const db = new DatabaseSync(":memory:");

//Ejecutas una sentencia sql para crear la tabla user
db.exec(`
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT 
    )
    `)


//Ejecutar una sentencia sql para crear la tabla de todos (tabla de tareas)
db.exec(`
CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_user INTEGER,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY (id_user) REFERENCES users (id)
    )
    `)

export default db;