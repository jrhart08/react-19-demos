import type { GetServerSideProps } from "next";

import { getTodos, TodoDto } from "@/fake-apis/getTodos";
import { getUserInfo, UserInfo } from "@/fake-apis/getUserInfo";
import { format } from "date-fns";

interface Props {
  user: UserInfo;
  todos: TodoDto[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const [user, todos] = await Promise.all([getUserInfo(), getTodos()]);

  return {
    props: {
      user,
      todos,
    },
  };
};

export default function Todos({ user, todos }: Props) {
  const todoListItems = todos.map((todo) => (
    <li key={todo.id} className="flex flex-col gap-2 border rounded mb-4 p-4">
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
