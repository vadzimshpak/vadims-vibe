import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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
              <Link href="/" className="site-header__nav-item site-header__nav-item--muted">
                Главная
              </Link>
              <Link
                href="/about"
                className="site-header__nav-item site-header__nav-item--active"
              >
                Обо мне
              </Link>
              <Link
                href="/contacts"
                className="site-header__nav-item site-header__nav-item--muted"
              >
                Контакты
              </Link>
            </nav>
          </div>
        </header>

        <main className="page-main">
          <section className="intro">
            <div className="intro__content">
              <h1 className="intro__title">Обо мне</h1>
              <p className="intro__text">
                Веб-разработка, геймдев и проекты, в которые вкладываюсь по-настоящему.
              </p>
            </div>
            <div className="intro__media">
              <Image
                src="/myphoto.jpg"
                alt=""
                width={260}
                height={347}
                className="intro__media-image"
              />
            </div>
          </section>

          <section className="about">
            <div className="about__content">
              <p className="about__text">
                Занимаюсь веб-разработкой и геймдевом: делаю интерфейсы, бэкенды и
                иногда игры от идеи до релиза.
              </p>

              <p className="about__text">
                В вебе предпочитаю Next.js и TypeScript: от лендингов до сервисов
                с авторизацией, базой и кэшем — как в проекте TFMetal, сайте для
                обмена внутриигровыми предметами TF2 с авторизацией через Steam,
                поиском и уведомлениями на стеке Next.js, PostgreSQL, Prisma и Redis.
              </p>

              <p className="about__text">
                В играх пробовал Unity и Godot. Bound By Flame — убегалка с черчением
                знаков — была первым проектом, в который вложил много сил и который
                ощутил как полноценный творческий процесс, а не просто упражнение.
                В Megadonk делал мобильный клон MegaBonk на Godot и довёл задумку
                до релиза в сторах.
              </p>

              <p className="about__text">
                Сейчас фокус на фронтенде и UI/UX: аккуратный интерфейс, понятные
                сценарии и по возможности — живой продукт или открытый код. Все
                проекты из витрины можно посмотреть на главной и по ссылкам перейти
                на сайты или в сторы.
              </p>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <nav className="site-footer__nav">
              <Link href="/" className="site-footer__nav-item">
                Главная
              </Link>
              <Link href="/about" className="site-footer__nav-item">
                Обо мне
              </Link>
              <Link href="/contacts" className="site-footer__nav-item site-footer__nav-item--muted">
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
