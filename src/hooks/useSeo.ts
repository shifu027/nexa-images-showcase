import { useEffect } from "react";

const BRAND = "Nexa Images";
const DEFAULT_TITLE = `${BRAND} — Stickers, Etiquetas & Presentes com Alma`;
const DEFAULT_DESCRIPTION =
  "Stickers, etiquetas, papelaria e presentes com ilustrações delicadas, acolhedoras e autorais. Estética cozy, bookish e botanical, com finalização de compra na Zazzle.";
const SITE_URL = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function removeHeadTag(selector: string) {
  document.head.querySelector(selector)?.remove();
}

function toAbsoluteUrl(value?: string) {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  if (!SITE_URL) return "";
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}

export function useSeo({ title, description, canonical, image, noindex }: SeoProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BRAND}` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = toAbsoluteUrl(canonical);
    const imageUrl = toAbsoluteUrl(image);

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: desc });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow",
    });

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: desc });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: desc });

    if (canonicalUrl) {
      upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
      upsertLink("canonical", canonicalUrl);
    } else {
      removeHeadTag('meta[property="og:url"]');
      removeHeadTag('link[rel="canonical"]');
    }

    if (imageUrl) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    } else {
      removeHeadTag('meta[property="og:image"]');
      removeHeadTag('meta[name="twitter:image"]');
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical, image, noindex]);
}
