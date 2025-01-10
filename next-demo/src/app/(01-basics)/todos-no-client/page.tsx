import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import TodosPageContent from "./page-content";

export default async function Todos() {
  const [user, todos] = await Promise.all([getUserInfo(), getTodos()]);

  return <TodosPageContent user={user} todos={todos} />;
}
