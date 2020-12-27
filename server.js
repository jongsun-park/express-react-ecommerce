const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 9000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./client/build"));

app.listen(port, () =>
  console.log(`Server is running at http://127.0.0.1:${port}`)
);
