CREATE DATABASE purpledottodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  isComplete boolean
);