"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      link.href.replace("#", ""),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/5 bg-near-black/85 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="relative z-10 flex shrink-0 items-center gap-3"
            onClick={handleNavClick}
          >
            <BrandLogo height={64} priority className="px-0.5" />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:text-white",
                      activeSection === id
                        ? "text-kreeda-blue"
                        : "text-muted-gray",
                    )}
                  >
                    {link.label}
                    {activeSection === id && (
                      <span className="absolute -bottom-2 left-0 h-px w-full bg-kreeda-blue" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button asChild variant="primary" size="sm">
              <Link href="#contact" data-cursor data-cursor-label="GO">
                START A PROJECT
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/10 text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-near-black/98 backdrop-blur-xl transition-all duration-500 lg:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-1 flex-col justify-center px-8 pt-20">
          <ul className="space-y-6">
            {NAV_LINKS.map((link, i) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      "block text-3xl font-medium tracking-tight transition-colors",
                      activeSection === id ? "text-kreeda-blue" : "text-white",
                    )}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="mr-4 font-mono text-xs text-muted-gray">
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-12">
            <Button asChild variant="primary" className="w-full">
              <Link href="#contact" onClick={handleNavClick}>
                START A PROJECT
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
