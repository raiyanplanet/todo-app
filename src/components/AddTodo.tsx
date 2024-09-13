import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface AddTodoProps {
  addTodo: (text: string, category: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task, category);
      setTask("");
    }
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        className="flex-grow border-2 border-primary rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
      />
      <select
        className="border-2 bg-primary text-white rounded-none px-4 py-4  focus:outline-none"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button
        className="bg-primary text-white rounded-r-lg p-4 border-none outline-none hover:bg-primary-dark transition-colors"
        onClick={handleAdd}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddTodo;
