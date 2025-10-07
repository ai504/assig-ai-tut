import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="glass-panel space-y-4">
        <h1 className="text-4xl font-semibold text-foreground">Page not found</h1>
        <p className="text-muted-foreground">
          We couldn’t find the page you were looking for. Explore the platform or return to the dashboard.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/features">View features</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
