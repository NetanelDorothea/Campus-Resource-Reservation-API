const express = require('express');
const router = express.Router();
const db = require('../db');
const validate = require('../middleware/validateRequest');
const auth = require('../middleware/authMiddleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
 

// -- ---------------------------------------------------
// -- Register
// -- ---------------------------------------------------
router.post('/register', validate(['full_name', 'email', 'password']), async (req, res, next) => {
  try{
    const { full_name, email, password} = req.body;

    // Rule: Email already registered.
    const user = await findUserByEmail(email);
    if (user) {
      return res.status(400).json({ error: 'Email already registered' });
    }

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
    } catch (err) {
    next(err);
  }
});

// -- ---------------------------------------------------
// -- Login
// -- ---------------------------------------------------
router.post('/login', validate(['email', 'password']), async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
  
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ user_id: user.user_id, role: user.role }, 'your_secret_key');
  
    res.json({
      message: 'Login successful',
      token: token,
      user: user
    });
  } catch (err) {
    next(err);
  }
});

async function findUserByEmail(email) {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
}

module.exports = router;