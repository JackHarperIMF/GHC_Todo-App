import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleCompleted }) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted()}
      />
      {todo.title}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
