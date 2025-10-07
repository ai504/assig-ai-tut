import { Suspense } from "react";
import { HeroSection } from "@/components/sections/hero";
import { MetricsSection } from "@/components/sections/metrics";
import { FeatureGrid, type FeatureHighlight } from "@/components/sections/feature-grid";
import { getAvailableCareers, getHealthStatus, getModelInfo } from "@/lib/api-client";
import { LoadingSection } from "@/components/sections/loading-section";
import { CTASection } from "@/components/sections/cta-section";

async function MetricsWithData() {
  const [healthResult, careersResult, modelInfoResult] = await Promise.allSettled([
    getHealthStatus(),
    getAvailableCareers(),
    getModelInfo()
  ]);

  const health = healthResult.status === "fulfilled" ? healthResult.value : null;
  const careers = careersResult.status === "fulfilled" ? careersResult.value : null;
  const modelInfo = modelInfoResult.status === "fulfilled" ? modelInfoResult.value : null;

  if (healthResult.status === "rejected") {
    console.error("Failed to fetch health status", healthResult.reason);
  }
  if (careersResult.status === "rejected") {
    console.error("Failed to fetch careers", careersResult.reason);
  }
  if (modelInfoResult.status === "rejected") {
    console.error("Failed to fetch model info", modelInfoResult.reason);
  }

  return (
    <MetricsSection
      health={health}
      careers={careers?.careers ?? null}
      modelInfo={modelInfo}
    />
  );
}

const landingFeatures: FeatureHighlight[] = [
  {
    id: "personalized-guidance",
    title: "Personalized guidance",
    description:
      "Blend skills, interests, personality, and experience to surface careers that feel tailor-made for every learner.",
    icon: "🧭",
    metric: "Top 5 matches in seconds"
  },
  {
    id: "confidence-scoring",
    title: "Confidence scoring",
    description:
      "Understand why a role appears with calibrated confidence values and transparent scoring logic.",
    icon: "📈",
    metric: "Confidence sums to 100%"
  },
  {
    id: "career-library",
    title: "Career library",
    description:
      "Give candidates clarity with curated descriptions for tech, business, research, and creative career paths.",
    icon: "📚",
    metric: "8 core career tracks"
  },
  {
    id: "evaluation-tools",
    title: "Evaluation tools",
    description:
      "Prototype quickly with ready-to-run demo forms, sample personas, and detailed API documentation.",
    icon: "🧪",
    metric: "Docs & demo included"
  },
  {
    id: "education-aware",
    title: "Education aware",
    description:
      "Respect prerequisites with guardrails that validate education level and years of experience before predicting.",
    icon: "🎓",
    metric: "Validation baked in"
  },
  {
    id: "deploy-ready",
    title: "Deploy-ready",
    description:
      "Ship to Vercel in minutes with a responsive Next.js front-end tuned for the hosted Render API backend.",
    icon: "🚀",
    metric: "Optimized for Vercel"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <Suspense fallback={<LoadingSection headline="Loading metrics" />}>
        {/* @ts-expect-error Async Server Component */}
        <MetricsWithData />
      </Suspense>
      <FeatureGrid features={landingFeatures} />
      <CTASection />
    </div>
  );
}
