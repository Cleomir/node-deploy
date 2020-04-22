const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
