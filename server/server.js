const express = require("express");
require("dotenv").config();
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the memory_db database.`)
);

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
