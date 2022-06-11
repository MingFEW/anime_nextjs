/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Anime Nextjs',
  titleTemplate: '%s | Anime Nextjs',
  description: 'Anime Nextjs',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    site_name: 'Anime Nextjs',
  },
  twitter: {
    handle: '@anime_nextjs',
    site: '@anime_nextjs',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      httpEquiv: 'content-type',
      content: 'text/html; charset=utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1',
    },
  ],
};
