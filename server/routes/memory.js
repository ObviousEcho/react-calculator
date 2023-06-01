const express = require("express");
const router = express.Router();

const db = require("../database/database").databaseConnection;

router.get("/", (req, res) => {
  console.log(`request successfull `);

  const sql = `SELECT * FROM memory`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.put("/", (req, res) => {
  const { num } = req.body;

  if (num) {
    console.log(num);

    const response = {
      status: "Success",
      body: num,
    };

    res.json(response);
  } else {
    res.status(500).json("Error in saving to memory!");
  }
});

module.exports = router;
