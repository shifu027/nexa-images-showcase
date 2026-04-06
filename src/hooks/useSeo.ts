import { useEffect } from "react";

const BRAND = "Nexa Images";
const DEFAULT_TITLE = `${BRAND} — Stickers, Etiquetas & Presentes com Alma`;
const DEFAULT_DESCRIPTION = "Stickers, etiquetas e papelaria com ilustrações exclusivas, delicadas e acolhedoras. Capivaras, flores, livros e muito mais. Compre na Zazzle.";

function setMeta(property: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
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

    document.title = fullTitle;
    setMeta("description", desc);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", desc, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);

    if (canonical) {
      setMeta("og:url", canonical, true);
      setLink("canonical", canonical);
    } else {
      document.querySelector('link[rel="canonical"]')?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
    }

    if (image) {
      setMeta("og:image", image, true);
      setMeta("twitter:image", image);
    } else {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }

    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical, image, noindex]);
}
