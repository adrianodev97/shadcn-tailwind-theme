import type { Metadata } from "next";

export const metadata: Metadata = {
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
