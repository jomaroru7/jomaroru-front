import { useTranslation } from "react-i18next"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher";
import SocialGrid from "./SocialGrid";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="fixed top-0 flex flex-row justify-between py-4 px-4 w-full lg:w-5xl bg-main">
        <h3 className="text-2xl">Jomaroru</h3>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      <header className="flex flex-col justify-between min-h-96 w-5xl p-4 pt-20">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between justify-center mb-5 gap-8">
          <div className="flex flex-col max-w-lg gap-4">
            <h1 className="text-6xl">
              {t('presentation')}
            </h1>
            <p className="text-xl">
              {t('developer')}
            </p>
            <SocialGrid />
          </div>
          <div
            className="w-70 h-70 lg:w-100 lg:h-100 rounded-full bg-center bg-cover"
            style={{ backgroundImage: `url(./images/yo_cafe.png)` }}
          ></div>
        </div>
      </header>
    </div>
  )
}

export default Header