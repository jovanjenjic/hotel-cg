"use client";
import Image from "next/image";
import CarParking from "../../public/img/icon/car-parking.png";
import SwimmingPool from "../../public/img/icon/swimming-pool.png";
import Wifi from "../../public/img/icon/wifi.png";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Services() {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <div className="services__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon d-flex align-content-center flex-wrap justify-content-center">
                <Image src={CarParking} alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>{t('services.parking.title')}</h5>
                <p>{t('services.parking.des')}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon d-flex align-content-center flex-wrap justify-content-center">
                <Image src={Wifi} alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>{t('services.wifi.title')}</h5>
                <p>{t('services.wifi.des')}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="services__area-item">
              <div className="services__area-item-icon d-flex align-content-center flex-wrap justify-content-center">
                <Image src={SwimmingPool} alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>{t('services.pool.title')}</h5>
                <p>{t('services.pool.des')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}