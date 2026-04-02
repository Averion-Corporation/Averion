import { Container } from './Container';
import { FadeInUp } from './FadeIn';
import { SectionPill } from './SectionPill';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="product" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeInUp>
            <div className="text-center lg:text-left">
              <SectionPill className="mx-auto lg:mx-0">{t.about.pill}</SectionPill>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                {t.about.title}
              </h2>
            </div>
            <p className="mt-5 text-lg text-zinc-300 text-center lg:text-left">
              {t.about.description}
            </p>
            <div className="mt-8 grid gap-4 text-sm text-zinc-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 text-center lg:text-left">
                <p className="text-2xl font-semibold text-white">{t.about.stats[0].value}</p>
                <p className="mt-1">{t.about.stats[0].label}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 text-center lg:text-left">
                <p className="text-2xl font-semibold text-white">{t.about.stats[1].value}</p>
                <p className="mt-1">{t.about.stats[1].label}</p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 pt-12 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="mt-3 h-px w-full rounded-full bg-white/10 mx-2" />
              <p className="mt-6 text-sm font-semibold uppercase text-zinc-200">
                {t.about.deliverTitle}
              </p>
              <ul className="mt-5 space-y-4 text-sm text-zinc-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  {t.about.deliverItems[0]}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  {t.about.deliverItems[1]}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  {t.about.deliverItems[2]}
                </li>
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-6 text-white">
                <p className="text-sm font-medium text-white">
                  {t.about.quote}
                </p>
                <p className="mt-3 text-xs text-white/60">
                  {t.about.quoteRole}
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}
