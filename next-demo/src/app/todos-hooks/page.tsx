import { getTodos } from "@/fake-apis/getTodos";
import { getUserInfo } from "@/fake-apis/getUserInfo";
import { PageUi } from "./page-ui/page-ui";

export default async function Todos() {
  const [user, todos] = await Promise.all([getUserInfo(), getTodos()]);

  // // React hooks don't run in a server component lifecycle

  // useEffect(() => {
  //   console.log("Hello World!");
  // }, []);

  return <PageUi user={user} todos={todos} />;
}
