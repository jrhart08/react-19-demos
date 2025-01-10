import { useEffect, useState } from "react";
import "./App.css";
import { getTodos, TodoDto } from "./fake-apis/getTodos";
import { format } from "date-fns";
import { Skeleton } from "./components/ui/skeleton";
import { getUserInfo, UserInfo } from "./fake-apis/getUserInfo";

function useTodos() {
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

  return [todos, loading] as const;
}

function useUser() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserInfo().then((userInfo) => {
      setUser(userInfo);
      setLoading(false);
    });
  });

  return [user, loading] as const;
}

function App() {
  const [todos, loadingTodos] = useTodos();
  const [user] = useUser();

  const todoListItems = loadingTodos
    ? Array.from({ length: 5 }).map((_, i) => (
        <li
          key={`skeleton-${i}`}
          className="flex flex-col gap-2 border rounded mb-4 p-4"
        >
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
        </li>
      ))
    : todos.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-col gap-2 border rounded mb-4 p-4"
        >
          <span>{format(todo.timestamp, "MMM d")}</span>
          <span>{todo.text}</span>
        </li>
      ));

  return (
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
        {user && <p>Hello, {user.firstName}!</p>}
      </div>

      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>{todoListItems}</ul>
    </div>
  );
}

export default App;
