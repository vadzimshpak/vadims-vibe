export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "creative-portfolio",
    title: "Creative Portfolio",
    summary:
      "Минималистичное портфолио с акцентом на визуал и плавные анимации.",
    stack: ["Next.js", "TypeScript", "CSS"],
  },
  {
    slug: "design-system-lab",
    title: "Design System Lab",
    summary:
      "Набор UI-компонентов с продуманной типографикой, отступами и токенами дизайна.",
    stack: ["React", "Storybook", "Design Tokens"],
  },
  {
    slug: "interaction-showcase",
    title: "Interaction Showcase",
    summary: "Коллекция микро-анимаций и интерактивных экспериментов в вебе.",
    stack: ["Framer Motion", "Next.js"],
  },
];

export const findProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

