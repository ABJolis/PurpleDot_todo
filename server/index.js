const express = require("express");
const cors = require("cors");
const pool = require("./db");
const router = require("./router");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("Server has started on port 5000!");
});