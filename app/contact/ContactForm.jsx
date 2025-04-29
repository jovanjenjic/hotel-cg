"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const form = useRef();
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_npm8k0u',     // zamijeni stvarnim ID-jem
      'template_eaaupdz',    // zamijeni stvarnim ID-jem
      form.current,
    ).then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Poruka je uspješno poslata!");
        form.current.reset();
      },
      (error) => {
        console.error("Email error:", error.text);
        alert("Došlo je do greške. Pokušajte ponovo.");
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4 space-y-4 border rounded shadow">
      <div className="row">
        <div className="col-sm-6 mb-30">
            <div className="contact__area-form-item">
            <i className="fal fa-user"></i>
            <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                required="required"
            />
            </div>
        </div>
        <div className="col-sm-6 sm-mb-30">
            <div className="contact__area-form-item">
            <i className="far fa-envelope-open"></i>
            <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                required="required"
            />
            </div>
        </div>
        <div className="col-sm-6 mb-30">
            <div className="contact__area-form-item">
            <i className="far fa-phone-alt"></i>
            <input
                type="text"
                name="phone"
                placeholder={t('contact.form.phone')}
                required="required"
            />
            </div>
        </div>
        <div className="col-sm-6 sm-mb-30">
            <div className="contact__area-form-item">
            <i className="far fa-address-book"></i>
            <input
                type="text"
                name="subject"
                placeholder={t('contact.form.subject')}
                required="required"
            />
            </div>
        </div>
        <div className="col-sm-12 mb-30">
            <div className="contact__area-form-item">
            <i className="far fa-comments"></i>
            <textarea
                name="message"
                placeholder={t('contact.form.message')}
            ></textarea>
            </div>
        </div>
        <div className="col-lg-12">
            <div className="contact__area-form-item">
            <button className="theme-btn" type="submit">
            {t('button.submit_now')}<i className="fal fa-long-arrow-right"></i>
            </button>
            </div>
        </div>
        </div>
    </form>
  );
};

export default ContactForm;
