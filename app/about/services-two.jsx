"use client";
import Image from "next/image";
import CarParking from "../../public/img/icon/car-parking.png";
import Cleaning from "../../public/img/icon/cleaning.png";
import SwimmingPool from "../../public/img/icon/swimming-pool.png";
import Wifi from "../../public/img/icon/wifi.png";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Servicestwo = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <>
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Cleaning} />
                </div>
                <div className="services__two-item-content">
                  <h4>{t('services.clean.title')}</h4>
                  <p>{t('services.clean.des')}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={CarParking} />
                </div>
                <div className="services__two-item-content">
                  <h4>{t('services.parking.title')}</h4>
                  <p>{t('services.parking.des')}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={SwimmingPool} />
                </div>
                <div className="services__two-item-content">
                  <h4>{t('services.pool.title')}</h4>
                  <p>{t('services.pool.des')}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Wifi} />
                </div>
                <div className="services__two-item-content">
                  <h4>{t('services.wifi.title')}</h4>
                  <p>{t('services.wifi.des')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;
