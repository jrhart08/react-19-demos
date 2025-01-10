import { format } from "date-fns";
import { usePageProps } from "./context";

export function TodoList() {
  const { todos } = usePageProps();

  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <span>{todo.text}</span>
    </li>
  ));

  return (
    <div>
      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>{todoListItems}</ul>
    </div>
  );
}
