export const siteConfig = {
  name: 'Mwandege Boys Secondary School',
  shortName: 'MBSS',
  description:
    'Mwandege Boys Secondary School provides quality education and develops disciplined, motivated leaders through academics, character, and practical life skills.',
  url: 'https://mwandege-school.com',
  ogImage: '/schoolLogo.png',
  phone: '+255-656-209607',
  email: 'info@mwandegeschools.ac.tz',
  admissionsEmail: 'admissions@mwandegeschools.ac.tz',
  address: {
    country: 'TZ',
    locality: 'Mwandege',
    region: 'Pwani',
  },
} as const;

export const siteRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/admission', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/academic', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/achievements', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/gallery', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
] as const;
