const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

const apiUrl = 'https://ghc-applications-api.vercel.app/'

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await axios.get(apiUrl);
    res.json(todos.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving todos" });
  }
});

// Create a todo
app.post('/todos', async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = await axios.get(apiUrl).todo.create({
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
    const updatedTodo = await axios.get(apiUrl).todo.update({
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
    await axios.get(apiUrl).todo.delete({ where: { id } });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting todo" });
  }
});

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

