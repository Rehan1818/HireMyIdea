import { motion } from 'framer-motion';
import TrustedBadge from './TrustedBadge';
import styles from './HeroSection.module.css';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp}>
          <TrustedBadge />
        </motion.div>

        <motion.h1 className={styles.headline} variants={fadeUp}>
          The Safest Way to<br />Shop for Groceries
        </motion.h1>

        <motion.p className={styles.subtext} variants={fadeUp}>
          Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
          from Your Family's Diet and Get Expert-Backed Food Insights
        </motion.p>

        <motion.div className={styles.buttons} variants={fadeUp}>
          <motion.a
            href="#"
            className={styles.primaryBtn}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(26,46,26,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <AppleIcon />
            Download for iOS
          </motion.a>
          <motion.a
            href="#"
            className={styles.linkBtn}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Join the Olive Community →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.7-49 191.4-49 30.8 0 108.2 2.6 168.5 80.1zm-198.6-119.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  );
}
