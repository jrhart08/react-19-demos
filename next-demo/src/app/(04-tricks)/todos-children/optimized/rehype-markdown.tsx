import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function RehypeMarkdown({
  children,
}: {
  children: string | null | undefined;
}) {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>;
}
