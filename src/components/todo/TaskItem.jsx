import React, { useState } from "react";

const TaskItem = ({ todoTask, onRemoveTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoTask);

  const saveEdit = () => {
    if (editText.trim() === "") return;
    onEditTask(editText);
    setIsEditing(false);
  };

  return (
    <li className="mb-2 pb-3 flex items-center justify-between rounded">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-2 border rounded text-gray-800"
        />
      ) : (
        <span>{todoTask}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="ml-2 px-2 py-1 rounded text-white bg-green-600 "
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={onRemoveTask}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;