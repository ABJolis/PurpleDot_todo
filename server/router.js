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

//get a specific todo
router.get('/todos/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    res.json(todo.rows[0]);
    console.log('request parameters, request ID: ', req.params)
  } catch (error) {
    console.error('error: ', error.message);
  }
})

//get only completed todos
router.get('/todos/status', async(req, res) => {
  try {
    const { isComplete } = req.body;
    const todo = await pool.query("SELECT * FROM todo WHERE isComplete = FALSE", [isComplete])
    res.json(todo.rows[0]);
  } catch (error) {
    console.error('error: ', error.message);
  }
})

//filter todos by isComplete status

//update a todo description
router.put('/todos/:id', async(req, res)=> {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2",
    [description, id]
    );
    res.json('Todo was updated!')
  } catch (error) {
    console.error('error: ', error.message);
  }
})

// update a todo's isComplete status

//delete a todo

module.exports = router;