import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionPill } from '../components/SectionPill';

import averionBlack from '../assets/AVERION-black.png';
import averionWhite from '../assets/AVERION-white.png';
import averionFull from '../assets/AVERION.png';
import averionLogoBlack from '../assets/averion-logo-black.png';
import averionLogoWhite from '../assets/averion-logo-white.png';
import averionLogo from '../assets/averion-logo.png';
import averionCorpBlack from '../assets/averion-corp-black.png';
import averionCorpWhite from '../assets/averion-corp-white.png';
import averionCorp from '../assets/averion-corp.png';
import footerLogo from '../assets/Footer-logo.png';
import logoBlack from '../assets/logo-black.png';
import logoWhite from '../assets/logo-white.png';
import logoFull from '../assets/logo.png';

type LogoItem = {
  name: string;
  file: string;
  src: string;
  darkSafe?: boolean;
  background?: 'light' | 'dark' | 'neutral';
};

const brandColors = [
  'rgba(99, 102, 241, 0.35)',
  'rgba(139, 92, 246, 0.4)',
  'rgba(217, 70, 239, 0.35)',
];

const solidColors = ['#6366F159', '#8B5CF666', '#D946EF59'];

const logos: LogoItem[] = [
  { name: 'Logo Mark (Black)', file: 'logo-black.png', src: logoBlack, background: 'light' },
  { name: 'Logo Mark (White)', file: 'logo-white.png', src: logoWhite, darkSafe: true, background: 'dark' },
  { name: 'Logo Mark (Full)', file: 'logo.png', src: logoFull, background: 'neutral' },
  { name: 'Averion Wordmark (Black)', file: 'AVERION-black.png', src: averionBlack, background: 'light' },
  { name: 'Averion Wordmark (White)', file: 'AVERION-white.png', src: averionWhite, darkSafe: true, background: 'dark' },
  { name: 'Averion Wordmark (Full)', file: 'AVERION.png', src: averionFull, background: 'neutral' },
  { name: 'Averion Corporation (Black)', file: 'averion-corp-black.png', src: averionCorpBlack, background: 'light' },
  { name: 'Averion Corporation (White)', file: 'averion-corp-white.png', src: averionCorpWhite, darkSafe: true, background: 'dark' },
  { name: 'Averion Corporation (Full)', file: 'averion-corp.png', src: averionCorp, background: 'neutral' },
  { name: 'Averion Logo (Black)', file: 'averion-logo-black.png', src: averionLogoBlack, background: 'light' },
  { name: 'Averion Logo (White)', file: 'averion-logo-white.png', src: averionLogoWhite, darkSafe: true, background: 'dark' },
  { name: 'Averion Logo (Full)', file: 'averion-logo.png', src: averionLogo, background: 'neutral' },
  { name: 'Footer Logo', file: 'Footer-logo.png', src: footerLogo, background: 'neutral' },
];

type CopyState = Record<string, boolean>;

export function PressKitPage() {
  const [copied, setCopied] = useState<CopyState>({});

  const sections = useMemo(
    () =>
      logos.map((logo) => ({
        ...logo,
        downloadName: logo.file,
      })),
    []
  );

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied((prev) => ({ ...prev, [key]: true }));
      window.setTimeout(
        () => setCopied((prev) => ({ ...prev, [key]: false })),
        1400
      );
    } catch {
      setCopied((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-zinc-100">
      <header className="border-b border-white/10">
        <Container className="py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <SectionPill className="inline-flex">Press Kit</SectionPill>
              <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Averion Corporation Media Assets
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-300">
                Download official logos and copy brand colors. All assets below are
                ready for press, partnerships, and marketing.
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Back to site
            </a>
          </div>
        </Container>
      </header>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Brand Colors</h2>
                <p className="mt-2 text-sm text-zinc-400">
                  Copy RGBA or HEX values for design systems and UI work.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brandColors.map((color, index) => {
                const key = `rgba-${index}`;
                return (
                  <motion.div
                    key={color}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div
                      className="h-28 rounded-xl"
                      style={{ background: color }}
                    />
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase text-zinc-400">
                          RGBA
                        </p>
                        <p className="mt-2 text-sm text-white">{color}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(color, key)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white"
                      >
                        <span>{copied[key] ? 'Copied' : 'Copy'}</span>
                        <motion.span
                          key={copied[key] ? 'check' : 'copy'}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm"
                        >
                          {copied[key] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </motion.span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solidColors.map((color, index) => {
                const key = `hex-${index}`;
                return (
                  <motion.div
                    key={color}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div
                      className="h-28 rounded-xl"
                      style={{ background: color }}
                    />
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase text-zinc-400">
                          HEX
                        </p>
                        <p className="mt-2 text-sm text-white">{color}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(color, key)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white"
                      >
                        <span>{copied[key] ? 'Copied' : 'Copy'}</span>
                        <motion.span
                          key={copied[key] ? 'check' : 'copy'}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm"
                        >
                          {copied[key] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </motion.span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Logos</h2>
                <p className="mt-2 text-sm text-zinc-400">
                  Click copy to grab the filename or download the asset directly.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((logo, index) => {
                const key = `logo-${index}`;
                return (
                  <motion.div
                    key={logo.file}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div
                      className={`flex h-40 items-center justify-center rounded-xl border border-white/10 ${
                        logo.background === 'dark'
                          ? 'bg-black/60'
                          : logo.background === 'light'
                          ? 'bg-white'
                          : 'bg-zinc-200/20'
                      }`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-20 w-auto"
                        draggable={false}
                      />
                    </div>
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-white">{logo.name}</p>
                      <p className="mt-1 text-xs text-zinc-400">{logo.file}</p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => handleCopy(logo.file, key)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white"
                      >
                        <span>{copied[key] ? 'Copied' : 'Copy name'}</span>
                        <motion.span
                          key={copied[key] ? 'check' : 'copy'}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm"
                        >
                          {copied[key] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </motion.span>
                      </button>
                      <a
                        href={logo.src}
                        download={logo.downloadName}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-900 transition hover:translate-y-[-1px]"
                      >
                        Download
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
