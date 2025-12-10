import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AloKingz - Landing 2 | Social Gaming & Leaderboards",
  description:
    "Compete with the best players worldwide. Rise through the ranks, earn badges, and claim your spot on the leaderboard!",
  openGraph: {
    title: "AloKingz - Join the Elite Players",
    description:
      "Compete with players worldwide, join tournaments, and climb the leaderboards to become the ultimate champion!",
    type: "website",
  },
};

export default function Landing2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

