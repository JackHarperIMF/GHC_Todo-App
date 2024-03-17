const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving todos" });
  }
});

// Create a todo
app.post('/todos', async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
      },
    });
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating todo" });
  }
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        completed,
      },
    });
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating todo" });
  }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.todo.delete({ where: { id } });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting todo" });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

