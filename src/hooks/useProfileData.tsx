import { useTranslations, type LangType } from "@/i18n/server";

export interface ProfileDataProps {
  name: string;
  title: string;
  email: string;
}

const useProfileData = (lang: LangType) => {
  const { t } = useTranslations(lang);

  const profileData: ProfileDataProps = {
    name: "Hao Lieu",
    title: "DevOps Engineer",
    email: "work@skyblieu.com",
  };

  return profileData;
};

export default useProfileData;
