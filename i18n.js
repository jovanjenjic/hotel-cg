import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector) // 👈 bitno za detekciju jezika iz browsera
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // ako ne prepozna, koristi engleski
    supportedLngs: ['en', 'me', 'de', 'ru'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      // Redosled kako traži jezik
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // Gde da čuva info o jeziku (lokalna memorija browsera)
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });