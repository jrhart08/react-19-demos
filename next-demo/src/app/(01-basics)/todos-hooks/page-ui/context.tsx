import { TodoDto } from "@/fake-apis/getTodos";
import { UserInfo } from "@/fake-apis/getUserInfo";
import { createContext, useContext } from "react";

export interface PageProps {
  user: UserInfo;
  todos: TodoDto[];
}

export const PagePropsContext = createContext(null! as PageProps);

export const usePageProps = () => useContext(PagePropsContext);
