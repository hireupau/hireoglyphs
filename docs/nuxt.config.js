const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/hireoglyphs/',
  },
} : {};

export default {
  mode: 'universal',
  head: {
    title: 'Hireoglyphs',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        crossorigin: 'crossorigin',
        href: 'https://fonts.gstatic.com',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  loading: {
    color: '#fff',
  },
  css: [
    'assets/styles.css',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  ...routerBase,
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
};
