"use client";

import type { UserInfo } from "@/fake-apis/getUserInfo";
import type { ReactNode } from "react";

interface Props {
  user: UserInfo;
  todoNodes: ReactNode;
}

export default function TodosClient({ user, todoNodes }: Props) {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
        {user && <p>Hello, {user.firstName}!</p>}
      </div>

      <h1 className="text-4xl text-center uppercase">Todo List</h1>
      <ul>{todoNodes}</ul>
    </div>
  );
}
