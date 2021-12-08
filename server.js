const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');

const app = express();
let transactions = fs.readFileSync('db/transactions.json');

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/Transactions", (req, res) => {
  res.json({ data: JSON.parse(transactions) });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
