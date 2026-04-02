import LottieModule from 'lottie-react';
import { FaGithub } from 'react-icons/fa';
import { Container } from './Container';
import { useLanguage } from '../i18n/LanguageContext';
import averionLogo from '../assets/Footer-logo.png';
import usaFlag from '../assets/localizer/USA.json';
import russiaFlag from '../assets/localizer/Russia.json';

const Lottie = (LottieModule as unknown as { default?: typeof LottieModule }).default ?? LottieModule;

export function Footer() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-14">
      <Container>
        <div className="grid gap-10 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <img
                src={averionLogo}
                alt="Averion Corporation"
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
                className="h-14 w-auto select-none"
              />
            </div>
            <p className="max-w-xs text-sm text-zinc-400">
              {t.footer.tagline}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">
              {t.footer.exploreTitle}
            </p>
            <div className="flex flex-col gap-2">
              <a href="#features" className="transition-colors hover:text-white">{t.footer.links.capabilities}</a>
              <a href="#product" className="transition-colors hover:text-white">{t.footer.links.about}</a>
              <a href="#pricing" className="transition-colors hover:text-white">{t.footer.links.engagements}</a>
              <a href="#contact" className="transition-colors hover:text-white">{t.footer.links.contact}</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">
              {t.footer.companyTitle}
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-white">{t.footer.links.caseStudies}</a>
              <a href="https://github.com/Averion-Corporation" className="transition-colors hover:text-white">GitHub</a>
              <a href="/press-kit" className="transition-colors hover:text-white">{t.footer.links.pressKit}</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">
              {t.footer.legalTitle}
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-white">{t.footer.links.privacy}</a>
              <a href="#" className="transition-colors hover:text-white">{t.footer.links.terms}</a>
              <a href="https://github.com/Averion-Corporation/Averion" className="transition-colors hover:text-white">{t.footer.links.license}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 h-px w-full bg-white/10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
          <span>{t.footer.copyright}</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`flex h-6 w-6 items-center justify-center overflow-hidden rounded-full transition ${
                language === 'en' ? 'grayscale-0 opacity-100' : 'grayscale opacity-50'
              }`}
              aria-label={t.language.en}
            >
              <Lottie animationData={usaFlag} loop autoplay className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ru')}
              className={`flex h-6 w-6 items-center justify-center overflow-hidden rounded-full transition ${
                language === 'ru' ? 'grayscale-0 opacity-100' : 'grayscale opacity-50'
              }`}
              aria-label={t.language.ru}
            >
              <Lottie animationData={russiaFlag} loop autoplay className="h-6 w-6" />
            </button>
            <a
              href="https://github.com/Averion-Corporation"
              className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
              aria-label="Averion Corporation on GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
