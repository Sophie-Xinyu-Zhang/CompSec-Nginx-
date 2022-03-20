// Create an express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// Allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Create base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Deploy server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
