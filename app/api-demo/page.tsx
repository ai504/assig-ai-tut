"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, PlayCircle, ArrowRightLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "@/lib/utils";
import { toast } from "sonner";
import { predictCareers, type CareerRecommendation } from "@/lib/api-client";

const educationLevels = ["High School", "Bachelor", "Master", "PhD"];

export default function ApiDemoPage() {
  const [skillsInput, setSkillsInput] = useState("Python, Communication");
  const [interestsInput, setInterestsInput] = useState("Technology, Management");
  const [education, setEducation] = useState<string>("Bachelor");
  const [experience, setExperience] = useState<number>(3);
  const [analytical, setAnalytical] = useState<number>(0.8);
  const [creative, setCreative] = useState<number>(0.5);
  const [social, setSocial] = useState<number>(0.7);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [meta, setMeta] = useState<{ modelVersion: string; timestamp: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const skills = skillsInput.split(",").map((item) => item.trim()).filter(Boolean);
    const interests = interestsInput.split(",").map((item) => item.trim()).filter(Boolean);

    if (skills.length === 0 || interests.length === 0) {
      toast.error("Please add at least one skill and one interest.");
      setIsLoading(false);
      return;
    }

    try {
      const payload = await predictCareers({
        skills,
        interests,
        personality: {
          analytical: Number(analytical),
          creative: Number(creative),
          social: Number(social)
        },
        education,
        experience: Number(experience)
      });

      setRecommendations(payload.careers ?? []);
      setMeta({ modelVersion: payload.model_version, timestamp: payload.timestamp });
      toast.success("Prediction generated successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to fetch prediction";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-16">
      <div className="space-y-4">
        <motion.h1
          className="text-4xl font-semibold text-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Test the Career Recommendation API
        </motion.h1>
        <p className="max-w-2xl text-muted-foreground">
          Submit a candidate profile to receive the top five career matches with calibrated confidence scores. Update <code className="rounded-md bg-white/10 px-2 py-1">NEXT_PUBLIC_API_BASE_URL</code> if you host your own backend.
        </p>
      </div>

      <motion.form
        className="glass-panel space-y-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Skills
            <textarea
              value={skillsInput}
              onChange={(event) => setSkillsInput(event.target.value)}
              className="min-h-[92px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="e.g. Python, Leadership"
              required
            />
            <span className="text-xs text-muted-foreground">Comma-separated list</span>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Interests
            <textarea
              value={interestsInput}
              onChange={(event) => setInterestsInput(event.target.value)}
              className="min-h-[92px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="e.g. Technology, Research"
              required
            />
            <span className="text-xs text-muted-foreground">Comma-separated list</span>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <label className="flex flex-col gap-2 text-sm">
            Education level
            <select
              value={education}
              onChange={(event) => setEducation(event.target.value)}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {educationLevels.map((level) => (
                <option key={level} value={level} className="bg-slate-900">
                  {level}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Experience (years)
            <input
              type="number"
              min={0}
              max={50}
              value={experience}
              onChange={(event) => setExperience(Number(event.target.value))}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="3"
            />
          </label>
          <div className="rounded-2xl border border-dashed border-white/10 bg-black/10 p-4 text-xs text-muted-foreground">
            <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
              <Info className="h-3.5 w-3.5" /> Personality tips
            </div>
            Use values between 0 and 1 to describe analytical, creative, and social traits. Mix extremes to explore different personas.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Analytical",
              value: analytical,
              setter: setAnalytical
            },
            {
              label: "Creative",
              value: creative,
              setter: setCreative
            },
            {
              label: "Social",
              value: social,
              setter: setSocial
            }
          ].map((trait) => (
            <label key={trait.label} className="glass-panel flex flex-col gap-3 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span>{trait.label}</span>
                <span className="text-xs text-muted-foreground">{trait.value.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={Math.round(trait.value * 100)}
                onChange={(event) => trait.setter(Number(event.target.value) / 100)}
                className="accent-primary"
              />
            </label>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Confidence scores sum to 100%
          </div>
          <span className="flex items-center gap-1">
            <ArrowRightLeft className="h-3.5 w-3.5" /> Endpoint: {API_BASE_URL}/predict
          </span>
        </div>

        <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto">
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <PlayCircle className="h-4 w-4" />
              Get recommendations
            </>
          )}
        </Button>
      </motion.form>

      <motion.div
        className="glass-panel space-y-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Predicted careers</h2>
            <p className="text-sm text-muted-foreground">
              {meta
                ? `Model v${meta.modelVersion} · ${new Date(meta.timestamp).toLocaleString()}`
                : "Submit the form to view recommendations."}
            </p>
          </div>
          {recommendations.length > 0 && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              {recommendations.length} matches returned
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {isLoading && (
            <div className="col-span-full rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-muted-foreground">
              Processing request...
            </div>
          )}
          {!isLoading && recommendations.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-white/10 bg-black/10 p-6 text-sm text-muted-foreground">
              Provide a profile above to reveal personalized career matches.
            </div>
          )}
          {recommendations.map((career) => (
            <div key={career.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{career.title}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {career.confidence.toFixed(1)}%
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Confidence indicates how strongly the model believes this role fits the supplied profile.
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
