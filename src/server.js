const express = require("express");
const app = express();

// Basic test route
app.get("/status", (req, res) => {
  res.json({ status: "ok" });
});

// Homepage route
app.get("/", (req, res) => {
  res.send("This is the homepage!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});