# Todo App with Express.js, Prisma, PostgreSQL and ReactJS
This project demonstrates a basic Todo application with CRUD (Create, Read, Update, Delete) functionalities. It utilizes the following technologies:

## Backend:
-Express.js: Web framework for building Node.js applications.
-Prisma: ORM (Object-Relational Mapper) for interacting with a PostgreSQL database.
-PostgreSQL: Relational database management system.

## Frontend:
-ReactJS: JavaScript library for building user interfaces.
-Axios: Promise-based HTTP client for making API requests.

## Challenges faced:
- This program is still not completely functional. Check the setup section details to install
- There seems to be a problem with my database provider.
- Please do refer my FSWD_Project-3 which contains backend of a simple to-do list app using vscode extension thunderclient.

### Setup:
- clone this repo and install dependencies cd to-do && npm install
- Configure the database connection in .env file
- Run the app with npm start to check its functionality

## API Endpoints:
-GET /todos: Retrieve all todos
-POST /todos: Create a new todo
-PUT /todos/:id: Update a todo
-DELETE /todos/:id: Delete a todo

## Frontend Functionality:
-View a list of existing todos.
-Add new todos.
-Mark todos as completed/incomplete.
-Delete todos.
