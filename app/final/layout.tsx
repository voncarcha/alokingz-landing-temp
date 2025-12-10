import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AloKingz - Final | The Ultimate Landing Page",
  description:
    "The final version of AloKingz landing page. Everything you need to win - packed with features, tournaments, and leaderboards!",
  openGraph: {
    title: "AloKingz - Final Landing Page",
    description:
      "Experience the ultimate free-to-play gaming platform. Join tournaments, compete with friends, and climb the leaderboards!",
    type: "website",
  },
};

export default function FinalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
