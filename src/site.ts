// Site metadata for <head> + nav only. All résumé content lives in data/cv.ts.
// `url` must match astro.config.mjs `site`.
export const site = {
  name: 'Elliott Clark',
  url: 'https://elliottclark.info',
  description:
    'Elliott Clark — software engineer and founder building dependable, ML-powered distributed systems.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Résumé', href: '/resume' },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
