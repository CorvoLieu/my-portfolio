import { useTranslations, type LangType } from "@/i18n/utils";
import type React from "react";

export interface SideBarDataProps {
  label: string;
  href: string;
  img: string | React.ReactNode;
}

const useSideBarData = (lang: LangType) => {
  const { t } = useTranslations(lang);

  const sideBarData = [
    {
      label: t("sidebar.home", "Home"),
      href: "/",
      img: "lucide:home",
    },
    {
      label: t("sidebar.projects", "Projects"),
      href: "/projects",
      img: "lucide:folder-kanban",
    },
    {
      label: t("sidebar.contact", "Contact"),
      href: "/contact",
      img: "lucide:mail",
    },
    {
      label: t("sidebar.resume", "Resume"),
      href: "/resume",
      img: "lucide:file-text",
    },
  ];

  return { sideBarData };
};

export default useSideBarData;
