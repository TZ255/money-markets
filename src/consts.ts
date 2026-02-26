export const SITE_TITLE = 'UwekezajiTZ'
export const SITE_DESCRIPTION =
  'Mwongozo wa uwekezaji Tanzania ... hisa (DSE), mutual funds, hati fungani, na elimu ya fedha kwa Kiswahili.'

export const SITE_URL = 'https://uwekezaji.co.tz'

export const SITE_METADATA = {
  title: {
    default: 'UwekezajiTZ | Mwongozo wa Uwekezaji wa Hisa na Mifuko ya Uwekezaji Tanzania'
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Uwekezaji Tanzania',
    'DSE',
    'Dar es Salaam Stock Exchange',
    'Mutual Funds',
    'UTT',
    'Hati fungani',
    'Bonds Tanzania',
    'Elimu ya fedha',
    'Dividend',
    'ETF',
    'Hisa',
    'Mwongozo wa uwekezaji'
  ],
  authors: [{ name: 'UwekezajiTZ', url: SITE_URL }],
  creator: 'UwekezajiTZ',
  publisher: 'UwekezajiTZ',
  robots: {
    index: true,
    follow: true
  },
  language: 'sw-TZ',
  locale: 'sw_TZ',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'sw_TZ',
    siteName: 'UwekezajiTZ',
    title: 'UwekezajiTZ',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-uwekezaji.png',
        width: 1200,
        height: 630,
        alt: 'UwekezajiTZ - Mwongozo wa Uwekezaji Tanzania',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@uwekezajitz',
    creator: '@uwekezajitz',
    title: 'UwekezajiTZ',
    description: SITE_DESCRIPTION,
    images: ['/images/og-uwekezaji.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/uwekezajitz',
  linkedin: 'https://linkedin.com/company/uwekezajitz',
  youtube: 'https://www.youtube.com/@uwekezajitz',
  email: 'mailto:info@uwekezaji.co.tz'
}

export const COMPANY_INFO = {
  name: 'UwekezajiTZ',
  legalName: 'UwekezajiTZ Media',
  url: SITE_URL,
  logo: `/images/og-uwekezaji.png`,
  foundingDate: '2024',
  address: {
    streetAddress: 'Kariakoo',
    addressLocality: 'Dar es Salaam',
    addressRegion: 'Dar es Salaam',
    postalCode: '11101',
    addressCountry: 'TZ'
  },
  contactPoint: {
    telephone: '+255 743 000 000',
    contactType: 'usaidizi',
    email: 'info@uwekezaji.co.tz'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
