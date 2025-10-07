import Link from "next/link";

const footerLinks = [
  { label: "Docs", href: "/features" },
  { label: "API Demo", href: "/api-demo" },
  { label: "Support", href: "/contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Career Compass. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
