import { ICaseStudy } from 'types';

export const caseStudies: Record<string, ICaseStudy[]> = {
  en: [
    {
      id: 0,
      slug: 'automated-testing-of-a-neobank',
      thumbnail: '/images/cases/automated-testing-of-a-neobank-1.jpg',
      title: 'Automated Testing of a Neobank',
      noindex: true,
      summary: {
        description:
          'The Neobank platform was created to reboot personal and business banking in the digital age. Personalized features and seamlessly integrated services are built around your needs, helping you spend, save, and plan for your future.',
        goal: 'Online banking aims to get your time back with one intelligent bank account that keeps you in control. The goal of our part of the work was to automate the testing of core banking functionalities to provide a stable and positive user experience.',
        result:
          'Users now spend their time more accurately using online banking for personal and business goals. Considerably fewer support tickets opened after test automation. User satisfaction and referrals of the users have increased.',
        industry: 'Automated Testing, Banking, Financial Services, Mobile App',
      },
      tech_stack: {
        backend: 'JAVA Spring Boot, Kubernetes, Kafka, GraphQL',
        db: 'MongoDB, PostgreSQL',
        frontend: 'Flutter, Vaadin',
        devops: 'Azure DevOps',
        libraries_used: 'Liquibase, Lombok',
      },
      images: [
        '/images/cases/automated-testing-of-a-neobank-1.jpg',
        '/images/cases/automated-testing-of-a-neobank-2.png',
        '/images/cases/automated-testing-of-a-neobank-3.png',
        '/images/cases/automated-testing-of-a-neobank-4.png',
      ],
    },

    {
      id: 1,
      slug: 'web-based-trading-platform',
      thumbnail: '/images/cases/web-based-trading-platform-4.png',
      title: 'Web Based Trading Platform',
      noindex: true,
      summary: {
        description:
          'A platform that allows the client to make transactions with any product, whether it be shares, grain, electricity, etc. Market data comes in real time and is displayed in a convenient way, which makes it easy to navigate the market dynamics and make a buy and sale orders',
        goal: 'Helping traders to work on the market with more success by providing useful & advanced UI/UX solutions, multiple default data feeds, custom charts and layouts.',
        result:
          'Easy to Place & Edit Orders; 1Click Trading; Web Based → login from anywhere with no need to download anything; Low Computing Requirements; Futures and Forex, both available; Amazing Customer Support.',
        industry: 'Financial Services, Trading',
      },
      tech_stack: {
        backend: 'Node.js, Express, PostgreSQL',
        db: 'MongoDB',
        frontend: 'React, Redux, TypeScript, Web Workers, Material UI',
      },
      images: [
        '/images/cases/web-based-trading-platform-1.jpg',
        '/images/cases/web-based-trading-platform-2.png',
        '/images/cases/web-based-trading-platform-3.jpg',
        '/images/cases/web-based-trading-platform-4.png',
        '/images/cases/web-based-trading-platform-5.png',
      ],
    },

    {
      id: 2,
      slug: 'digital-employee-chat-video-bot',
      thumbnail: '/images/cases/digital-employee-chat-video-bot-1.jpg',
      title: 'Digital employee chat & video bot',
      noindex: true,
      summary: {
        description:
          'The Website Assistant (WA) is a dedicated Conversational AI that uses Natural Language Processing (NLP) to understand and speak in coherent and human-like sentences. This allows it to sort through someone’s sentence to find meaningful terms and phrases that it will use to prepare its response. The WA’s purpose is to help all customers which request assistance while visiting (browsing through the website. The WA will manage new customers and members accordingly. Meaning that it will use previous information on members to better serve and assist them, while gathering the proper information from the new customers. To achieve this, the WA has been trained to orient the customers through the website, answer all of the customers questions concerning the website, it’s services and the products as of how to use them, their features, their guarantees, cost, financing, shipping, return policies, payments etc. To begin, a character is created, a woman/girl, man/boy or any other fictional character. Then a digital voice is selected (or created) and attributed to the character. The character will either be voice only, text only or have a 2D/3D appearance. In the case that it is visible, it will have a set of dedicated corporeal and facial animations in sync with the moods. Once the character is created, it is then trained with the set of skills and knowhow it will need to play it’s role of WA according to the website that it is designated for.',
        goal: 'A digital employee can serve real customers of the business (a bank, or online store, a hospital, etc.) as a real human and even better by speaking and looking as a human, by operating the information faster.',
        result:
          'Using digital employees helps businesses give up customer support staff and decrease costs.',
        industry: 'AI, Machine Learning, Web',
      },
      tech_stack: {
        backend: 'Python, Django, Django Rest Framework, Wordpress, Shopify',
        db: 'MongoDB',
        frontend: 'React.js',
      },
      images: [
        '/images/cases/digital-employee-chat-video-bot-1.jpg',
        '/images/cases/digital-employee-chat-video-bot-2.jpg',
        '/images/cases/digital-employee-chat-video-bot-3.jpg',
        '/images/cases/digital-employee-chat-video-bot-4.jpg',
      ],
    },

    {
      id: 3,
      slug: 'marketing-automation-for-small-businesses',
      thumbnail:
        '/images/cases/marketing-automation-for-small-businesses-1.jpg',
      title: 'Marketing Automation for Small Businesses',
      noindex: true,
      summary: {
        description:
          'SaaS application with minimalist UI/UX designs. Using web app standards, backend technologies needed for scheduling social media posts, proficient front end knowledge for responsiveness and animations, social media integration (facebook, twitter, instagram, and linked in), MEAN Stack experience and Google APIs etc',
        industry: 'Marketing & Advertising',
      },
      tech_stack: {
        backend: 'Node.js',
        db: 'MongoDB',
        frontend: 'React.js, HTML, CSS, Bootstrap',
        api: 'Stripe, Facebook, Google, Twitter, Youtube',
      },
      images: [
        '/images/cases/marketing-automation-for-small-businesses-1.jpg',
        '/images/cases/marketing-automation-for-small-businesses-2.jpg',
        '/images/cases/marketing-automation-for-small-businesses-3.jpg',
        '/images/cases/marketing-automation-for-small-businesses-4.jpg',
        '/images/cases/marketing-automation-for-small-businesses-5.jpg',
      ],
    },

    {
      id: 4,
      slug: 'blockchain-based-legal-governance-system',
      thumbnail: '/images/cases/blockchain-based-legal-governance-system-1.jpg',
      title: 'Blockchain-based legal governance system',
      noindex: true,
      features: [
        'Combines the benefits of public, decentralized ledgers with governance frameworks that have been tried and tested in established legal systems.',
        'Runs on state-of-the-art base layer technology that integrates seamlessly into the evolving crypto ecosystem.',
        'Economics enable instant scalability and long-term sustainability, independent of speculation and inflation subsidies.',
      ],
      summary: {
        description:
          'App combines a public, open, decentralized ledger with governance concepts that have been tried and tested in established legal systems. It lays down all rules agreed by the users of the App. Root Nodes serve as guardians of these rules. Stakeholders can enforce their rights via a dispute resolution mechanism based on established international private arbitration rules.',
        goal: "The app combines the benefits of a public, open and decentralized ledger with the transparency of enforceable private contracts. Main point to reduce the third parties that are involved in all financial transactions. App tokens, you can delegate them to another validator node that you trust. App delegation increases a validator's accountable stake and moves him up the validator long list. Validators receive a reward for block generation. This reward is split and distributed to any potential stake delegator according to a ratio predefined by the validator node operator. This way, an App token holder can participate in earning block rewards without actively operating a validator node. You can earn a reward on your App tokens that are locked within your vault depending on system-widely set parameter App token holder reward rate. Active Validators and Root Nodes receive staking rewards in the form of the native token of that chain. Deposit a supported synthetic asset (e.g. QUSD) and earn interest rewards.",
        result:
          '1.The economic model shall be sustainable in the long-term. 2. The underlying economic incentives shall support App’s security and robustness. 3. App’s economics shall support a healthy balance of power between the different stakeholder groups which are engaged in App’s governance. These goals are achieved through app’s tokeneconomic design.',
        industry: 'Other',
      },
      tech_stack: {
        frontend:
          'TypeScript, Styled Components, React-Redux, Redux-Saga, React.js',
        devops: 'Docker',
        libraries_used:
          'CRA with Vite, Web3, i18next, Sentry, web3-react/core, SDK, Web 3 contracts',
      },
      images: [
        '/images/cases/blockchain-based-legal-governance-system-1.jpg',
        '/images/cases/blockchain-based-legal-governance-system-2.jpg',
        '/images/cases/blockchain-based-legal-governance-system-3.jpg',
        '/images/cases/blockchain-based-legal-governance-system-4.jpg',
        '/images/cases/blockchain-based-legal-governance-system-5.jpg',
        '/images/cases/blockchain-based-legal-governance-system-6.jpg',
        '/images/cases/blockchain-based-legal-governance-system-7.jpg',
      ],
    },

    {
      id: 5,
      slug: 'admin-panel-for-a-trading-education-business',
      thumbnail:
        '/images/cases/admin-panel-for-a-trading-education-business-4.jpg',
      title: 'Admin Panel for a Trading Education Business',
      noindex: true,
      summary: {
        description:
          'The admin panel manages the platform, which helps new traders to build their careers as traders.This Admin part is created for the business owner team and includes: Customers management, Statistics. UI part also consists of a trading platform, charts, technical indicators, opening trades, multiple charts.',
        goal: 'Being able to manage students and educational material of the trading-educational web platform better with the help of graphs, internal CRM system, data management and other functionality in order to optimize further marketing & business strategy, product’s target audience and pricing.',
        result:
          'Considerable profit increase after having a possibility to manage customers, pricing and the educational materials better via the administration panel.',
        industry: 'Education, Financial markets, Trading',
      },
      tech_stack: {
        backend: 'Koa, Koa-router',
        frontend: 'React, Redux, TS, React Context',
      },
      images: [
        '/images/cases/admin-panel-for-a-trading-education-business-1.jpg',
        '/images/cases/admin-panel-for-a-trading-education-business-2.jpg',
        '/images/cases/admin-panel-for-a-trading-education-business-3.jpg',
        '/images/cases/admin-panel-for-a-trading-education-business-4.jpg',
      ],
    },

    {
      id: 6,
      slug: 'cyber-security-software',
      thumbnail: '/images/cases/cyber-security-software-1.jpg',
      title: 'Cyber Security Software',
      noindex: true,
      features: [
        'Monitoring, analysing, profiling and mitigating cybersecurity incidents.',
        'Malware protection checks internal processes and activity at Kernel or Registery level for suspicious and anomalous behaviour.',
        'Cybersecurity management can be performed anywhere on a smart device and not only on a desktop device.',
        'Access from anonymous networks into an environment is an obvious threat that should be prevented. A predictive cyber security product must be able to block traffic originating from anonymous networks such as TOR.',
        'A Security Information and Event Management System gathers events from all sources across the network, provides timeline and historical data and is used for event correllation purposes in advanced solutions like ACSIA.',
        'Integrates EDR, SIEM, IPS and IDS functions into a single comprehensive solution.',
        'The ability to detect and remediate cybersecurity threats enables end users to automate or manually select the recommendations provided by the cyberdefense platform.',
        'The simplicity of installation is a reflection on the complexity of the product to operate and manage. ACSIA is typically installed in 20 minutes.',
        'The product is compatible with physical and/or virtual environments which must be protected.',
        'An Intrusion Detection System is a device or software application that monitors a network or systems for malicious activity or policy violations.',
      ],
      summary: {
        description:
          "The company develops and commercialises software, based on Open Source technology and affordable to large and SME companies alike. The App market integrating EDR, SIEM, IPS and IDS functions into a single comprehensive solution that protects all your organisation's critical data. Our product has been adopted by many mid market to large companies in diverse sectors such as Fintech, Banking, Media, Insurance and Technology. The App does the grunt work of security analysis – monitoring, analysing, profiling and mitigating cybersecurity incidents.",
        goal: 'Protect critical data at the core of every organisation.',
        result:
          "The use of The App helps protect all your organisation's critical data.",
        industry: 'Other',
      },
      tech_stack: {
        backend: 'Java, Spring Frameworks, Go',
        db: 'MariaDB, Elasticsearch, MongoDB',
        frontend: 'React.js',
        devops: 'ossec, osquery',
        libraries_used: 'RabbitMq',
      },
      images: [
        '/images/cases/cyber-security-software-1.jpg',
        '/images/cases/cyber-security-software-2.jpg',
        '/images/cases/cyber-security-software-3.jpg',
        '/images/cases/cyber-security-software-4.jpg',
      ],
    },

    {
      id: 7,
      slug: 'madvalorem',
      thumbnail: '/images/cases/madvalorem-1.jpg',
      title: 'Madvalorem',
      noindex: true,
      features: [
        'Allocation of access by roles',
        'Integration with various third-party services',
        "Management of customers' business",
      ],
      summary: {
        description:
          'The system is created to capture, store and manage the company’s business data and processes effectively.',
        goal: 'To become more efficient, save cost, satisfy staff, understand organizational dynamics, to improve customer retention, to create marketing campaign, to make business more efficient.',
        result:
          'Beta version of the app with fully workable operational work-flow is created so that the client can check how the idea creates in practice.',
        industry: 'Real Estate',
      },
      tech_stack: {
        backend: 'Node.js',
        frontend: 'Angular',
        db: 'MySQL',
        project_management: 'JIRA, Bitbucket, Trello',
      },
      images: [
        '/images/cases/madvalorem-1.jpg',
        '/images/cases/madvalorem-2.jpg',
        '/images/cases/madvalorem-3.jpg',
        '/images/cases/madvalorem-4.jpg',
        '/images/cases/madvalorem-5.jpg',
        '/images/cases/madvalorem-6.jpg',
        '/images/cases/madvalorem-7.jpg',
        '/images/cases/madvalorem-8.jpg',
        '/images/cases/madvalorem-9.jpg',
      ],
    },

    {
      id: 8,
      slug: 'guide-zang',
      thumbnail: '/images/cases/guide-zang-4.jpg',
      title: 'GuideZang',
      noindex: true,
      features: [
        'Creation of mobile websites using special GuideZang interface',
        'Custom website background set-up',
        'Items management',
        'Page templates management',
        'Unique links for each separate website',
        'User statistics',
        'Site page preview mode',
        'Subscription management',
      ],
      summary: {
        description:
          'GuideZang service is a travel-destinations marketing app developed to manage, create and edit small mobile websites filled with information on different travelling places.',
        goal: 'The business idea was to develop the instrument that should be used by Travel Agencies for describing the traveling destinations to their potential clients. Key advantages of GuideZang app are fast creation of readable and nicely structured content; own design; UX architecture created specifically for traveling agencies work.',
        result:
          'The app is developed and successfully launched, specifically, agencies can use it in order to create own trip-advisors for their clients. The very traveling way of using: just use a link and read the information!',
        industry: 'Marketing & Advertising',
      },
      tech_stack: {
        backend: 'Node.js',
        frontend: 'React.js, HTML, CSS, Redux',
        db: 'MongoDB',
        devops: 'CI, DigitalOcean droplets, SSL',
        qa: 'Java quality automation, Manual testing',
        project_management: 'JIRA, Bitbucket, Slack',
      },
      images: [
        '/images/cases/guide-zang-1.jpg',
        '/images/cases/guide-zang-2.jpg',
        '/images/cases/guide-zang-3.jpg',
        '/images/cases/guide-zang-4.jpg',
        '/images/cases/guide-zang-5.jpg',
        '/images/cases/guide-zang-6.jpg',
      ],
    },

    {
      id: 9,
      slug: 'prospecting',
      thumbnail: '/images/cases/prospecting-1.jpg',
      title: 'Prospecting',
      noindex: true,
      summary: {
        description:
          "The application was developed for the creation and managing of Prospecting users' lists of potential clients, emails of whom were received with the help of LinkedIn search and email hunting third-party app.",
        goal: "Business Idea was to develop an MVP, which can offer and sell subscriptions for the people so that they can create lists of potential clients while comfortable searching in LinkedIn. This is quicker and easier than just find each person's email manually. So Prospecting is an app that provides outbound marketing workflow automation.",
        result:
          'Application is created and launched. The platform can continue further business and marketing development.',
        industry: 'Marketing & Advertising',
      },
      tech_stack: {
        backend: 'Java',
        db: 'MySQL',
        frontend: 'HTML, CSS, JS, Bootstrap',
      },
      images: [
        '/images/cases/prospecting-1.jpg',
        '/images/cases/prospecting-2.jpg',
        '/images/cases/prospecting-3.jpg',
      ],
    },
  ],

  //===========================lang=DE========================================>

  de: [
    {
      id: 0,
      slug: 'automated-testing-of-a-neobank',
      thumbnail: '/images/cases/automated-testing-of-a-neobank-1.jpg',
      title: 'Automatisiertes Testen einer Neobank',
      noindex: true,
      summary: {
        description:
          'Die Neobank-Plattform wurde entwickelt, um das Privat- und Geschäftskundengeschäft im digitalen Zeitalter neu zu gestalten. Personalisierte Funktionen und nahtlos integrierte Dienstleistungen sind auf Ihre Bedürfnisse abgestimmt und helfen Ihnen beim Ausgeben, Sparen und Planen für Ihre Zukunft.',
        goal: 'Online-Banking soll Ihnen die Zeit zurückbringen - mit einem intelligenten Bankkonto, über das Sie die Kontrolle behalten. Ziel unseres Teils der Arbeit war es, das Testen der wichtigsten Bankfunktionen zu automatisieren, um eine stabile und positive Benutzererfahrung zu gewährleisten.',
        result:
          'Die Benutzer verbringen jetzt ihre Zeit besser mit dem Online-Banking für persönliche und geschäftliche Zwecke. Deutlich weniger Support-Tickets wurden nach der Testautomatisierung geöffnet. Die Benutzerzufriedenheit und die Weiterempfehlungen der Benutzer sind gestiegen.',
        industry:
          'Automatisiertes Testen, Bankwesen, Finanzdienstleistungen, Mobile App',
      },
      tech_stack: {
        backend: 'JAVA Spring Boot, Kubernetes, Kafka, GraphQL',
        db: 'MongoDB, PostgreSQL',
        frontend: 'Flutter, Vaadin',
        devops: 'Azure DevOps',
        libraries_used: 'Liquibase, Lombok',
      },
      images: [
        '/images/cases/automated-testing-of-a-neobank-1.jpg',
        '/images/cases/automated-testing-of-a-neobank-2.png',
        '/images/cases/automated-testing-of-a-neobank-3.png',
        '/images/cases/automated-testing-of-a-neobank-4.png',
      ],
    },

    {
      id: 1,
      slug: 'web-based-trading-platform',
      thumbnail: '/images/cases/web-based-trading-platform-4.png',
      title: 'Webbasierte Handelsplattform',
      noindex: true,
      summary: {
        description:
          'Eine Plattform, die es dem Kunden ermöglicht, Transaktionen mit jedem beliebigen Produkt zu tätigen, seien es Aktien, Getreide, Strom usw. Die Marktdaten werden in Echtzeit und auf bequeme Weise angezeigt, so dass es einfach ist, sich in der Marktdynamik zurechtzufinden und Kauf- und Verkaufsaufträge zu erteilen.',
        goal: 'Wir helfen Händlern, erfolgreicher am Markt zu arbeiten, indem wir nützliche und fortschrittliche UI/UX-Lösungen, mehrere Standard-Datenfeeds, benutzerdefinierte Charts und Layouts anbieten.',
        result:
          'Einfaches Platzieren und Bearbeiten von Aufträgen; 1-Klick-Handel; Webbasiert → Anmeldung von überall, ohne etwas herunterzuladen; Geringe Computeranforderungen; Futures und Forex, beide verfügbar; Erstaunlicher Kundensupport.',
        industry: 'Finanzdienstleistungen, Handel',
      },
      tech_stack: {
        backend: 'Node.js, Express, PostgreSQL',
        db: 'MongoDB',
        frontend: 'React, Redux, TypeScript, Web Workers, Material UI',
      },
      images: [
        '/images/cases/web-based-trading-platform-1.jpg',
        '/images/cases/web-based-trading-platform-2.png',
        '/images/cases/web-based-trading-platform-3.jpg',
        '/images/cases/web-based-trading-platform-4.png',
        '/images/cases/web-based-trading-platform-5.png',
      ],
    },

    {
      id: 2,
      slug: 'digital-employee-chat-video-bot',
      thumbnail: '/images/cases/digital-employee-chat-video-bot-1.jpg',
      title: 'Digitaler Mitarbeiter Chat & Video Bot',
      noindex: true,
      summary: {
        description:
          'Der Website-Assistent (WA) ist eine spezielle Konversations-KI, die natürliche Sprachverarbeitung (NLP) nutzt, um kohärente und menschenähnliche Sätze zu verstehen und zu sprechen. Auf diese Weise kann er die Sätze einer Person sortieren, um sinnvolle Begriffe und Phrasen zu finden, die er zur Vorbereitung seiner Antwort verwendet. Die Aufgabe des WA ist es, allen Kunden zu helfen, die beim Besuch der Website um Unterstützung bitten. Der WA wird neue Kunden und Mitglieder entsprechend verwalten. Das bedeutet, dass er frühere Informationen über die Mitglieder verwendet, um sie besser zu bedienen und zu unterstützen, während er die richtigen Informationen von den neuen Kunden sammelt. Um dies zu erreichen, wurde der WA geschult, um die Kunden durch die Website zu führen und alle Fragen der Kunden bezüglich der Website, ihrer Dienstleistungen und der Produkte zu beantworten, z. B. wie sie zu benutzen sind, ihre Eigenschaften, ihre Garantien, Kosten, Finanzierung, Versand, Rückgabebedingungen, Zahlungen usw. Zu Beginn wird eine Figur erstellt, eine Frau/Mädchen, ein Mann/Junge oder eine andere fiktive Figur. Dann wird eine digitale Stimme ausgewählt (oder erstellt) und der Figur zugewiesen. Die Figur ist entweder nur stimmlich, nur textlich oder in 2D/3D sichtbar. Wenn sie sichtbar ist, hat sie eine Reihe von speziellen Körper- und Gesichtsanimationen, die mit den Stimmungen synchronisiert sind. Sobald die Figur erstellt ist, wird sie mit einer Reihe von Fähigkeiten und Kenntnissen ausgestattet, die sie benötigt, um ihre Rolle als WA entsprechend der Website, für die sie bestimmt ist, zu spielen.',
        goal: 'Ein digitaler Angestellter kann reale Kunden eines Unternehmens (einer Bank, eines Online-Shops, eines Krankenhauses usw.) wie ein echter Mensch bedienen und sogar noch besser, indem er wie ein Mensch spricht und aussieht, indem er die Informationen schneller verarbeitet.',
        result:
          'Der Einsatz digitaler Mitarbeiter hilft den Unternehmen, auf Mitarbeiter im Kundendienst zu verzichten und die Kosten zu senken.',
        industry: 'AI, Machine Learning, Web',
      },
      tech_stack: {
        backend: 'Python, Django, Django Rest Framework, Wordpress, Shopify',
        db: 'MongoDB',
        frontend: 'React.js',
      },
      images: [
        '/images/cases/digital-employee-chat-video-bot-1.jpg',
        '/images/cases/digital-employee-chat-video-bot-2.jpg',
        '/images/cases/digital-employee-chat-video-bot-3.jpg',
        '/images/cases/digital-employee-chat-video-bot-4.jpg',
      ],
    },

    {
      id: 3,
      slug: 'marketing-automation-for-small-businesses',
      thumbnail:
        '/images/cases/marketing-automation-for-small-businesses-1.jpg',
      title: 'Marketing-Automatisierung für kleine Unternehmen',
      noindex: true,
      summary: {
        description:
          'SaaS-Anwendung mit minimalistischem UI/UX-Design. Verwendung von Web-App-Standards, Backend-Technologien für die Planung von Social-Media-Posts, fundierte Front-End-Kenntnisse für Responsivität und Animationen, Social-Media-Integration (Facebook, Twitter, Instagram und LinkedIn), MEAN Stack-Erfahrung und Google APIs usw.',
        industry: 'Marketing & Werbung',
      },
      tech_stack: {
        backend: 'Node.js',
        db: 'MongoDB',
        frontend: 'React.js, HTML, CSS, Bootstrap',
        api: 'Stripe, Facebook, Google, Twitter, Youtube',
      },
      images: [
        '/images/cases/marketing-automation-for-small-businesses-1.jpg',
        '/images/cases/marketing-automation-for-small-businesses-2.jpg',
        '/images/cases/marketing-automation-for-small-businesses-3.jpg',
        '/images/cases/marketing-automation-for-small-businesses-4.jpg',
        '/images/cases/marketing-automation-for-small-businesses-5.jpg',
      ],
    },

    // {
    //   id: 4,
    //   slug: 'blockchain-based-legal-governance-system',
    //   thumbnail: '/images/cases/blockchain-based-legal-governance-system-1.jpg',
    //   title: 'Blockchain-basiertes Rechtssystem',
    //   noindex: true,
    //   features: [
    //     'Kombiniert die Vorteile öffentlicher, dezentraler Hauptbücher mit Governance-Frameworks, die in etablierten Rechtssystemen erprobt wurden.',
    //     'Läuft auf hochmoderner Basislayer-Technologie, die nahtlos in das sich entwickelnde Krypto-Ökosystem integriert ist.',
    //     'Die Wirtschaftlichkeit ermöglicht eine sofortige Skalierbarkeit und langfristige Nachhaltigkeit, unabhängig von Spekulation und Inflationssubventionen.',
    //   ],
    //   summary: {
    //     description:
    //       'Die App kombiniert ein öffentliches, offenes, dezentrales Hauptbuch mit Governance-Konzepten, die in etablierten Rechtssystemen erprobt und getestet wurden. Sie legt alle von den Benutzern der App vereinbarten Regeln fest. Root-Nodes dienen als Wächter dieser Regeln. Stakeholder können ihre Rechte über einen Streitbeilegungsmechanismus auf der Grundlage etablierter internationaler privater Schiedsregeln durchsetzen.',
    //     goal: 'Die App kombiniert die Vorteile eines öffentlichen, offenen und dezentralen Hauptbuchs mit der Transparenz durchsetzbarer privater Verträge. Hauptziel ist es, die Anzahl der Drittanbieter, die an allen Finanztransaktionen beteiligt sind, zu reduzieren. Mit App-Token können Sie sie einem anderen Validator-Node delegieren, dem Sie vertrauen. Die Delegation von App erhöht den Verantwortungsbereich eines Validators und bewegt ihn auf der Validator-Long-Liste nach oben. Validators erhalten eine Belohnung für die Blockgenerierung. Diese Belohnung wird entsprechend eines vom Validator-Node-Betreiber vordefinierten Verhältnisses aufgeteilt und an jeden potenziellen Stake-Delegator verteilt. Auf diese Weise kann ein App-Token-Inhaber an der Block-Belohnung verdienen, ohne aktiv einen Validator-Node zu betreiben. Sie können eine Belohnung für Ihre in Ihrem Tresor gesperrten App-Token verdienen, abhängig vom systemweit festgelegten Parameter der Belohnungsrate für App-Token-Inhaber. Aktive Validator- und Root-Nodes erhalten Staking-Belohnungen in Form des nativen Tokens dieser Kette. Sie können eine unterstützte synthetische Asset (z. B. QUSD) einzahlen und Zinsbelohnungen verdienen.',
    //     result:
    //       '1. Das wirtschaftliche Modell soll langfristig nachhaltig sein. 2. Die zugrunde liegenden wirtschaftlichen Anreize sollen die Sicherheit und Robustheit der App unterstützen. 3. Die Wirtschaftlichkeit der App soll ein gesundes Machtgleichgewicht zwischen den verschiedenen Stakeholder-Gruppen, die an der Governance der App beteiligt sind, unterstützen. Diese Ziele werden durch das tokeneconomische Design der App erreicht.',
    //     industry: 'Sonstiges',
    //   },
    //   tech_stack: {
    //     frontend:
    //       'TypeScript, Styled Components, React-Redux, Redux-Saga, React.js',
    //     devops: 'Docker',
    //     libraries_used:
    //       'CRA with Vite, Web3, i18next, Sentry, web3-react/core, SDK, Web 3 contracts',
    //   },
    //   images: [
    //     '/images/cases/blockchain-based-legal-governance-system-1.jpg',
    //     '/images/cases/blockchain-based-legal-governance-system-2.jpg',
    //     '/images/cases/blockchain-based-legal-governance-system-3.jpg',
    //     '/images/cases/blockchain-based-legal-governance-system-4.jpg',
    //     '/images/cases/blockchain-based-legal-governance-system-5.jpg',
    //     '/images/cases/blockchain-based-legal-governance-system-6.jpg',
    //     '/images/cases/blockchain-based-legal-governance-system-7.jpg',
    //   ],
    // },

    // {
    //   id: 5,
    //   slug: 'admin-panel-for-a-trading-education-business',
    //   thumbnail:
    //     '/images/cases/admin-panel-for-a-trading-education-business-4.jpg',
    //   title: 'Admin-Panel für ein Trading-Education-Unternehmen',
    //   noindex: true,
    //   summary: {
    //     description:
    //       'Das Admin-Panel verwaltet die Plattform, die neuen Händlern dabei hilft, ihre Karriere als Trader aufzubauen. Dieser Teil des Admin-Tools ist für das Team des Unternehmenseigentümers erstellt und umfasst Kundenmanagement und Statistiken. Der UI-Teil besteht auch aus einer Handelsplattform, Charts, technischen Indikatoren, Öffnen von Trades und mehreren Charts.',
    //     goal: 'Das Ziel ist, den Schülern und Bildungsmaterial der Trading-Education-Webplattform besser mit Hilfe von Diagrammen, internem CRM-System, Datenmanagement und anderen Funktionen zu verwalten, um die Marketing- und Geschäftsstrategie, die Zielgruppe des Produkts und die Preisgestaltung zu optimieren.',
    //     result:
    //       'Erhebliche Steigerung des Gewinns nach Möglichkeit zur besseren Verwaltung von Kunden, Preisen und Bildungsmaterialien über das Admin-Panel.',
    //     industry: 'Bildung, Finanzmärkte, Handel',
    //   },
    //   tech_stack: {
    //     backend: 'Koa, Koa-router',
    //     frontend: 'React, Redux, TS, React Context',
    //   },
    //   images: [
    //     '/images/cases/admin-panel-for-a-trading-education-business-1.jpg',
    //     '/images/cases/admin-panel-for-a-trading-education-business-2.jpg',
    //     '/images/cases/admin-panel-for-a-trading-education-business-3.jpg',
    //     '/images/cases/admin-panel-for-a-trading-education-business-4.jpg',
    //   ],
    // },

    // {
    //   id: 6,
    //   slug: 'cyber-security-software',
    //   thumbnail: '/images/cases/cyber-security-software-1.jpg',
    //
    //   title: 'Cyber-Sicherheitssoftware',
    //   noindex: true,
    //   features: [
    //     'Überwachung, Analyse, Profilerstellung und Abmilderung von Cyber-Sicherheitsvorfällen.',
    //     'Malware-Schutz überprüft interne Prozesse und Aktivitäten auf Kernel- oder Registry-Ebene auf verdächtiges und anomales Verhalten.',
    //     'Cyber-Sicherheitsmanagement kann auf einem Smart-Gerät an jedem Ort durchgeführt werden und nicht nur auf einem Desktop-Gerät.',
    //     'Zugriffe aus anonymen Netzwerken in eine Umgebung stellen eine offensichtliche Bedrohung dar, die verhindert werden sollte. Ein vorausschauendes Cyber-Sicherheitsprodukt muss in der Lage sein, den Verkehr zu blockieren, der von anonymen Netzwerken wie TOR stammt.',
    //     'Ein Security Information and Event Management System sammelt Ereignisse aus allen Quellen im Netzwerk, stellt eine Zeitachse und historische Daten bereit und wird für Ereigniskorrelierungszwecke in fortschrittlichen Lösungen wie ACSIA verwendet.',
    //     'Integriert EDR-, SIEM-, IPS- und IDS-Funktionen in eine einzige umfassende Lösung.',
    //     'Die Fähigkeit, Cyber-Sicherheitsbedrohungen zu erkennen und zu beheben, ermöglicht es Endbenutzern, die Empfehlungen der Cyber-Defense-Plattform automatisch oder manuell auszuwählen.',
    //     'Die Einfachheit der Installation spiegelt die Komplexität des Produkts wider, um es zu betreiben und zu verwalten. ACSIA wird in der Regel in 20 Minuten installiert.',
    //     'Das Produkt ist mit physischen und/oder virtuellen Umgebungen kompatibel, die geschützt werden müssen.',
    //     'Ein Intrusion Detection System ist ein Gerät oder eine Softwareanwendung, die ein Netzwerk oder Systeme auf bösartige Aktivitäten oder Verstöße gegen die Richtlinien überwacht.',
    //   ],
    //   summary: {
    //     description:
    //       'Das Unternehmen entwickelt und vertreibt Software auf der Grundlage von Open-Source-Technologie, die für große und mittelständische Unternehmen gleichermaßen erschwinglich ist. Der App-Markt integriert EDR-, SIEM-, IPS- und IDS-Funktionen in eine einzige umfassende Lösung, die alle kritischen Daten Ihrer Organisation schützt. Unser Produkt wurde von vielen mittelständischen bis großen Unternehmen in verschiedenen Branchen wie Fintech, Bankwesen, Medien, Versicherungen und Technologie angenommen. Die App erledigt die lästige Arbeit der Sicherheitsanalyse - Überwachung, Analyse, Profilerstellung und Abmilderung von Cyber-Sicherheitsvorfällen.',
    //     goal: 'Schützen Sie kritische Daten im Kern jeder Organisation.',
    //     result:
    //       'Die Verwendung der App hilft, alle kritischen Daten Ihrer Organisation zu schützen.',
    //     industry: 'Andere',
    //   },
    //   tech_stack: {
    //     backend: 'Java, Spring Frameworks, Go',
    //     db: 'MariaDB, Elasticsearch, MongoDB',
    //     frontend: 'React.js',
    //     devops: 'ossec, osquery',
    //     libraries_used: 'RabbitMq',
    //   },
    //   images: [
    //     '/images/cases/cyber-security-software-1.jpg',
    //     '/images/cases/cyber-security-software-2.jpg',
    //     '/images/cases/cyber-security-software-3.jpg',
    //     '/images/cases/cyber-security-software-4.jpg',
    //   ],
    // },

    // {
    //   id: 7,
    //   slug: 'madvalorem',
    //   thumbnail: '/images/cases/madvalorem-1.jpg',
    //   title: 'Madvalorem',
    //   noindex: true,
    //   features: [
    //     'Zuweisung von Zugriffsrechten nach Rollen',
    //     'Integration mit verschiedenen Drittanbieterdiensten',
    //     'Verwaltung der Geschäfte von Kunden',
    //   ],
    //   summary: {
    //     description:
    //       'Das System wurde geschaffen, um die Geschäftsdaten und -prozesse des Unternehmens effektiv zu erfassen, zu speichern und zu verwalten.',
    //     goal: 'Effizienter werden, Kosten sparen, Mitarbeiter zufriedenstellen, Organisationdynamik verstehen, Kundenzufriedenheit verbessern, Marketingkampagnen erstellen, das Geschäft effizienter gestalten.',
    //     result:
    //       'Eine Beta-Version der App mit voll funktionsfähigem Workflow wurde erstellt, damit der Kunde sehen kann, wie die Idee in der Praxis umgesetzt wird.',
    //     industry: 'Immobilienwirtschaft',
    //   },
    //   tech_stack: {
    //     backend: 'Node.js',
    //     frontend: 'Angular',
    //     db: 'MySQL',
    //     project_management: 'JIRA, Bitbucket, Trello',
    //   },
    //   images: [
    //     '/images/cases/madvalorem-1.jpg',
    //     '/images/cases/madvalorem-2.jpg',
    //     '/images/cases/madvalorem-3.jpg',
    //     '/images/cases/madvalorem-4.jpg',
    //     '/images/cases/madvalorem-5.jpg',
    //     '/images/cases/madvalorem-6.jpg',
    //     '/images/cases/madvalorem-7.jpg',
    //     '/images/cases/madvalorem-8.jpg',
    //     '/images/cases/madvalorem-9.jpg',
    //   ],
    // },

    // {
    //   id: 8,
    //   slug: 'guide-zang',
    //   thumbnail: '/images/cases/guide-zang-4.jpg',
    //   title: 'GuideZang',
    //   noindex: true,
    //   features: [
    //     'Erstellung von mobilen Websites mit speziellem GuideZang-Interface',
    //     'Einstellung von individuellen Hintergrundbildern',
    //     'Verwaltung von Inhalten',
    //     'Verwaltung von Seitenvorlagen',
    //     'Einzigartige Links für jede separate Website',
    //     'Benutzerstatistiken',
    //     'Vorschau-Modus für Seiten',
    //     'Verwaltung von Abonnements',
    //   ],
    //   summary: {
    //     description:
    //       'GuideZang-Dienst ist eine Reisezielmarketing-App, die entwickelt wurde, um kleine mobile Websites mit Informationen zu verschiedenen Reisezielen zu verwalten, zu erstellen und zu bearbeiten.',
    //     goal: 'Die Geschäftsidee bestand darin, ein Instrument zu entwickeln, das von Reisebüros zur Beschreibung von Reisezielen für ihre potenziellen Kunden verwendet werden sollte. Die wichtigsten Vorteile der GuideZang-App sind die schnelle Erstellung von lesbarem und übersichtlich strukturiertem Inhalt, eigenes Design sowie UX-Architektur, die speziell für die Arbeit von Reisebüros entwickelt wurde.',
    //     result:
    //       'Die App ist entwickelt und erfolgreich gestartet worden. Insbesondere können Agenturen sie verwenden, um eigene Reiseberater für ihre Kunden zu erstellen. Die Nutzung erfolgt über einen Link und die Information kann direkt abgerufen werden!',
    //
    //     industry: 'Marketing & Werbung',
    //   },
    //   tech_stack: {
    //     backend: 'Node.js',
    //     frontend: 'React.js, HTML, CSS, Redux',
    //     db: 'MongoDB',
    //     devops: 'CI, DigitalOcean droplets, SSL',
    //     qa: 'Java quality automation, Manual testing',
    //     project_management: 'JIRA, Bitbucket, Slack',
    //   },
    //   images: [
    //     '/images/cases/guide-zang-1.jpg',
    //     '/images/cases/guide-zang-2.jpg',
    //     '/images/cases/guide-zang-3.jpg',
    //     '/images/cases/guide-zang-4.jpg',
    //     '/images/cases/guide-zang-5.jpg',
    //     '/images/cases/guide-zang-6.jpg',
    //   ],
    // },

    {
      id: 9,
      slug: 'prospecting',
      thumbnail: '/images/cases/prospecting-1.jpg',
      title: 'Prospecting',
      noindex: true,
      summary: {
        description:
          'Die Anwendung wurde entwickelt, um die Listen potenzieller Kunden von Prospecting-Nutzern zu erstellen und zu verwalten, deren E-Mails mit Hilfe der LinkedIn-Suche und der E-Mail-Jagd-App eines Drittanbieters empfangen wurden.',
        goal: 'Die Geschäftsidee war es, ein MVP zu entwickeln, das Abonnements für die Leute anbieten und verkaufen kann, damit sie Listen von potenziellen Kunden erstellen können, während sie bequem in LinkedIn suchen. Dies ist schneller und einfacher, als die E-Mails der einzelnen Personen manuell zu suchen. Prospecting ist also eine App, die die Automatisierung von Outbound-Marketing-Workflows ermöglicht.',
        result:
          'Die Anwendung wird erstellt und gestartet. Die Plattform kann die weitere Geschäfts- und Marketingentwicklung vorantreiben.',
        industry: 'Marketing & Werbung',
      },
      tech_stack: {
        backend: 'Java',
        db: 'MySQL',
        frontend: 'HTML, CSS, JS, Bootstrap',
      },
      images: [
        '/images/cases/prospecting-1.jpg',
        '/images/cases/prospecting-2.jpg',
        '/images/cases/prospecting-3.jpg',
      ],
    },
  ],
};
