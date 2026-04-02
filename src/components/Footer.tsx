import { FaGithub } from 'react-icons/fa';
import { Container } from './Container';
import averionLogo from '../assets/Footer-logo.png';

export function Footer() {
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
              Building premium websites, applications, and platforms.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">Explore</p>
            <div className="flex flex-col gap-2">
              <a href="#features" className="transition-colors hover:text-white">Capabilities</a>
              <a href="#product" className="transition-colors hover:text-white">About</a>
              <a href="#pricing" className="transition-colors hover:text-white">Engagements</a>
              <a href="#contact" className="transition-colors hover:text-white">Contact</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">Company</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-white">Case Studies</a>
              <a href="https://github.com/averion" className="transition-colors hover:text-white">GitHub</a>
              <a href="/press-kit" className="transition-colors hover:text-white">Press Kit</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">Legal</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-white">License</a>
            </div>
          </div>
        </div>
        <div className="mt-10 h-px w-full bg-white/10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
          <span>© 2026 Averion Corporation™. All rights reserved.</span>
          <a
            href="https://github.com/Averion-Corporation"
            className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
            aria-label="Averion Corporation on GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
