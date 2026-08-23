import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FOOTER_SERVICES, NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo height={72} className="mb-6 px-1" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-gray">
              Multidisciplinary creative studio combining art, animation, VFX,
              design and real-time technology.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] uppercase tracking-[0.3em] text-kreeda-blue">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-gray transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] uppercase tracking-[0.3em] text-kreeda-blue">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-gray transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] uppercase tracking-[0.3em] text-kreeda-blue">
              Get in Touch
            </h3>
            <p className="mb-6 text-sm text-muted-gray">
              Ready to start your next project? Tell us about your idea.
            </p>
            <Button asChild variant="secondary" size="sm">
              <Link href="#contact">
                CONTACT US
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-gray">
            © 2026 {SITE.name}. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-gray/60">
            Social links — configure when available
          </p>
        </div>
      </div>
    </footer>
  );
}
