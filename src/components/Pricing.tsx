import { Container } from './Container';
import { FadeInUp } from './FadeIn';
import { SectionPill } from './SectionPill';

const tiers = [
  {
    name: 'Foundation',
    price: 'From $2k',
    description: 'Discovery sprint + product blueprint for alignment.',
    features: [
      'Product strategy session',
      'Experience mapping',
      'Technical scope & roadmap',
    ],
  },
  {
    name: 'Scale',
    price: 'From $5k',
    description: 'Full product delivery with design, build, and launch.',
    features: [
      'Design system + UI',
      'Full-stack implementation',
      'Weekly stakeholder demos',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Platform modernization for complex organizations.',
    features: [
      'Multi-team enablement',
      'Security & compliance',
      'Long-term partnership',
    ],
  },
];

const glowColors = [
  'rgba(99, 102, 241, 0.35)',
  'rgba(139, 92, 246, 0.4)',
  'rgba(217, 70, 239, 0.35)',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <FadeInUp className="mx-auto max-w-2xl text-center">
          <SectionPill className="mx-auto">Engagements</SectionPill>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl whitespace-nowrap">
            Flexible engagements for ambitious teams
          </h2>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <FadeInUp key={tier.name}>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 pt-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden rounded-2xl">
                  <div
                    className="absolute left-1/2 top-0 h-56 w-[150%] -translate-x-1/2"
                    style={{
                      backgroundImage: `radial-gradient(circle at top, ${glowColors[index]}, transparent 60%)`,
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-extrabold uppercase tracking-wide text-white">
                    {tier.name}
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white">
                    {tier.price}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300">
                    {tier.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-white/10" />
                  <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
                  >
                    Start engagement
                  </a>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
