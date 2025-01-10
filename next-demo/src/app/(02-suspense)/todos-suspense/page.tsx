import { Skeleton } from "@/components/skeleton";
import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import { format } from "date-fns";
import { Suspense } from "react";

function TodoListSkeletons() {
  const skellies = Array.from({ length: 5 }).map((_, i) => (
    <li
      key={`skeleton-${i}`}
      className="flex flex-col gap-2 border rounded mb-4 p-4"
    >
      <Skeleton className="h-4 w-12" />
      <Skeleton className="h-4 w-20" />
    </li>
  ));

  return <>{skellies}</>;
}

async function TodoList() {
  const todos = await getTodos();

  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <span>{todo.text}</span>
    </li>
  ));

  return <>{todoListItems}</>;
}

export default async function TodosSuspense() {
  const user = await getUserInfo();

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
        {user && <p>Hello, {user.firstName}!</p>}
      </div>

      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>
        <Suspense fallback={<TodoListSkeletons />}>
          <TodoList />
        </Suspense>
      </ul>
    </div>
  );
}
