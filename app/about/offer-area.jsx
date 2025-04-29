"use client";
import Image from "next/image";
import Offers from "../../public/img/features/offers.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Offerarea = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">{t('about.montenegro.subtitle')}</span>
                <h2>{t('about.montenegro.title')}</h2>
                <p>{t('about.montenegro.des')}</p>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">{t('about.architecture.subtitle')}</span>
                <h2>{t('about.architecture.title')}</h2>
                <p>{t('about.architecture.des_1')}</p>
                <p>{t('about.architecture.des_2')}</p>
                <p>{t('about.architecture.des_3')}</p>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">{t('about.nature.subtitle')}</span>
                <h2>{t('about.nature.title')}</h2>
                <p>{t('about.nature.des')}</p>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">{t('about.impression.subtitle')}</span>
                <h2>{t('about.impression.title')}</h2>
                <p>{t('about.impression.des')}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
