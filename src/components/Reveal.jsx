import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom brutal ease
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
