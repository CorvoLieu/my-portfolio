/// <reference types="astro/client" />

declare namespace App {
  export type envType = "development" | "production";

  export interface Locals {
    env?: envType;
    t?: ReturnType<typeof import("./i18n/utils").useTranslations>["t"];
    lang?: string;
  }
}
