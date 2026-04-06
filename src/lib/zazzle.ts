import { Product } from "@/data/types";

const ZAZZLE_STORE_BASE = import.meta.env.VITE_ZAZZLE_STORE_URL?.trim() || "";

export function isValidExternalUrl(url?: string | null): boolean {
  if (!url || !url.trim() || url.trim() === "#") return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function getZazzleStoreUrl() {
  return isValidExternalUrl(ZAZZLE_STORE_BASE) ? ZAZZLE_STORE_BASE.replace(/\/$/, "") : null;
}

export function resolveProductBuyUrl(product: Product): string | null {
  if (isValidExternalUrl(product.zazzleUrl)) return product.zazzleUrl;
  return getZazzleStoreUrl();
}

export function resolveProductPersonalizeUrl(product: Product): string | null {
  if (!product.customizable) return null;
  if (isValidExternalUrl(product.personalizeUrl)) return product.personalizeUrl;
  return null;
}

export function isFallbackStoreLink(product: Product) {
  return !isValidExternalUrl(product.zazzleUrl) && !!getZazzleStoreUrl();
}

export function getBuyButtonLabel(product: Product) {
  if (isValidExternalUrl(product.zazzleUrl)) return "Comprar na Zazzle";
  if (isFallbackStoreLink(product)) return "Ver na loja Zazzle";
  return "Link em breve";
}
