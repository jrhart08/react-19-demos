import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-8 border-b border-black/10 flex items-center justify-between gap-16">
          <h1 className="text-2xl">Examples</h1>
          <ul className="flex-grow flex gap-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/todos">Basic</a>
            </li>
            <li>
              <a href="/todos-loading">Loading</a>
            </li>
            <li>
              <a href="/todos-suspense">Suspense</a>
            </li>
            <li>
              <a href="/todos-data-streaming">Data Streaming</a>
            </li>
            <li>
              <a href="/todos-hooks">Hooks</a>
            </li>
            <li>
              <a href="/todos-no-client">No client code</a>
            </li>
            <li>
              <a href="/todos-server-functions">Server Functions</a>
            </li>
            <li>
              <a href="/todos-server-functions-inline">
                Server Functions (Inline)
              </a>
            </li>
          </ul>
        </header>
        <main className="container mx-auto my-8">{children}</main>
      </body>
    </html>
  );
}
