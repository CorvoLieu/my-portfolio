import { Routes } from "@/constants";
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
      href: Routes.HOME,
      img: "lucide:home",
    },
    {
      label: t("sidebar.blog", "Blog"),
      href: Routes.BLOG,
      img: "lucide:notebook-pen",
    },
    {
      label: t("sidebar.game_development", "Game Development"),
      href: Routes.GAME_DEVELOPMENT,
      img: "lucide:gamepad-2",
    },
    {
      label: t("sidebar.web_development", "Web Development"),
      href: Routes.WEB_DEVELOPMENT,
      img: "lucide:server",
    },
    {
      label: t("sidebar.devops", "DevOps"),
      href: Routes.DEVOPS,
      img: "lucide:settings",
    },
  ];

  return { sideBarData };
};

export default useSideBarData;
