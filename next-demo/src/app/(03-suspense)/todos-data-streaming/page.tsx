import { Skeleton } from "@/components/skeleton";
import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import { Suspense } from "react";
import { TodoList } from "./todo-list.client";

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

export default async function TodosSuspense() {
  const user = await getUserInfo();
  const todosStream = getTodos();

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
        {user && <p>Hello, {user.firstName}!</p>}
      </div>

      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>
        <Suspense fallback={<TodoListSkeletons />}>
          <TodoList todosStream={todosStream} />
        </Suspense>
      </ul>
    </div>
  );
}
