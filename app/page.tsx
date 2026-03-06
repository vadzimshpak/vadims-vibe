import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="page page--full">
      <div className="page__gradient" />
      <div className="page__content">
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="site-header__logo">
              vadims-vibe
            </Link>
            <nav className="site-header__nav">
              <Link
                href="/"
                className="site-header__nav-item site-header__nav-item--active"
              >
                Главная
              </Link>
              <button
                type="button"
                className="site-header__nav-item site-header__nav-item--muted"
                disabled
              >
                Обо мне
              </button>
              <Link
                href="/contacts"
                className="site-header__nav-item site-header__nav-item--muted"
              >
                Контакты
              </Link>
            </nav>
          </div>
        </header>

        <main className="home-hero">
          <div className="home-hero__bg" aria-hidden />
          <div className="home-hero__overlay" aria-hidden />
          <div className="home-hero__content">
            <h1 className="home-hero__headline">
              Портфолио <span className="home-hero__accent">vadims-vibe</span>
            </h1>
            <p className="home-hero__sub">
              Frontend / UI / UX / И другое... — коллекция проектов с акцентом на аккуратный
              UI, анимации и продуманный пользовательский опыт.
            </p>
          </div>
        </main>

        <div className="page-main">
          <div className="projects-block">
            <section className="projects">
            <header className="projects__header">
              <h2 className="projects__title">Проекты</h2>
              <p className="projects__subtitle">
                Небольшая витрина того, над чем я работаю и что мне действительно
                интересно развивать.
              </p>
            </header>

            <div className="projects__column">
              {projects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`project-row project-row--${index % 2 === 0 ? "image-right" : "image-left"}`}
                >
                  <div className="project-row__content">
                    <h3 className="project-row__title">{project.title}</h3>
                    <p className="project-row__summary">{project.summary}</p>
                    <ul className="project-row__tags">
                      {project.stack.map((item) => (
                        <li key={item} className="project-row__tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-row__media">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt=""
                        width={800}
                        height={450}
                        className="project-row__image"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <span className="project-row__placeholder">{project.title}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            </section>
          </div>
        </div>

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
