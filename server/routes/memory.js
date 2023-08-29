const express = require("express");
const router = express.Router();

const db = require("../config/connections").databaseConnection;

router.get("/", (req, res) => {
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
  const params = req.body.memory_slot;
  const sql = `UPDATE memory SET memory_slot=(?) WHERE id = 1`;

  if (params) {
    db.query(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: `Success`,
        data: rows,
      });
    });
  } else {
    res.status(500).json("Error in saving to memory!");
  }
});

module.exports = router;
