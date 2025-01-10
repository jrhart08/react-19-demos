import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import { format } from "date-fns";

export default async function Todos() {
  const [user, todos] = await Promise.all([getUserInfo(), getTodos()]);
  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <span>{todo.text}</span>
    </li>
  ));

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center">Demo - Basic Server Components</h1>
        {user && <p>Hello, {user.firstName}!</p>}
      </div>

      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>{todoListItems}</ul>
    </div>
  );
}
