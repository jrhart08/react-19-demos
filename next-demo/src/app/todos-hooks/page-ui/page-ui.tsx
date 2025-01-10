"use client";

import { useEffect, useMemo, useState } from "react";
import { PagePropsContext, type PageProps } from "./context";
import { Greeting } from "./greeting";
import { TodoList } from "./todo-list";

export function PageUi(props: PageProps) {
  const [text, setText] = useState("stateful text");
  const memoizedValue = useMemo(() => "I'm memoized!", []);

  useEffect(() => {
    console.log("I run only on the client!");
    setTimeout(() => {
      setText("stateful text (updated!)");
    }, 3000);
  }, []);

  return (
    <PagePropsContext value={props}>
      <Greeting />
      <div>
        Stateful text value: <span className="text-red-500">{text}</span>
      </div>
      <div>
        Memoized value: <span className="text-blue-500">{memoizedValue}</span>
      </div>
      <TodoList />
    </PagePropsContext>
  );
}
