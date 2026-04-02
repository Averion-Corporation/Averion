import { motion } from 'framer-motion';

type SectionPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionPill({ children, className }: SectionPillProps) {
  return (
    <motion.span
      className={`section-pill inline-flex items-center justify-center rounded-full border border-purple-300/40 px-5 py-2 text-xs font-semibold uppercase text-purple-100 ${
        className ?? ''
      }`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(99, 102, 241, 0.35), rgba(139, 92, 246, 0.4), rgba(217, 70, 239, 0.35))',
      }}
    >
      {children}
    </motion.span>
  );
}
