import { services } from "@/data/services";
import { FOOTER_SERVICES, SITE } from "@/lib/constants";

const organizationId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;

export function getStructuredData() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const organization = {
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/logo.png`,
    areaServed: "Worldwide",
    knowsAbout: [...FOOTER_SERVICES],
    ...(contactEmail
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: contactEmail,
            availableLanguage: ["English"],
          },
        }
      : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Studio Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@id": organizationId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}
