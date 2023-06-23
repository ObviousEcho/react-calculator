const express = require("express");
const router = express.Router();

const db = require("../database/database").databaseConnection;

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

// router.post("/", (req, res) => {
//   console.log(`success`);
//   const params = req.body.memory_slot;
//   const sql = `INSERT INTO memory (memory_slot) VALUES (?)`;

//   if (params) {
//     db.query(sql, params, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: `Success`,
//         data: rows,
//       });
//     });
//   } else {
//     res.status(500).json("Error in saving to memory!");
//   }
// });

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

// router.delete("/", (req, res) => {
//   const sql = `DELETE FROM memory WHERE id = 1`;
//   db.query(sql, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     }
//     res.json({ message: "Deleted" });
//   });
// });

module.exports = router;
