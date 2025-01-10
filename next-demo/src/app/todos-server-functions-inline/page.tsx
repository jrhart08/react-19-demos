import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import { format } from "date-fns";

export default async function Todos() {
  async function addTodo() {
    "use server";

    console.log("adding todo (inline)");
  }

  const [user, todos] = await Promise.all([getUserInfo(0), getTodos(0)]);

  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
      <span>{format(todo.timestamp, "MMM d")}</span>
      <span>{todo.text}</span>
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

      <form action={addTodo}>
        <button
          type="submit"
          className="p-4 border rounded-full shadow-md text-white bg-blue-500"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
