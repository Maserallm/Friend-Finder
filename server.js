const express = require("express");
const path = require("path");

const app = express();

let PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT);
});
