import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AloKingz - Landing 3 | Premium Gaming Experience",
  description:
    "Welcome to AloKingz - your journey to becoming the ultimate champion starts here. Experience premium free-to-play gaming.",
  openGraph: {
    title: "AloKingz - Welcome to the Royal Table",
    description:
      "Your journey to becoming the ultimate champion starts here. Free play, royal thrills!",
    type: "website",
  },
};

export default function Landing3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

