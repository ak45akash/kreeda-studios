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
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again or email us directly.",
  );
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (status === "success" || status === "error") setStatus("idle");
  };

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
    else if (form.message.trim().length < 10) {
      next.message = "Please share a bit more detail (at least 10 characters)";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot: silent no-op for bots.
    if (form.website.trim()) {
      setStatus("success");
      setForm(initialForm);
      return;
    }

    setStatus("loading");
    setErrorMessage(
      "Something went wrong. Please try again or email us directly.",
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          projectType: form.projectType,
          budget: form.budget || undefined,
          message: form.message.trim(),
          website: form.website,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  const inputClass = cn(
    "w-full border border-white/10 bg-dark-surface/50 px-4 py-3 text-sm text-white placeholder:text-muted-gray/50",
    "transition-colors focus:border-kreeda-blue focus:outline-none focus:ring-1 focus:ring-kreeda-blue",
  );

  const selectClass = cn(
    inputClass,
    "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10",
    "[color-scheme:dark]",
  );

  return (
    <section id="contact" className="relative bg-deep-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="08 / CONTACT"
          eyebrow="Contact"
          title="START A PROJECT"
          subtitle="Creative production or web development — tell us what you need."
        />

        <Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative hidden min-h-[420px] overflow-hidden border border-white/10 lg:block">
              <CoverImage
                src="/images/contact.jpg"
                alt="Modern development workspace"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/30 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm text-muted-gray">
                Share the brief. We&apos;ll help shape cinematic work or a
                production-ready web build.
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
                  <p>{errorMessage}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
                noValidate
              >
                {/* Honeypot — visually and semantically hidden */}
                <div
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
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
                      autoComplete="name"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
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
                      autoComplete="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
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
                    autoComplete="organization"
                    className={inputClass}
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                  />
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
                      className={selectClass}
                      value={form.projectType}
                      onChange={(e) =>
                        updateField("projectType", e.target.value)
                      }
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="" className="bg-near-black text-white">
                        Select type
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-near-black text-white"
                        >
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
                      className={selectClass}
                      value={form.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                    >
                      <option value="" className="bg-near-black text-white">
                        Select range
                      </option>
                      {BUDGET_RANGES.map((range) => (
                        <option
                          key={range}
                          value={range}
                          className="bg-near-black text-white"
                        >
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
                    className={cn(inputClass, "min-h-[120px] resize-y")}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
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
