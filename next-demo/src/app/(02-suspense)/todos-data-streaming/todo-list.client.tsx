"use client";

import { TodoDto } from "@/fake-apis/getTodos";
import { format } from "date-fns";
import { use } from "react";

export function TodoList({ todosStream }: { todosStream: Promise<TodoDto[]> }) {
  const todos = use(todosStream);

  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <span>{todo.text}</span>
    </li>
  ));

  return <>{todoListItems}</>;
}
