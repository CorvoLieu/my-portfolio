import fs from "node:fs";
import path from "node:path";

const localesDir = path.resolve("./src/locales");
const enPath = path.join(localesDir, "en.json");
const viPath = path.join(localesDir, "vi.json");

export const languages = {
  en: { label: "English", icon: "flagpack:us" },
  vi: { label: "Tiếng Việt", icon: "flagpack:vn" },
};
export type LangType = keyof typeof languages;

export const defaultLang: LangType = "en";

const getFile = (p: string) =>
  fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : {};

export const useTranslations = (lang: LangType) => {
  const t = (key: string, msg: string): string => {
    console.debug(`Translating key: ${key} for language: ${lang}`); // Debug log
    const enData = getFile(enPath);
    const viData = getFile(viPath);
    let updated = false;

    // If the key is missing in English, add it (using the key name as default text)
    if (!(key in enData)) {
      enData[key] = msg; // Turn "welcome_msg" into "welcome.msg"
      updated = true;
    }

    // If the key is missing in Vietnamese, add it as a blank string
    if (!(key in viData)) {
      viData[key] = "";
      updated = true;
    }

    console.debug(`Translations updated: ${process.env.NODE_ENV}`); // Debug log
    // Save changes to disk immediately so you can go fill them in
    if (updated && process.env.NODE_ENV === "development") {
      fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
      fs.writeFileSync(viPath, JSON.stringify(viData, null, 2));
    }

    return lang === "vi" ? viData[key] || enData[key] : enData[key];
  };

  return { t };
};

export const getStaticPaths = () => {
  return [{ params: { lang: "en" } }, { params: { lang: "vi" } }];
};
