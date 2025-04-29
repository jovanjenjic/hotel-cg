"use client";
import Social from "../socials/page";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Contactcontainer = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <>
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">{t('contact.touch.title')}</h3>
                <p>{t('contact.touch.des_1')}</p>
                <p>{t('contact.touch.des_2')}</p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>{t('contact.phone')}</span>
                    <h6>
                      <a href="tel:+38269216035">+382 69 216 035</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>{t('contact.email')}</span>
                    <h6>
                      <a href="mailto:info@villadrobnipijesak.me">info@villadrobnipijesak.me</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>{t('contact.address')}</span>
                    <h6>
                      <a href="https://maps.app.goo.gl/iH5N6Heggig8jv1v5">Drobni Pijesak, Montenegro </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <Social />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <h3 className="mb-35">{t('contact.form.title')}</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83439.47718632933!2d18.855758186162618!3d42.236307621802275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd7dc3cff419f%3A0x700cf87544b7dc28!2sVilla%20Drobni%20Pijesak!5e0!3m2!1sen!2srs!4v1743000237742!5m2!1sen!2srs" 
                loading="lazy"
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
