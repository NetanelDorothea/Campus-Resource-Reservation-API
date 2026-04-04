const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/authMiddleware');
const validate = require('../middleware/validateRequest');
 
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM reservations');
    res.json(rows);
  } catch (err) {
    next(err);
  }
});
 
router.post('/', auth, validate(['user_id', 'resource_id', 'start_time', 'end_time']), async (req, res, next) => {
  try{
    const { user_id, resource_id, start_time, end_time } = req.body;

    // Rule: Reservations must have an end time after the start time
    if (new Date(end_time) <= new Date(start_time)) {
      return res.status(400).json({ error: "End time must be after start time" });
    }
  
    const [result] = await db.query(
      `INSERT INTO reservations (user_id, resource_id, start_time, end_time)
      VALUES (?, ?, ?, ?)`,
      [user_id, resource_id, start_time, end_time]
    );
  
    res.status(201).json({ reservation_id: result.insertId });
  } catch {
    next(err);
  }
});
 
module.exports = router;