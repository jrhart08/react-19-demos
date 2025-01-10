import { addDays } from "date-fns";
import { sleep } from "./_sleep";

export interface TodoDto {
  id: string;
  timestamp: string;
  text: string;
}

export async function getTodos(): Promise<TodoDto[]> {
  await sleep(3000);

  const today = new Date();

  return Array.from({ length: 10 }).map((_, i) => ({
    id: `todo-${i}`,
    timestamp: addDays(today, i - 10).toUTCString(),
    text: `Todo Item ${i}`,
  }));
}
