import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import { format } from "date-fns";
import TodosClient from "./page.client";

export default async function Todos() {
  const [user, todos] = await Promise.all([getUserInfo(), getTodos()]);

  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <span>{todo.text}</span>
    </li>
  ));

  return <TodosClient user={user} todoNodes={todoListItems} />;
}
