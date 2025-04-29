"use client";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Gallery from "./gallery";
import Offerarea from "./offer-area";
import Servicestwo from "./services-two";
import SEO from "@/components/seo";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

  return (
    <>
      <SEO pageTitle='About Us' />
        <HeaderOne />
        <BreadCrumb title={t('about.title')} innerTitle={t('about.title')} bgImage="/img/vdp-i-1.webp"/>
        <Offerarea />
        <Servicestwo />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default About;
