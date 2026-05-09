 module.exports = (requiredFields) => {
  return (req, res, next) => {
    // Check if body exists or is empty
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error: 'Request body is empty'
      });
    }

    // Check required fields
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: `Missing required field: ${field}`
        });
      }
    }
    next();
  };
};

