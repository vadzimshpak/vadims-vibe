import Link from "next/link";

const TELEGRAM_URL = "https://t.me/vshbiz";
const GITHUB_URL = "https://github.com/vadzimshpak";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.648.5.5 5.823.5 12.326c0 5.222 3.438 9.646 8.207 11.207.6.116.82-.27.82-.597 0-.296-.011-1.081-.017-2.122-3.338.753-4.043-1.665-4.043-1.665-.546-1.427-1.335-1.808-1.335-1.808-1.09-.77.083-.754.083-.754 1.205.087 1.839 1.275 1.839 1.275 1.071 1.898 2.813 1.351 3.498 1.033.108-.802.42-1.352.763-1.662-2.665-.312-5.466-1.379-5.466-6.137 0-1.357.465-2.465 1.235-3.335-.124-.314-.536-1.573.117-3.281 0 0 1.008-.333 3.3 1.274a10.94 10.94 0 0 1 3.004-.421c1.018.005 2.044.145 3.004.421 2.291-1.607 3.297-1.274 3.297-1.274.655 1.708.243 2.967.119 3.281.77.87 1.233 1.978 1.233 3.335 0 4.771-2.805 5.821-5.476 6.127.431.385.815 1.143.815 2.305 0 1.665-.015 3.008-.015 3.417 0 .33.217.718.826.596C20.07 21.968 23.5 17.545 23.5 12.326 23.5 5.823 18.352.5 12 .5Z" />
    </svg>
  );
}

export default function ContactsPage() {
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
                className="site-header__nav-item site-header__nav-item--muted"
              >
                Обо мне
              </Link>
              <Link
                href="/contacts"
                className="site-header__nav-item site-header__nav-item--active"
              >
                Контакты
              </Link>
            </nav>
          </div>
        </header>

        <main className="contacts-hero">
          <div className="contacts-hero__bg" aria-hidden />
          <div className="contacts-hero__overlay" aria-hidden />
          <div className="contacts-hero__content">
            <h1 className="contacts-hero__headline">
              Свяжитесь со мной
            </h1>
            <p className="contacts-hero__sub">
              Напишите в Telegram или посмотрите проекты на GitHub — отвечу в удобное время.
            </p>
            <div className="contacts-hero__card">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-hero__btn contacts-hero__btn--primary"
              >
                <TelegramIcon className="contacts-hero__btn-icon" />
                <span>Написать в Telegram</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-hero__btn contacts-hero__btn--secondary"
              >
                <GithubIcon className="contacts-hero__btn-icon" />
                <span>Открыть GitHub</span>
              </a>
            </div>
          </div>
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <nav className="site-footer__nav">
              <Link href="/" className="site-footer__nav-item">
                Главная
              </Link>
              <Link href="/about" className="site-footer__nav-item site-footer__nav-item--muted">
                Обо мне
              </Link>
              <Link href="/contacts" className="site-footer__nav-item">
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
