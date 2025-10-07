"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    title: "Guidance with empathy",
    description:
      "We build tools that help counselors translate complex machine learning outputs into human conversations."
  },
  {
    title: "Trustworthy predictions",
    description:
      "Transparent scoring, validation rules, and health checks ensure recommendations stay dependable at scale."
  },
  {
    title: "Accessible experiences",
    description:
      "Career Compass is responsive, inclusive, and customizable so every learner can chart their next move confidently."
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-16">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">About Career Compass</h1>
        <p className="text-lg text-muted-foreground">
          We believe career exploration should be inspiring and data-driven. Our mission is to pair your Career Recommendation Engine with an interface people genuinely enjoy using.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="glass-panel h-full space-y-3 text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-foreground">{value.title}</h2>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-panel flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Join us on the journey</h2>
          <p className="text-sm text-muted-foreground">
            We partner with career services teams, bootcamps, and workforce programs to unlock personalized guidance for every learner.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/contact">Let’s work together</Link>
        </Button>
      </motion.div>
    </div>
  );
}
