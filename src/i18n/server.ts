import i18next from "i18next";
import Backend from "i18next-fs-backend";
import path from "node:path";

const isDev = process.env.NODE_ENV === "development";

export const languages = {
  en: { label: "English", icon: "flagpack:us" },
  vi: { label: "Tiếng Việt", icon: "flagpack:vn" },
};

export type LangType = keyof typeof languages;

i18next.use(Backend).init({
  saveMissing: isDev,
  saveMissingTo: "all",
  backend: {
    loadPath: path.resolve("./src/locales/{{lng}}.json"),
    addPath: path.resolve("./src/locales/{{lng}}.json"),
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "vi"],
  parseMissingKeyHandler: (key, defaultValue) => {
    return defaultValue || key;
  },
});

export const useTranslations = (lang: LangType) => {
  i18next.changeLanguage(lang);

  const t = i18next.t;

  return { t };
};

export default useTranslations;
