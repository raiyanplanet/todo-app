import TodoItem from "./TodoItem";

interface Todo {
  text: string;
  category: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  updateTodo: (index: number, newText: string) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
