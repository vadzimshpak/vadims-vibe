import Link from "next/link";

const TELEGRAM_URL = "https://t.me/vshbiz";

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
              <button
                type="button"
                className="site-header__nav-item site-header__nav-item--muted"
                disabled
              >
                Обо мне
              </button>
              <Link
                href="/contacts"
                className="site-header__nav-item site-header__nav-item--active"
              >
                Контакты
              </Link>
            </nav>
          </div>
        </header>

        <main className="page-main page-main--centered">
          <section className="contacts">
            <h1 className="contacts__title">Контакты</h1>
            <p className="contacts__text">
              Напишите в Telegram — отвечу в удобное время.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contacts__telegram"
            >
              <TelegramIcon className="contacts__telegram-icon" />
              <span className="contacts__telegram-label">Написать в Telegram</span>
            </a>
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
                disabled
              >
                Обо мне
              </button>
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
