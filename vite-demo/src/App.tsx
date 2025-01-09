import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getTodos, TodoDto } from "./fake-apis/getTodos";
import { format } from "date-fns";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTodos().then((todos) => {
      console.log({ todos });
      setTodos(todos);
      setLoading(false);
    });
  }, []);

  const todoListItems = loading
    ? Array.from({ length: 5 }).map((_, i) => (
        <li
          key={`skeleton-${i}`}
          className="flex flex-col gap-2 border rounded mb-4"
        >
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
        </li>
      ))
    : todos.map((todo) => (
        <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4">
          <span>{format(todo.timestamp, "MMM d")}</span>
          <span>{todo.text}</span>
        </li>
      ));

  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h1 className="text-4xl text-center uppercase">Todo List</h1>
        <ul>{todoListItems}</ul>
      </div>
    </div>
  );
}

export default App;
