"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <motion.div
          className="glass-panel relative overflow-hidden rounded-[32px] border border-primary/30 bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent p-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-24 right-12 h-48 w-48 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="absolute -bottom-28 left-6 h-52 w-52 rounded-full bg-purple-500/40 blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to launch your career guidance experience?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-blue-50/80">
              Connect the hosted Career Recommendation API, tailor the content, and ship a delightful decision tool to students and professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href="/contact">Book a strategy call</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
