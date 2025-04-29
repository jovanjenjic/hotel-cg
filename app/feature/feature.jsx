"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Feature() {
  const { t, i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <div className="feature__area">
      <div className="container">
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                alt="food on the beach"
                src="/img/villa/villadrobnipijesak-food.jpg"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">{t('feature.food.subtitle')}</span>
                <h2>{t('feature.food.title')}</h2>
                <p>{t('feature.food.des')}</p>
                {/* <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6  order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">{t('feature.pool.subtitle')}</span>
                <h2>{t('feature.pool.title')}</h2>
                <p>{t('feature.pool.des')}</p>
                {/* <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/villadrobnipijesak-pool-1.webp"
                alt="villas pool"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/drobni_pijesak_1.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">{t('feature.near.subtitle')}</span>
                <h2>{t('feature.near.title')}</h2>
                <p>{t('feature.near.des_1')}</p>
                <p>{t('feature.near.des_2')}</p>
                {/* <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6 order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">{t('feature.wine.subtitle')}</span>
                <h2>{t('feature.wine.title')}</h2>
                <p>{t('feature.wine.des')}</p>
                {/* <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/wine-storage.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-left flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/gym.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">{t('feature.gym.subtitle')}</span>
                <h2>{t('feature.gym.title')}</h2>
                <p>{t('feature.gym.des')}</p>
                {/* <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
