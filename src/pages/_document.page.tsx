import { Html, Head, Main, NextScript } from "next/document";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Document() {
  return (
    <Html className="h-full bg-gray-100" lang="en">
      <Head />
      <body className={`h-full`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
