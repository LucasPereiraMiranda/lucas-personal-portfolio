import { en } from "./locales/en";
import { pt } from "./locales/pt";

export type Locale = "en" | "pt";

export const locales: Record<Locale, typeof en> = {
  en,
  pt,
};

export const defaultLocale: Locale = "en";

export function getTranslations(locale: Locale) {
  return locales[locale] || locales[defaultLocale];
}
