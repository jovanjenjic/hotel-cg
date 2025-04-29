"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Accommodationstext = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <div className="col-xl-5 col-lg-6 lg-mb-50">
      <div className="accommodations__area-title">
        <span className="subtitle__one">{t('accommodation.subtitle')}</span>
        <h2>{t('accommodation.title')}</h2>
        <p>{t('accommodation.des')}</p>
        <Link className="theme-btn" href="/about">
          {t('button.read_more')} <i className="fal fa-long-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Accommodationstext;
