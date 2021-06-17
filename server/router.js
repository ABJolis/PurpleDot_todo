const express = require('express');
const pool = require('./db');
const router = express.Router();

router.post("/todos", async(req, res) => {
  try {
    const { description, isComplete } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, isComplete) VALUES ($1, FALSE)",
    [description]
    );
    res.json(newTodo);
  } catch (error) {
    console.error('error: ', error.message)
  }
})

//update a todo as complete

//get all todos

//get a specific todo

//filter todos by isComplete status

//update a todo description

//delete a todo

module.exports = router;