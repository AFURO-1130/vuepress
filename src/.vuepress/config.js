export const themeConfig = {
  nav: [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about/' },
    { text: 'Blog', link: 'https://www.nxworld.net/' },
    {
      text: 'More',
      items: [
        { text: 'Twitter', link: 'https://twitter.com/' },
        { text: 'GitHub', link: 'https://github.com/' },
        { text: 'Dribbble', link: 'https://dribbble.com/' }
      ]
    }
  ],
  sidebar: [
    '/',
    '/about/'
  ],
  displayAllHeaders: true
};