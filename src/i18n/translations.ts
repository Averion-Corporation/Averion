export type Language = 'en' | 'ru';

export const translations = {
  en: {
    language: {
      label: 'Language',
      en: 'English',
      ru: 'Russian',
    },
    nav: {
      features: 'Features',
      product: 'Product',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      headlineAccent: 'builds digital products',
      headlineTail: 'that perform',
      description:
        'Averion Corporation is a product and engineering studio creating premium websites, applications, and platforms for ambitious teams. We align strategy, design, and delivery to build outcomes that last.',
      primaryCta: 'Start a Project',
      secondaryCta: 'See Capabilities',
    },
    about: {
      pill: 'About Averion',
      title: 'Premium digital experiences built with precision',
      description:
        'Averion Corporation™ partners with teams to ship web applications, design systems, and platform infrastructure that is resilient at scale. We blend product strategy with deep engineering to deliver experiences that feel effortless and measurable.',
      stats: [
        { value: '12+ years', label: 'Enterprise delivery' },
        { value: '70+ launches', label: 'Successful products' },
      ],
      deliverTitle: 'What we deliver',
      deliverItems: [
        'End-to-end product design and UI systems.',
        'Cloud-ready applications and API platforms.',
        'Continuous delivery with observability built in.',
      ],
      quote:
        '"Averion helped us modernize our core systems without disrupting day-to-day operations."',
      quoteRole: 'Chief Technology Officer, Enterprise SaaS',
    },
    features: {
      pill: 'Capabilities',
      title: 'Built for ambitious digital products',
      items: [
        {
          title: 'Strategic Discovery',
          description: 'Roadmap alignment, product goals, and technical feasibility mapping.',
        },
        {
          title: 'Premium UI Systems',
          description: 'Design systems, component libraries, and brand-consistent UX.',
        },
        {
          title: 'Full-Stack Delivery',
          description: 'Web apps, APIs, and scalable infrastructure built to grow.',
        },
        {
          title: 'Secure by Default',
          description: 'Security, compliance, and privacy built into every layer.',
        },
        {
          title: 'Cloud & DevOps',
          description: 'CI/CD, monitoring, and reliable deployments with observability.',
        },
        {
          title: 'Data & Insights',
          description: 'Analytics and dashboards that connect delivery to outcomes.',
        },
      ],
    },
    process: {
      pill: 'Process',
      title: 'How we deliver with your team',
      steps: [
        { title: 'Discover', description: 'Define outcomes, users, and the technical opportunity.' },
        { title: 'Design', description: 'Create premium UX, flows, and a scalable design system.' },
        { title: 'Build', description: 'Deliver full-stack development with quality guardrails.' },
        { title: 'Launch', description: 'Release, measure, and optimize based on real data.' },
      ],
    },
    pricing: {
      pill: 'Engagements',
      title: 'Flexible engagements for ambitious teams',
      tiers: [
        {
          name: 'Foundation',
          price: 'From $2k',
          description: 'Discovery sprint + product blueprint for alignment.',
          features: ['Product strategy session', 'Experience mapping', 'Technical scope & roadmap'],
        },
        {
          name: 'Scale',
          price: 'From $5k',
          description: 'Full product delivery with design, build, and launch.',
          features: ['Design system + UI', 'Full-stack implementation', 'Weekly stakeholder demos'],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Platform modernization for complex organizations.',
          features: ['Multi-team enablement', 'Security & compliance', 'Long-term partnership'],
        },
      ],
      cta: 'Start engagement',
    },
    cta: {
      pill: 'Start now',
      title: 'Ready to build your next product?',
      description:
        'Tell us about your roadmap. We will craft the strategy, design, and engineering to take you there.',
      button: 'Start a Project',
    },
    footer: {
      tagline: 'Building premium websites, applications, and platforms.',
      exploreTitle: 'Explore',
      companyTitle: 'Company',
      legalTitle: 'Legal',
      links: {
        capabilities: 'Capabilities',
        about: 'About',
        engagements: 'Engagements',
        contact: 'Contact',
        caseStudies: 'Case Studies',
        pressKit: 'Press Kit',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        license: 'License',
      },
      copyright: '© 2026 Averion Corporation™. All rights reserved.',
    },
    presskit: {
      title: 'Press Kit',
      heading: 'Averion Corporation Media Assets',
      description:
        'Download official logos and copy brand colors. All assets below are ready for press, partnerships, and marketing.',
      back: 'Back to site',
      colorsTitle: 'Brand Colors',
      colorsSubtitle: 'Copy RGBA or HEX values for design systems and UI work.',
      rgba: 'RGBA',
      hex: 'HEX',
      logosTitle: 'Logos',
      logosSubtitle: 'Click copy to grab the filename or download the asset directly.',
      copy: 'Copy',
      copied: 'Copied',
      copyName: 'Copy name',
      download: 'Download',
    },
  },
  ru: {
    language: {
      label: 'Язык',
      en: 'English',
      ru: 'Русский',
    },
    nav: {
      features: 'Возможности',
      product: 'О нас',
      pricing: 'Тарифы',
      contact: 'Контакты',
    },
    hero: {
      headlineAccent: 'создает цифровые продукты',
      headlineTail: 'которые работают',
      description:
        'Averion Corporation — продуктовая и инженерная студия, создающая премиальные сайты, приложения и платформы для амбициозных команд. Мы объединяем стратегию, дизайн и разработку, чтобы давать устойчивый результат.',
      primaryCta: 'Начать проект',
      secondaryCta: 'Смотреть возможности',
    },
    about: {
      pill: 'Об Averion',
      title: 'Премиальные цифровые решения, собранные точно',
      description:
        'Averion Corporation™ помогает командам выпускать веб‑приложения, дизайн‑системы и платформенную инфраструктуру, устойчивую к росту. Мы соединяем продуктовую стратегию с глубокой инженерией, создавая измеримый эффект.',
      stats: [
        { value: '12+ лет', label: 'Корпоративная разработка' },
        { value: '70+ запусков', label: 'Успешные продукты' },
      ],
      deliverTitle: 'Что мы делаем',
      deliverItems: [
        'Дизайн продукта и UI‑системы под ключ.',
        'Облачные приложения и API‑платформы.',
        'Непрерывная поставка с наблюдаемостью.',
      ],
      quote:
        '«Averion помогла модернизировать ключевые системы без остановки повседневных процессов.»',
      quoteRole: 'CTO, Enterprise SaaS',
    },
    features: {
      pill: 'Возможности',
      title: 'Создано для амбициозных цифровых продуктов',
      items: [
        {
          title: 'Стратегический discovery',
          description: 'Синхронизация по целям, продукту и технической реализуемости.',
        },
        {
          title: 'Премиальные UI‑системы',
          description: 'Дизайн‑системы, библиотеки компонентов и консистентный UX.',
        },
        {
          title: 'Полный цикл разработки',
          description: 'Веб‑приложения, API и масштабируемая инфраструктура.',
        },
        {
          title: 'Безопасность по умолчанию',
          description: 'Безопасность, соответствие и приватность на каждом уровне.',
        },
        {
          title: 'Cloud & DevOps',
          description: 'CI/CD, мониторинг и надежные деплои с observability.',
        },
        {
          title: 'Данные и аналитика',
          description: 'Дашборды и аналитика, связывающие работу с результатами.',
        },
      ],
    },
    process: {
      pill: 'Процесс',
      title: 'Как мы работаем с вашей командой',
      steps: [
        { title: 'Исследование', description: 'Фиксируем цели, пользователей и возможности.' },
        { title: 'Дизайн', description: 'Проектируем UX, потоки и дизайн‑систему.' },
        { title: 'Разработка', description: 'Поставляем full‑stack с контролем качества.' },
        { title: 'Запуск', description: 'Выпускаем, измеряем и улучшаем по данным.' },
      ],
    },
    pricing: {
      pill: 'Тарифы',
      title: 'Гибкие форматы для амбициозных команд',
      tiers: [
        {
          name: 'База',
          price: 'от $2k',
          description: 'Discovery‑спринт и продуктовый план для синхронизации.',
          features: ['Сессия продуктовой стратегии', 'Карта пользовательского опыта', 'Технический скоуп и роадмап'],
        },
        {
          name: 'Рост',
          price: 'от $5k',
          description: 'Полная поставка продукта: дизайн, разработка, запуск.',
          features: ['Дизайн‑система и UI', 'Full‑stack реализация', 'Еженедельные демо'],
        },
        {
          name: 'Корпоративный',
          price: 'Индивидуально',
          description: 'Модернизация платформ для сложных организаций.',
          features: ['Подключение команд', 'Безопасность и комплаенс', 'Долгосрочное партнерство'],
        },
      ],
      cta: 'Начать сотрудничество',
    },
    cta: {
      pill: 'Старт',
      title: 'Готовы строить следующий продукт?',
      description:
        'Расскажите о дорожной карте. Мы соберем стратегию, дизайн и инженерию, чтобы довести вас до цели.',
      button: 'Начать проект',
    },
    footer: {
      tagline: 'Создаем премиальные сайты, приложения и платформы.',
      exploreTitle: 'Навигация',
      companyTitle: 'Компания',
      legalTitle: 'Юридическое',
      links: {
        capabilities: 'Возможности',
        about: 'О нас',
        engagements: 'Тарифы',
        contact: 'Контакты',
        caseStudies: 'Кейсы',
        pressKit: 'Пресс‑кит',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        license: 'Лицензия',
      },
      copyright: '© 2026 Averion Corporation™. Все права защищены.',
    },
    presskit: {
      title: 'Пресс‑кит',
      heading: 'Медиа‑материалы Averion Corporation',
      description:
        'Скачайте официальные логотипы и копируйте фирменные цвета. Все материалы готовы для прессы, партнерств и маркетинга.',
      back: 'На сайт',
      colorsTitle: 'Фирменные цвета',
      colorsSubtitle: 'Копируйте значения RGBA или HEX для дизайна и UI.',
      rgba: 'RGBA',
      hex: 'HEX',
      logosTitle: 'Логотипы',
      logosSubtitle: 'Нажмите «Копировать», чтобы взять имя файла, или скачайте ассет.',
      copy: 'Копировать',
      copied: 'Скопировано',
      copyName: 'Копировать имя',
      download: 'Скачать',
    },
  },
} as const;
