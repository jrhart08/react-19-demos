import { sleep } from "./_sleep";

export interface UserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export async function getUserInfo(): Promise<UserInfo> {
  await sleep(1000);

  return {
    id: "user-1",
    email: "joseph.hart@improving.com",
    firstName: "Joseph",
    lastName: "Hart",
  };
}
