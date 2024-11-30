import React from "react";
import TodoList from "./TodoList.jsx";
import ThemeToggle from "./toggle-theme.jsx";
import {useTheme} from "../../context/theme.jsx";

const TodoApp = () => {
  const { darkTheme } = useTheme();

  return (
    <div
      className={`p-5 flex flex-col items-center justify-center min-h-screen ${
        darkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <ThemeToggle />
      <div className="mx-autow max-w-md">
        <h1 className="text-xl font-bold mb-4">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;