import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { HealthStatus, ModelInfo } from "@/lib/api-client";

interface MetricsSectionProps {
  health: HealthStatus | null;
  modelInfo: ModelInfo | null;
  careers: string[] | null;
}

const fallbackCareers = [
  "Data Scientist",
  "Software Engineer",
  "Product Manager",
  "UX Designer"
];

export function MetricsSection({ health, modelInfo, careers }: MetricsSectionProps) {
  const statusLabel = health?.status ?? "checking";
  const modelLoaded = health?.model_loaded ?? false;
  const modelVersion =
    health?.model_version ?? modelInfo?.version ?? "1.0";
  const availableCareers = careers ?? fallbackCareers;
  const careerHelper = availableCareers.slice(0, 3).join(" • ");

  const items = [
    {
      label: "API status",
      value: statusLabel === "healthy" ? "Healthy" : statusLabel,
      helper: modelLoaded
        ? `Model ${modelVersion} loaded`
        : "Model warming up"
    },
    {
      label: "Career library",
      value: `${availableCareers.length} roles`,
      helper: careerHelper ? `${careerHelper}${availableCareers.length > 3 ? " +" : ""}` : "Roles pending"
    },
    {
      label: "Feature signals",
      value: `${modelInfo?.feature_count ?? 24} features`,
      helper: "Skills • interests • personality"
    },
    {
      label: "Model engine",
      value: modelInfo?.model_name ? formatModelName(modelInfo.model_name) : "Random forest",
      helper: `Version ${modelVersion}`
    }
  ];

  return (
    <section className="py-14">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <Card key={item.label} className="border-white/5 bg-gradient-to-br from-white/10 to-transparent">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <span className="text-3xl font-semibold text-foreground">{item.value}</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.helper}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function formatModelName(value: string) {
  return value
    .split(/[\s-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
