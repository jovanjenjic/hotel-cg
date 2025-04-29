// components/LanguageSwitcher.js
import { useTranslation } from 'react-i18next';
import { Fragment } from "react";
import { GB, ME, DE, RU } from "country-flag-icons/react/3x2"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Fragment>
      <li><button onClick={() => i18n.changeLanguage('en')}><GB title="English" className="language__area-item-icon d-flex align-content-center flex-wrap justify-content-center"/></button></li>
      <li><button onClick={() => i18n.changeLanguage('me')}><ME title="Montenegro" className="language__area-item-icon d-flex align-content-center flex-wrap justify-content-center"/></button></li>
      <li><button onClick={() => i18n.changeLanguage('de')}><DE title="Germany" className="language__area-item-icon d-flex align-content-center flex-wrap justify-content-center"/></button></li>
      <li><button onClick={() => i18n.changeLanguage('ru')}><RU title="Russia" className="language__area-item-icon d-flex align-content-center flex-wrap justify-content-center"/></button></li>
    </Fragment>
  );
};

export default LanguageSwitcher;
