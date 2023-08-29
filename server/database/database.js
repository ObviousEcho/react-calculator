const mysql = require("mysql2");
require("dotenv").config();

let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the memory_db database`);
});

exports.databaseConnection = db;
