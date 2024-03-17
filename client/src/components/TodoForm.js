import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title };
    await axios.post('/todos', newTodo);
    onAddTodo(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
