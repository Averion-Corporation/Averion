import { motion } from 'framer-motion';
import { Container } from './Container';
import { FadeInUp } from './FadeIn';
import { SectionPill } from './SectionPill';

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <FadeInUp>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-8 py-14 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="pointer-events-none absolute inset-x-0 top-6 bottom-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.45),transparent_60%)]" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-6 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <div className="relative text-center">
              <SectionPill className="mx-auto">Start now</SectionPill>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Ready to build your next product?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-sm text-zinc-300">
                Tell us about your roadmap. We will craft the strategy, design, and
                engineering to take you there.
              </p>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hello@averion.com"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
              >
                Start a Project
              </motion.a>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
