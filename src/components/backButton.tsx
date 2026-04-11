import { useTranslations, type LangType } from "@/i18n/server";

const BackButton = ({ lang, href }: { lang: LangType; href: string }) => {
  const { t } = useTranslations(lang);

  return (
    <div className="back-nav-container">
      <a href={href} className="back-nav-button w-inline-block">
        <img
          src="/assets/back.svg"
          loading="lazy"
          alt=""
          className="back-nav-img"
        />
        <div>{t("global.button.back", "Back")}</div>
      </a>
    </div>
  );
};

export default BackButton;
