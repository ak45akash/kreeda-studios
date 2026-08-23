"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.projectType) next.projectType = "Select a project type";
    if (!form.message.trim()) next.message = "Message is required";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (form.website) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.projectType,
          budget: form.budget || undefined,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = cn(
    "w-full border border-white/10 bg-dark-surface/50 px-4 py-3 text-sm text-white placeholder:text-muted-gray/50",
    "transition-colors focus:border-kreeda-blue focus:outline-none focus:ring-1 focus:ring-kreeda-blue",
  );

  return (
    <section id="contact" className="relative bg-deep-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="08 / CONTACT"
          eyebrow="Contact"
          title="START A PROJECT"
          subtitle="Tell us about your vision."
        />

        <Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative hidden min-h-[420px] overflow-hidden border border-white/10 lg:block">
              <CoverImage
                src="/images/contact.jpg"
                alt="Creative production workspace"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/30 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm text-muted-gray">
                Share the brief. We&apos;ll help shape it into a production plan.
              </p>
            </div>
            <div>
            {status === "success" && (
              <div
                className="mb-8 flex items-center gap-3 border border-kreeda-blue/30 bg-kreeda-blue/10 p-4 text-sm text-white"
                role="status"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-kreeda-blue" />
                <p>
                  Thank you — your enquiry has been received. We&apos;ll be in
                  touch shortly.
                </p>
              </div>
            )}

            {status === "error" && (
              <div
                className="mb-8 flex items-center gap-3 border border-red-500/30 bg-red-500/10 p-4 text-sm text-white"
                role="alert"
              >
                <XCircle className="h-5 w-5 shrink-0 text-red-400" />
                <p>
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="absolute left-[-9999px]" aria-hidden>
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, website: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-gray"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={inputClass}
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-gray"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-gray"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={inputClass}
                  value={form.company}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, company: e.target.value }))
                  }
                />
                {errors.company && (
                  <p id="company-error" className="mt-1 text-xs text-red-400">
                    {errors.company}
                  </p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-gray"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className={cn(inputClass, "appearance-none")}
                    value={form.projectType}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        projectType: e.target.value,
                      }))
                    }
                    aria-invalid={!!errors.projectType}
                  >
                    <option value="">Select type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-gray"
                  >
                    Budget Range (optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className={cn(inputClass, "appearance-none")}
                    value={form.budget}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, budget: e.target.value }))
                    }
                  >
                    <option value="">Select range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-gray"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(inputClass, "resize-y min-h-[120px]")}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "loading"}
                showArrow={status !== "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  "SEND PROJECT ENQUIRY"
                )}
              </Button>
            </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
