import { useState } from 'react';
import LottieModule from 'lottie-react';
import { Container } from './Container';
import logoWhite from '../assets/logo-white.png';
import { useLanguage } from '../i18n/LanguageContext';
import usaFlag from '../assets/localizer/USA.json';
import russiaFlag from '../assets/localizer/Russia.json';

const Lottie = (LottieModule as unknown as { default?: typeof LottieModule }).default ?? LottieModule;

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState<'en' | 'ru' | null>(null);
  const navItems = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.product, href: '#product' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLanguageToggle = () => {
    if (isAnimating) return;
    const nextLanguage = language === 'en' ? 'ru' : 'en';
    setPendingLanguage(nextLanguage);
    setIsAnimating(true);
    window.setTimeout(() => {
      setLanguage(nextLanguage);
      setPendingLanguage(null);
      setIsAnimating(false);
    }, 700);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-transparent pt-4">
      <Container className="w-full">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-transparent px-6 py-4 backdrop-blur">
          <a
            href="#top"
            className="flex items-center gap-3"
            onContextMenu={(event) => event.preventDefault()}
          >
            <img
              src={logoWhite}
              alt="Averiov Corporation"
              draggable={false}
              className="h-8 w-auto select-none"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="relative hidden md:flex">
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/30"
              aria-label={t.language.label}
            >
              <span className="relative h-6 w-6 overflow-hidden">
                <span
                  className={`absolute left-0 top-0 h-6 w-6 rounded-full ${
                    isAnimating ? 'transition-transform duration-700 ease-in-out' : ''
                  } ${isAnimating ? 'translate-x-6' : 'translate-x-0'}`}
                >
                  <Lottie
                    animationData={language === 'en' ? usaFlag : russiaFlag}
                    loop
                    autoplay
                    className="h-6 w-6"
                  />
                </span>
                <span
                  className={`absolute left-0 top-0 h-6 w-6 rounded-full ${
                    isAnimating ? 'transition-transform duration-700 ease-in-out' : ''
                  } ${isAnimating ? 'translate-x-0' : '-translate-x-6'}`}
                >
                  <Lottie
                    animationData={(pendingLanguage ?? (language === 'en' ? 'ru' : 'en')) === 'en' ? usaFlag : russiaFlag}
                    loop
                    autoplay
                    className="h-6 w-6"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
