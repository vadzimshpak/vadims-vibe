import Link from "next/link";
import Image from "next/image";
import { findProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <div className="page page--full">
        <div className="page__gradient" />
        <div className="page__content">
          <header className="site-header">
            <div className="site-header__inner">
              <Link href="/" className="site-header__logo">vadims-vibe</Link>
              <nav className="site-header__nav">
                <Link href="/" className="site-header__nav-item">
                  Главная
                </Link>
              </nav>
            </div>
          </header>
          <main className="page-main page-main--centered">
            <section className="project-detail project-detail--empty">
              <h1 className="project-detail__title">Проект не найден</h1>
              <p className="project-detail__text">
                Возможно, ссылка устарела или проект ещё в разработке.
              </p>
              <Link href="/" className="button-link button-link--primary">
                Вернуться на главную
              </Link>
            </section>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--full">
      <div className="page__gradient" />
      <div className="page__content">
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="site-header__logo">vadims-vibe</Link>
            <nav className="site-header__nav">
              <Link href="/" className="site-header__nav-item">
                Главная
              </Link>
            </nav>
          </div>
        </header>

        <main className="page-main">
          <section className="project-detail">
            <header className="project-detail__header">
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__summary">{project.summary}</p>
            </header>

            {project.image && (
              <div className="project-detail__image-wrap">
                <Image
                  src={project.image}
                  alt=""
                  width={720}
                  height={400}
                  className="project-detail__image"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </div>
            )}

            <section className="project-detail__section">
              <h2 className="project-detail__section-title">Стек</h2>
              <ul className="project-detail__tags">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="project-detail__tag project-detail__tag--accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="project-detail__section">
              <h2 className="project-detail__section-title">
                Ссылка на проект
              </h2>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__link"
                >
                  Перейти на сайт →
                </a>
              ) : (
                <p className="project-detail__text project-detail__text--muted">
                  Ссылка на проект не предоставлена.
                </p>
              )}
            </section>

            <section className="project-detail__section">
              <h2 className="project-detail__section-title">
                Описание проекта
              </h2>
              {project.description ? (
                <div className="project-detail__description">
                  {project.description
                    .split(/\n\n+/)
                    .map((paragraph, i) => (
                      <p key={i} className="project-detail__text">
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
              ) : (
                <p className="project-detail__text project-detail__text--muted">
                  Описание пока не добавлено.
                </p>
              )}
            </section>

            <footer className="project-detail__footer">
              <Link href="/" className="button-link button-link--ghost">
                ← Вернуться ко всем проектам
              </Link>
            </footer>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <nav className="site-footer__nav">
              <Link href="/" className="site-footer__nav-item">
                Главная
              </Link>
              <button
                type="button"
                className="site-footer__nav-item site-footer__nav-item--muted"
              >
                Обо мне
              </button>
              <Link
                href="/contacts"
                className="site-footer__nav-item site-footer__nav-item--muted"
              >
                Контакты
              </Link>
            </nav>
            <p className="site-footer__copyright">
              © {new Date().getFullYear()} vadims-vibe
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

