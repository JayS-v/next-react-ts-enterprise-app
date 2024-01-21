import { dataEn, dataDe } from 'lib/consts';

export const routes = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Portfolio', path: '/portfolio' },
  { id: 4, name: 'Pricing', path: '/pricing' },
  { id: 5, name: 'About', path: '/about' },
  { id: 6, name: 'Contact Us', path: '/contacts' },
  { id: 7, name: dataEn.imprintData, path: '/imprint' },
];

export const routesDE = [
  { id: 1, name: 'Startseite', path: '/' },
  { id: 2, name: 'Portfolio', path: '/portfolio' },
  { id: 4, name: 'Preisgestaltung', path: '/pricing' },
  { id: 5, name: 'Über uns', path: '/about' },
  { id: 6, name: 'Kontakt', path: '/contacts' },
  { id: 7, name: dataDe.imprintData, path: '/imprint' },
];

export const strings: Record<string, { navigate: string; copyright: string }> =
  {
    en: { navigate: 'navigate', copyright: 'All Rights Reserved.' },
    de: { navigate: 'navigieren', copyright: 'Alle Rechte vorbehalten.' },
  };
