const express = require('express');
const router = express.Router();
const db = require('../db');
const validate = require('../middleware/validateRequest');
const auth = require('../middleware/authMiddleware');
const requiredRole = require('../middleware/roleMiddleware');
 
router.get('/', async (req, res) => {
  const [resources] = await db.query('SELECT resource_id, resource_name, resource_type, location FROM resources');
  res.json(resources);
});
 
router.post('/', auth, requiredRole('admin'), validate(['resource_name', 'resource_type', 'location']), async (req, res) => {
  const { resource_name, resource_type, location } = req.body;

  const [result] = await db.query(
    'INSERT INTO resources (resource_name, resource_type, location) VALUES (?, ?, ?)',
    [resource_name, resource_type, location]
  );
 
  res.status(201).json({ resource_id: result.insertId });
  }
);

 
module.exports = router;