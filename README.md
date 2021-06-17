# PurpleDot_todo

## Getting Started

1. Clone this repo and navigate into the project folder:

```
git clone https://github.com/ABJolis/PurpleDot_todo.git
cd PurpleDot_todo
```

2. Make sure that [PostgreSQL](https://www.postgresql.org/) is installed and running on your local machine.

3. From inside the project folder, use [npm](https://npmjs.com/) to install the necessary dependencies:

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
PGPORT=5432
PGDATABASE=[name of database you're connected to in PostgreSQL]
```

6. From inside the server directory, start the server:

```
nodemon
```

