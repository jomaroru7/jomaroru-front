import { useTranslation } from "react-i18next"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col h-96 bg-secondary text-main">
      <div className="flex flex-row justify-between px-4 py-4">
        <h1 className="text-2xl">Jomaroru</h1>
        <ThemeToggle />
        <LanguageSwitcher/>
      </div>
      <div className="flex flex-row justify-center">
        <img className="w-32 rounded-full" src="./yo_cafe.png" alt="yo" />
        <p>
          {t('presentation')}
        </p>
      </div>
    </div>
  )
}

export default Header