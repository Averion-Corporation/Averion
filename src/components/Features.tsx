import { motion } from 'framer-motion';
import { Shield, Sparkles, Cpu, Layers, Cloud, Activity } from 'lucide-react';
import { Container } from './Container';
import { FadeInUp } from './FadeIn';
import { SectionPill } from './SectionPill';
import { useLanguage } from '../i18n/LanguageContext';

export function Features() {
  const { t } = useLanguage();
  const features = [
    { ...t.features.items[0], icon: Sparkles },
    { ...t.features.items[1], icon: Layers },
    { ...t.features.items[2], icon: Cpu },
    { ...t.features.items[3], icon: Shield },
    { ...t.features.items[4], icon: Cloud },
    { ...t.features.items[5], icon: Activity },
  ];

  return (
    <section id="features" className="py-24">
      <Container>
        <FadeInUp className="mx-auto max-w-2xl text-center">
          <SectionPill className="mx-auto">{t.features.pill}</SectionPill>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            {t.features.title}
          </h2>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-white/20"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition group-hover:scale-105">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/30 via-violet-500/25 to-fuchsia-500/25 blur-[10px]" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/25 via-violet-500/20 to-fuchsia-500/20" />
                <feature.icon className="relative z-10 h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
