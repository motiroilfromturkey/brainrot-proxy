// server.js
const express = require("express");
const fetch = require("node-fetch"); // fetch library for proxying
const app = express();

// Use Render's assigned port
const PORT = process.env.PORT || 3000;

// Target Brainrot site
const TARGET = "https://brainrot.neocities.org";

// Proxy all GET requests
app.get("*", async (req, res) => {
  try {
    const url = TARGET + req.originalUrl;
    const response = await fetch(url);
    const body = await response.text();
    res.send(body);
  } catch (err) {
    res.status(500).send("Error fetching site: " + err.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Brainrot proxy running on port ${PORT}`);
});
