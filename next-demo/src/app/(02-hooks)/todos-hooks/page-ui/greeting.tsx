import { usePageProps } from "./context";

export function Greeting() {
  const { user } = usePageProps();

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl text-center">Demo - Client-side Rendering</h1>
      {user && <p>Hello, {user.firstName}!</p>}
    </div>
  );
}
