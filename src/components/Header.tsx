import { Container } from './Container';
import logoWhite from '../assets/logo-white.png';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
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
        </div>
      </Container>
    </header>
  );
}
