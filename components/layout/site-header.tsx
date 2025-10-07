"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/api-demo", label: "API Demo" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <motion.span
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            CC
          </motion.span>
          Career Compass
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 text-sm backdrop-blur-lg md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                className="relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-flex items-center rounded-full px-4 py-2 font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button asChild size="sm" variant="ghost" className="hidden md:inline-flex">
            <Link href="/api-demo">Try the API</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
