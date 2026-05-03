import { motion } from 'framer-motion';
import styles from './TrustedBadge.module.css';

const AVATARS = [
  { color: '#8b9e6b', initial: 'S' },
  { color: '#c4956a', initial: 'M' },
  { color: '#7a9db8', initial: 'A' },
  { color: '#b08090', initial: 'L' },
];

export default function TrustedBadge() {
  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className={styles.avatarGroup}>
        {AVATARS.map(({ color, initial }, i) => (
          <motion.div
            key={initial}
            className={styles.avatar}
            style={{ background: color }}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
          >
            {initial}
          </motion.div>
        ))}
      </div>
      <span className={styles.label}>Trusted by thousands of healthy families</span>
    </motion.div>
  );
}
