const express = require('express');
const pool = require('./db');
const router = express.Router();

router.post("/todos", async(req, res) => {
  try {
    console.log("req.body: ", req.body);
  } catch (error) {
    console.error("error: ", error.message);
  }
})

//update a todo as complete

//get all todos

//get a specific todo

//update a todo description

//delete a todo

module.exports = router;