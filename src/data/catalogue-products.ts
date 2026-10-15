
import type { CatalogueProduct } from "@/components/sections/catalogue/ProductCard";

export const catalogueProducts: CatalogueProduct[] = [
  {
    id: "email-password-form",
    name: "Email + Password Form",
    slug: "email-password-form",
    category: "Authentication",
    description:
      "A customizable login form with live preview, theme controls and integration guidance.",
    price: 49,
    status: "available",
    icon: "security",
  },
  {
    id: "password-reset-form",
    name: "Password Reset Form",
    slug: "password-reset-form",
    category: "Authentication",
    description:
      "A password recovery interface designed for modern application workflows.",
    price: null,
    status: "coming-soon",
    icon: "security",
  },
  {
    id: "contact-form",
    name: "Contact Form",
    slug: "contact-form",
    category: "Forms",
    description:
      "A flexible contact form interface for business websites and digital products.",
    price: null,
    status: "coming-soon",
    icon: "mail",
  },
];
