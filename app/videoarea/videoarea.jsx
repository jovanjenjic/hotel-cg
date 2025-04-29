"use client";
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { useTranslation } from 'react-i18next';

export default function Videoarea() {
  const [isOpen, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <div className="video__area" style={{ backgroundImage: `url('/img/villa/villa-drobnipijesak-inside.webp')` }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Title */}
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="video__area-title">
              <h2>{t('video_area.title')}</h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-4">
            <div className="video__area-right">
              <div className="video__play">
                <React.Fragment>
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="SZEflIVnhH8"
                    onClose={() => setOpen(false)}
                  />
                  <span onClick={() => setOpen(true)}>
                    <i className="fas fa-play"></i>
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
