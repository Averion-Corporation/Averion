import { About } from '../components/About';
import { CTA } from '../components/CTA';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Pricing } from '../components/Pricing';
import { Process } from '../components/Process';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
