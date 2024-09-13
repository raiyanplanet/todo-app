import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

interface Todo {
  text: string;
  category: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string, category: string) => {
    const newTodo = { text, category, completed: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (index: number, newText: string) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-custom p-6 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">
          My Beautiful Todo List
        </h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
