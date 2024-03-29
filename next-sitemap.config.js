/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  priority: 0.8,
  exclude: [
    '/portfolio/automated-testing-of-a-neobank',
    '/portfolio/web-based-trading-platform',
    '/portfolio/digital-employee-chat-video-bot',
    '/portfolio/marketing-automation-for-small-businesses',
    '/portfolio/blockchain-based-legal-governance-system',
    '/portfolio/admin-panel-for-a-trading-education-business',
    '/portfolio/cyber-security-software',
    '/portfolio/madvalorem',
    '/portfolio/guide-zang',
    '/portfolio/prospecting',

    '/de/portfolio/automated-testing-of-a-neobank',
    '/de/portfolio/web-based-trading-platform',
    '/de/portfolio/digital-employee-chat-video-bot',
    '/de/portfolio/marketing-automation-for-small-businesses',
    '/de/portfolio/blockchain-based-legal-governance-system',
    '/de/portfolio/admin-panel-for-a-trading-education-business',
    '/de/portfolio/cyber-security-software',
    '/de/portfolio/madvalorem',
    '/de/portfolio/guide-zang',
    '/de/portfolio/prospecting',
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/portfolio/automated-testing-of-a-neobank',
          '/portfolio/web-based-trading-platform',
          '/portfolio/digital-employee-chat-video-bot',
          '/portfolio/marketing-automation-for-small-businesses',
          '/portfolio/blockchain-based-legal-governance-system',
          '/portfolio/admin-panel-for-a-trading-education-business',
          '/portfolio/cyber-security-software',
          '/portfolio/madvalorem',
          '/portfolio/guide-zang',
          '/portfolio/prospecting',

          '/de/portfolio/automated-testing-of-a-neobank',
          '/de/portfolio/web-based-trading-platform',
          '/de/portfolio/digital-employee-chat-video-bot',
          '/de/portfolio/marketing-automation-for-small-businesses',
          '/de/portfolio/blockchain-based-legal-governance-system',
          '/de/portfolio/admin-panel-for-a-trading-education-business',
          '/de/portfolio/cyber-security-software',
          '/de/portfolio/madvalorem',
          '/de/portfolio/guide-zang',
          '/de/portfolio/prospecting',
        ],
      },
    ],
  },
};
