import { defineMiddleware } from "astro:middleware";
import { useTranslations } from "./i18n/utils";

export const onRequest = defineMiddleware((context, next) => {
  context.locals.env = (process.env.NODE_ENV as App.envType) || "development";

  const lang = context.url.pathname.startsWith("/vi") ? "vi" : "en";
  console.log(
    `Middleware: Detected language ${lang} for path ${context.url.pathname}`,
  ); // Debug log
  const { t } = useTranslations(lang);

  // Attach the 't' function to 'locals'
  context.locals.t = t;
  context.locals.lang = lang;
  console.debug(
    `Middleware: Set language to ${lang}, environment: ${context.locals.env}`,
  ); // Debug log

  return next();
});
