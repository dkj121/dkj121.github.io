import type { Metadata } from "next";
import "./globals.css";
import { ProfileFooter } from "@/components/profile-footer";

export const metadata: Metadata = {
	title: "dkj121",
	description: "dkj121's blog",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="zh-CN">
			<body className="min-h-[100dvh]">
				{children}
				<ProfileFooter />
			</body>
		</html>
	);
}
