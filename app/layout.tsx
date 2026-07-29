import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dkj121",
  description: "home page of dkj121`s blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`dark bg-background font-sans antialiased`}>
			<body className="antialiased">
				{children}
			</body>
		</html>
  );
}
