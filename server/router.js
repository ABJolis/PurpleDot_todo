const express = require('express');
const pool = require('./db');
const router = express.Router();

//post new todo
router.post("/todos", async(req, res) => {
  try {
    const { description, isComplete } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, isComplete) VALUES($1, FALSE) RETURNING *",
    [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error('error: ', error.message)
  }
});

//get all todos
router.get('/todos', async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)
  } catch (error) {
    console.error('error: ', error.message)
  }
});

//get all todos

//get a specific todo

//filter todos by isComplete status

//update a todo description

//delete a todo

module.exports = router;