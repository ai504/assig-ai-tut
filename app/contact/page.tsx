"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent! We'll reach out shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Unable to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-16">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Contact the Career Compass team</h1>
        <p className="text-muted-foreground">
          Share your goals for career guidance and we’ll tailor a walkthrough of the hosted API integration and front-end toolkit for you.
        </p>
      </motion.div>

      <motion.form
        className="glass-panel space-y-5"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Your name"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="you@company.com"
              required
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm">
          How can we help?
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="min-h-[160px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Describe your project or questions..."
            required
          />
        </label>
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send message
            </>
          )}
        </Button>
      </motion.form>
    </div>
  );
}
