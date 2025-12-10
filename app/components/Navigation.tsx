"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/landing-1", label: "Landing 1" },
    { href: "/landing-2", label: "Landing 2" },
    { href: "/landing-3", label: "Landing 3" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo-alokingz.png"
                alt="AloKingz Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
            <span className="font-display text-2xl font-bold text-gradient-blue hidden sm:block">
              AloKingz
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-lg font-display text-sm font-medium uppercase tracking-wider
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-crimson-500/20 to-royal-500/20 text-crimson-300 border border-crimson-500/30"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="#play"
            className="hidden md:flex btn-primary !px-6 !py-3 !text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

