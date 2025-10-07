"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  features: FeatureHighlight[];
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Built for modern career guidance teams
          </h2>
          <p className="text-muted-foreground">
            Combine interactive inputs, instant predictions, and polished visuals to deliver confidence-inspiring recommendations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className={cn("h-full border-white/10 bg-white/[0.04] p-6")}> 
                <CardHeader className="space-y-4 p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/80 to-purple-500/80 text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-0 pt-4">
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  {feature.metric && (
                    <p className="text-xs uppercase tracking-wide text-primary/80">
                      {feature.metric}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
