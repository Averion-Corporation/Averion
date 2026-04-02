import { motion } from 'framer-motion';
import { Container } from './Container';
import { FadeInUp } from './FadeIn';
import heroLogo from '../assets/averion-corp.png';
import averionWordmark from '../assets/AVERION-white.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-24 sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-[-6rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[120px]"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-4rem] top-24 h-[26rem] w-[26rem] rounded-full bg-indigo-500/15 blur-[120px]"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_55%)]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <Container className="relative">
        <FadeInUp className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <img
              src={heroLogo}
              alt="Averion Corporation"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              className="h-28 w-auto select-none sm:h-32 lg:h-36"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: 'easeOut' }}
            className="mt-6 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            <img
              src={averionWordmark}
              alt="Averion"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              className="inline-block h-7 w-auto align-baseline sm:h-9 lg:h-10"
            />{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.hero.headlineAccent}
            </span>{' '}
            {t.hero.headlineTail}
          </motion.h2>
          <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg">
            {t.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-glow transition"
            >
              {t.hero.primaryCta}
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/40 hover:text-white"
            >
              {t.hero.secondaryCta}
            </motion.a>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
