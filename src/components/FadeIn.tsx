import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeInUp({ children, delay = 0, className }: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
