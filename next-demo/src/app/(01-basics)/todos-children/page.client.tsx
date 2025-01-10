"use client";

import type { TodoDto } from "@/fake-apis/getTodos";
import type { UserInfo } from "@/fake-apis/getUserInfo";
import { format } from "date-fns";
import { RehypeMarkdown } from "./rehype-markdown";

interface Props {
  user: UserInfo;
  todos: TodoDto[];
}

export default function TodosClient({ user, todos }: Props) {
  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <RehypeMarkdown>{todo.text}</RehypeMarkdown>
    </li>
  ));

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
        {user && <p>Hello, {user.firstName}!</p>}
      </div>

      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>{todoListItems}</ul>
    </div>
  );
}
