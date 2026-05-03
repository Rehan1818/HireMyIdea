import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './StatsBar.module.css';

const STATS = [
  { value: 200000, suffix: '+', label: 'Happy Families' },
  { value: 1, suffix: 'M+', label: 'Products Scanned' },
  { value: 10000, suffix: '+', label: 'Clean Restaurants' },
  { value: 3147, suffix: '+', label: '5-Star Reviews' },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const inc = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  const fmt = (n) => n >= 1000 ? (n >= 100000 ? Math.floor(n/1000)+'K' : n.toLocaleString()) : n;
  return <span>{fmt(count)}{suffix}</span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={styles.bar}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {STATS.map(({ value, suffix, label }, i) => (
        <motion.div
          key={label}
          className={styles.stat}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className={styles.value}>
            <CountUp target={value} suffix={suffix} active={inView} />
          </div>
          <div className={styles.label}>{label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
