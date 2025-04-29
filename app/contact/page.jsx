"use client";
import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Contactcontainer from "./contact-container";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <>
      <SEO pageTitle="Contact Us" />
        <HeaderOne />
        <BreadCrumb title={t('contact.title')} innerTitle={t('contact.title')} bgImage="/img/vdp-i-1.webp"/>
        <Contactcontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Contact;
