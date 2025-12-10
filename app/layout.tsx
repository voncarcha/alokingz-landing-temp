import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AloKingz - The Ultimate Free Play Gaming Experience",
  description: "Join AloKingz for the ultimate free-to-play gaming experience. Play exciting games, collect rewards, and climb the leaderboards!",
  keywords: ["AloKingz", "free play", "gaming", "casino games", "poker", "slots"],
  authors: [{ name: "AloKingz" }],
  openGraph: {
    title: "AloKingz - The Ultimate Free Play Gaming Experience",
    description: "Join AloKingz for the ultimate free-to-play gaming experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

