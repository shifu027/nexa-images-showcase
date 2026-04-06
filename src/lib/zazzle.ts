import { Product } from "@/data/types";

const ZAZZLE_STORE_BASE = import.meta.env.VITE_ZAZZLE_STORE_URL || null;

export function isValidExternalUrl(url?: string | null): boolean {
  if (!url || !url.trim() || url.trim() === "#") return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function resolveProductBuyUrl(product: Product): string | null {
  if (isValidExternalUrl(product.zazzleUrl)) return product.zazzleUrl;
  if (ZAZZLE_STORE_BASE && isValidExternalUrl(ZAZZLE_STORE_BASE)) {
    return `${ZAZZLE_STORE_BASE.replace(/\/$/, "")}/${product.slug}`;
  }
  return null;
}

export function resolveProductPersonalizeUrl(product: Product): string | null {
  if (!product.customizable) return null;
  if (isValidExternalUrl(product.personalizeUrl)) return product.personalizeUrl;
  return null;
}
