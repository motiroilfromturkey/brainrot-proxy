// server.js
const express = require("express");
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));
const app = express();

const PORT = process.env.PORT || 3000;
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
