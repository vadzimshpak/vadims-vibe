export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  /** Путь к картинке в public, например "/projects/cover.jpg" */
  image?: string;
  /** Подробное описание проекта (абзацы — через двойной перенос строки) */
  description?: string;
  /** Ссылка на живой проект или репозиторий */
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "tfmetal",
    title: "TFMetal",
    summary:
      "Сайт-обменник для внутриигровых вещей Team Fortress 2, ранее был известен как TFTrade.net",
    stack: ["Next.js", "TypeScript", "CSS", "Tailwind CSS", "Redis", "PostgreSQL", "Prisma"],
    image: "/projects/tfmetal.jpg",
    description:
      "Сайт для обмена внутриигровыми предметами TF2: объявления, фильтры, уведомления.\n\nРеализованы авторизация через Steam, работа с инвентарём, поиск и отображение предложений. Бэкенд на Next.js API Routes, БД PostgreSQL и Prisma, кэш Redis. Интерфейс на Tailwind CSS.",
    url: "https://tfmetal.store",
  },
  {
    slug: "3dmania",
    title: "3DMania",
    summary:
      "Сайт для генерации 3D моделей",
    stack: ["Next.js", "TypeScript", "CSS", "Prisma", "Cursor"],
    image: "/projects/3dmania.jpg",
    description: "Сайт для генерации 3D моделей. Полностью сделанный с ИИ.",
    url: "https://3dmania.space",
  },
  {
    slug: "unity-bbf",
    title: "Unity игра - Bound By Flame",
    summary:
      "Убегалка с черчением знаков",
    stack: ["Unity"],
    image: "/projects/bbf.jpg",
    description: "Первая игра, в которую было влито много сил. Многие прошлые проекты были для меня просто упражнениями, а эта была настоящим творческим процессом.",
    url: "https://play.google.com/store/apps/details?id=com.eastcult.boundbyflame",
  },
  {
    slug: "megadonk",
    title: "Unity игра - Megadonk",
    summary: "Попытка мобильного клона для MegaBonk",
    stack: ["Godot"],
    description: "Задача была в том, чтобы сделать мобильную версию MegaBonk. Были достигнуты некоторые успехи.",
    image: "/projects/megadonk.jpg",
    url: "https://play.google.com/store/apps/details?id=com.eastcult.MegaDonk",
  },
  {
    slug: "vadims-vibe",
    title: "Сайт-портфолио",
    summary: "Сайт практически полностью сделанный с ИИ",
    stack: ["Cursor", "Next.js", "TypeScript", "CSS", "Tailwind CSS"],
    description: "Сайт практически полностью сделанный с ИИ. Идея была в том, чтобы сделать сайт-портфолио, который был бы сделан с ИИ.",
    image: "/projects/portfolio.jpg",
    url: "https://vadims-vibe.ru",
  },
];

export const findProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

