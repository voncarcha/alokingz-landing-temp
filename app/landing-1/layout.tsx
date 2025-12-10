import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AloKingz - Landing 1 | Classic Gaming Experience",
  description:
    "Experience the classic AloKingz gaming experience. Join millions of players and enjoy free-to-play games with stunning features.",
  openGraph: {
    title: "AloKingz - The Ultimate Free Play Gaming Experience",
    description:
      "Join millions of players worldwide. Collect rewards, compete with friends, and climb the leaderboards!",
    type: "website",
  },
};

export default function Landing1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

