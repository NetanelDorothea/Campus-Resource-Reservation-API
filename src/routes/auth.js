const express = require('express');
const router = express.Router();
const db = require('../db');
const validate = require('../middleware/validateRequest');
const bcrypt = require('bcrypt');
 

// -- ---------------------------------------------------
// -- Register
// -- ---------------------------------------------------
router.post('/register', validate(['full_name', 'email', 'password']), async (req, res) => {
  const { full_name, email, password} = req.body;

  // Rule: Password too short. Has to be minimum of 4 characters.
  if (password.length <= 3) {
    return res.status(400).json({ error: "Password too short. Has to be minimum of 4 characters."});
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
 
  const [result] = await db.query(
    'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)',
    [full_name, email, hashedPassword]
  );
 
  res.status(201).json({ user_id: result.insertId });
});

// -- ---------------------------------------------------
// -- Login
// -- ---------------------------------------------------
router.post('/login', validate(['email', 'password']), async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.query(
    'SELECT * FROM users where email = ?', [email]
  );

  if (rows.length === 0) {
    return res.status(400).json({ error: 'User not found' });
  }

  const user = rows[0]

  const valid = await bcrypt.compare(password, user.password);
 
   if (!valid) {
    return res.status(400).json({ error: 'Invalid password' });
  }
 
  res.json({
    message: 'Login successful',
    user: user
  });
});
