import React, { useState } from "react";
import TaskItem from "./TaskItem.jsx";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodo([...todo, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const editTodo = (index, updateText) => {
    const updatedTodos = todo.map((todo, i) =>
      i === index ? updateText : todo
    );
    setTodo(updatedTodos);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="text-gray-700 p-2 border-solid rounded"
          placeholder="Add new todo"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todo.map((todo, index) => (
          <TaskItem
            key={index}
            todoTask={todo}
            onRemoveTask={() => removeTodo(index)}
            onEditTask={(updateText) => editTodo(index, updateText)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;