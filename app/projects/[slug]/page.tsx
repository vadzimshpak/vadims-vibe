import Link from "next/link";
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
                Описание проекта
              </h2>
              <p className="project-detail__text">
                Здесь будет подробное описание проекта, ключевые решения по
                архитектуре, интересные UI-паттерны и технические детали. Позже
                можно будет добавить скриншоты, ссылки на репозиторий и
                демо-версию.
              </p>
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

