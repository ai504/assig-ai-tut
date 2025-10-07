"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-12 px-4 md:flex-row md:items-center">
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            Career intelligence platform
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Match talent with careers in minutes, not months.
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Career Compass pairs your backend API with a polished, responsive front-end so candidates can explore the Career Recommendation Engine instantly.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/api-demo" className="flex items-center gap-2">
                Try the live predictor
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/features">Explore capabilities</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Powered by Render-hosted API
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Frontend deploys on Vercel
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <div className="glass-panel hero-gradient relative mx-auto max-w-lg space-y-5 rounded-[32px] border border-white/10 bg-white/10 p-8 text-sm text-muted-foreground shadow-2xl">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/90">Live preview</p>
              <h3 className="mt-1 text-2xl font-semibold text-foreground">Career snapshot</h3>
            </div>
            <ul className="space-y-3">
              {[
                {
                  label: "Prediction time",
                  value: "< 400 ms",
                  trend: "p95"
                },
                {
                  label: "Confidence range",
                  value: "48% - 92%",
                  trend: "calibrated"
                },
                {
                  label: "Supported careers",
                  value: "8 roles",
                  trend: "expanding"
                }
              ].map((metric) => (
                <li key={metric.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    {metric.trend}
                  </span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-left">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Spotlight insight
              </p>
              <p className="mt-2 text-base text-foreground">
                “Career Compass gives students actionable guidance with transparent scores they can trust.”
              </p>
              <p className="mt-3 text-xs text-muted-foreground">Jordan Lee · Career Services Lead</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
