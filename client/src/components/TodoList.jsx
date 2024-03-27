import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('/todos');
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/todos/${id}`);
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  const handleToggleCompleted = async (id, completed) => {
    await axios.put(`/todos/${id}`, { completed: !completed });
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            onToggleCompleted={() => handleToggleCompleted(todo.id, todo.completed)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
