import en from '@/messages/en.json';
import th from '@/messages/th.json';

export const locales = ['th', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'th';

const dictionaries = { en, th } as const;

// The message shape is identical across locales; derive the type from `en`.
export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Prefix an internal path with the GitHub Pages base path so links and
// assets resolve correctly both locally and on the deployed subpath.
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
