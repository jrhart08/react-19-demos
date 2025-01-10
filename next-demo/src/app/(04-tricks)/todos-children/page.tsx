import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import TodosClient from "./page.client";

export default async function Todos() {
  const [user, todos] = await Promise.all([getUserInfo(0), getTodos(0)]);

  return <TodosClient user={user} todos={todos} />;
}
