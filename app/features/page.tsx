import { FeatureGrid, type FeatureHighlight } from "@/components/sections/feature-grid";

export default function FeaturesPage() {
  const featureHighlights = [
    {
      id: "smart-profiles",
      title: "Smart profile capture",
      description:
        "Collect structured skills, interests, personality traits, education, and experience with validation baked in.",
      icon: "🧠",
      metric: "Schema-aligned inputs"
    },
    {
      id: "confidence-engine",
      title: "Confidence engine",
      description:
        "Surface the top five roles with percentages that always total 100, so advisors can explain every recommendation.",
      icon: "📊",
      metric: "Calibrated scoring"
    },
    {
      id: "career-insights",
      title: "Career insights",
      description:
        "Showcase eight foundational career paths with contextual messaging tailored to technical, creative, or analytical talent.",
      icon: "🗂️",
      metric: "8 curated paths"
    },
    {
      id: "api-toolkit",
      title: "API toolkit",
      description:
        "Leverage REST endpoints for health, model info, career libraries, and predictions directly from the hosted backend.",
      icon: "🧰",
      metric: "Docs & Swagger"
    },
    {
      id: "framer-motion",
      title: "Framer Motion UX",
      description:
        "Delight users with subtle micro-interactions, animated cards, and glassmorphism panels that feel premium on any device.",
      icon: "✨",
      metric: "60fps transitions"
    },
    {
      id: "deployment-ready",
      title: "Deployment ready",
      description:
        "Configured for Vercel with SEO tags, dark mode support, and environment variable hooks for your Render deployment.",
      icon: "🚀",
      metric: "Zero-config launch"
    }
  ] satisfies FeatureHighlight[];

  return (
    <div className="space-y-10 py-16">
      <section className="mx-auto w-full max-w-4xl space-y-6 px-4 text-center">
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Powerful capabilities, instantly accessible</h1>
        <p className="text-muted-foreground">
          Explore the modules that help your team move from API experimentation to student-ready experiences.
        </p>
      </section>
      <FeatureGrid features={featureHighlights} />
    </div>
  );
}
