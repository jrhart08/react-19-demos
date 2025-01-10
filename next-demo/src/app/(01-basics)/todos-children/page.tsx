import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import TodosClient from "./page.client";

export default async function Todos() {
  const [user, todos] = await Promise.all([getUserInfo(), getTodos()]);

  return <TodosClient user={user} todos={todos} />;
}
