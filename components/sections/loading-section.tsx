import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSectionProps {
  headline?: string;
}

export function LoadingSection({ headline }: LoadingSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 px-4">
        {headline && (
          <Skeleton className="h-6 w-48 bg-white/10" aria-label={`${headline} placeholder`} />
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-40 rounded-3xl bg-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
