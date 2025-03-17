import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div
            className="relative flex items-center border border-gray-300 bg-main rounded-full p-0.5 w-16 h-8 cursor-pointer"
            onClick={toggleLanguage}
        >
            <div
                className={`absolute w-7 h-7 bg-cover bg-center rounded-full transition-transform duration-300 ease-in-out ${i18n.language === 'en' ? 'translate-x-0' : 'translate-x-7.5'}`}
                style={{ backgroundImage: `url(${i18n.language === 'en' ? './images/us.png' : './images/es.png'})` }}
            />
        </div>
    );
};

export default LanguageSwitcher;