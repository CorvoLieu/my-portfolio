import { useTranslations, type LangType } from "@/i18n/server";

export interface HomeDataProps {
  welcomeMessage: string;
  introduction: string;
  details: string;
}

const useHomeData = (lang: LangType) => {
  const { t } = useTranslations(lang);

  const homeData: HomeDataProps = {
    welcomeMessage: t("home.welcomeMessage", "Hi, I'm Hao."),
    introduction: t(
      "home.introduction",
      "I am a DevOps Engineer and a cloud enthusiast.",
    ),
    details: t(
      "home.details",
      "I specialize in cloud infrastructure, automation, and CI/CD pipelines. I'm passionate about continuous learning and collaborating with teammates.",
    ),
  };

  return { homeData };
};

export default useHomeData;
