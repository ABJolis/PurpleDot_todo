# PurpleDot_todo

## Description
I built this web-based todo app for a take-home challenge as part of the hiring process for a full-stack engineering role at Purple Dot.

## Getting Started
1. Clone this repo and navigate into the project folder:
```
git clone https://github.com/ABJolis/PurpleDot_todo.git
cd PurpleDot_todo
```

2. Make sure that [PostgreSQL](https://www.postgresql.org/) is installed and running on your local machine.

3. From inside the PurpleDot_todo project folder, use [npm](https://npmjs.com/) to install the necessary dependencies:
```
npm install
```

4. Navigate to the server directory and create a .env file to securely store your database information:
```
cd server
touch .env
```

5. Inside the .env file, type the following text with your database information in place where indicated [by brackets]:
```
PGUSER=[your PostgreSQL username]
PGPASSWORD=[your PostgreSQL password]
PGHOST=localhost
PGPORT=[your PostgreSQL database]
PGDATABASE=purpledottodo
```

6. From inside the PostgreSQL command line, create the project database by running:
```
CREATE DATABASE purpledottodo;
```

7. Connect to the project database from PostgreSQL:
```
\c purpledottodo
```

8. Inside the PostgreSQL database, create the todo table:
```
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  isComplete boolean
);
```

9. From inside the PurpleDot_todo server directory, start the server:
```
nodemon
```

10. Navigate to the PurpleDot_todo client directory and install the necessary client-side dependencies:
```
cd ../client
npm install
```

11. From inside the client folder, with the server running and connected to the database, start the client's development server:
```
npm start
```

12. Open a browser and navigate to http://localhost:3000, and start building your todo list!

## Roadmap
This app was built in two hours, per the instructions for the Purple Dot challenge. With more time, I would implement the following upgrades and improvements, in this order:

- Fix the 'isComplete' functionality for users to check off todo list-items as complete
- Fix the filtering functionality for users to filter their todo list-items by all/active/complete
- Replace the basic Bootstrap styling with a more attractive, bespoke UI

## Tech Stack
* Frontend:
  - [React](https://reactjs.org/)
  - [Bootstrap](https://getbootstrap.com/)

* Backend:
  - [Node](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [PostgreSQL](https://www.postgresql.org/)

## License
[MIT](https://choosealicense.com/licenses/mit/)