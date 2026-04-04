export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory?: string;
  collection: string;
  tags: string[];
  badge?: string;
  featured: boolean;
  newArrival: boolean;
  customizable: boolean;
  zazzleUrl: string;
  personalizeUrl?: string;
  images: string[];
  relatedProducts: string[];
  active: boolean;
  optionalPriceNote?: string;
  usage: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  featured: boolean;
  productCount: number;
  seoTitle: string;
  seoDescription: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  product?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
