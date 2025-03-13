import { useTranslation } from "react-i18next"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between min-h-96 bg-secondary text-main">
      <div className="flex flex-row justify-between px-4 py-4">
        <h3 className="text-2xl">Jomaroru</h3>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-center mb-5 gap-8">
        <div
          className="w-70 h-70 rounded-full bg-center bg-cover"
          style={{ backgroundImage: `url(./yo_cafe.png)` }}
        ></div>
        <div className="flex flex-col w-lg gap-4">
          <h1 className="text-3xl">
            {t('presentation')}
          </h1>
          <p>
            {t('developer')}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Header