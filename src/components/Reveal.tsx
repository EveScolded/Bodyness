import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
