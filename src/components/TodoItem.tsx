import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

interface Todo {
  text: string;
  category: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  index: number;
  updateTodo: (index: number, newText: string) => void;
  deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  updateTodo,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-md transition hover:bg-gray-200">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-grow border border-primary rounded-lg p-2"
        />
      ) : (
        <span className="font-semibold">
          {todo.text}{" "}
          <span className="text-xs text-secondary">({todo.category})</span>
        </span>
      )}
      <div className="flex items-center space-x-3">
        {isEditing ? (
          <button
            className="text-green-500 hover:text-green-700"
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        ) : (
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setIsEditing(true)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTodo(index)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
