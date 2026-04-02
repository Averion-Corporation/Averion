import { Container } from './Container';
import { FadeInUp } from './FadeIn';
import { SectionPill } from './SectionPill';
import { useLanguage } from '../i18n/LanguageContext';

export function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section id="process" className="py-24">
      <Container>
        <FadeInUp className="mx-auto max-w-2xl text-center">
          <SectionPill className="mx-auto">{t.process.pill}</SectionPill>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            {t.process.title}
          </h2>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <FadeInUp key={step.title} delay={index * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="pointer-events-none absolute inset-x-0 top-6 bottom-0 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.45),transparent_60%)]" />
                </div>
                <div className="relative mb-6 h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                <div className="flex items-center gap-4">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-[13px] font-bold text-white">
                    <span className="relative z-10">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-300">
                  {step.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
