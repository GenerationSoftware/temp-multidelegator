const path = require('path')
const ChainedBackend = require('i18next-chained-backend').default

const isDev = process.env.NODE_ENV !== 'production'
const isBrowser = typeof window !== 'undefined'

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  localePath: path.resolve('./public/locales'),
  saveMissing: isDev,
  serializeConfig: false,
  reloadOnPrerender: isDev,
  use: isBrowser ? [ChainedBackend] : [],
  detection: {
    // check if language is cached in cookies, if not check local storage
    order: ['cookie', 'localStorage', 'path'],

    // next-i18next by default searches for the 'next-i18next' cookie on server requests
    lookupCookie: 'NEXT_LOCALE',
    lookupLocalStorage: 'i18nextLng',

    // cache the language in cookies and local storage
    caches: ['cookie', 'localStorage']
  }
}
