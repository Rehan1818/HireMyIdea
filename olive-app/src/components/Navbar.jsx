import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const OliveLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="20" rx="10" ry="11" fill="#3d5c2e"/>
    <ellipse cx="16" cy="20" rx="6.5" ry="7.5" fill="#5a8040"/>
    <path d="M16 9 Q19 4 24 3" stroke="#3d5c2e" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <circle cx="9.5" cy="18.5" r="1.6" fill="#c8e6a0" opacity="0.7"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Solutions', dropdown: true },
  { label: 'Features' },
  { label: 'Pricing' },
  { label: 'Blog', dropdown: true },
  { label: 'Restaurants' },
  { label: 'Food', dropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="/" className={styles.logo}>
        <OliveLogo />
        <span className={styles.logoText}>live</span>
      </a>

      <ul className={styles.navLinks}>
        {NAV_LINKS.map(({ label, dropdown }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i + 0.2, duration: 0.4 }}
          >
            <a href="#" className={styles.navLink}>
              {label}
              {dropdown && <span className={styles.chevron}>▾</span>}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className={styles.navRight}>
        <motion.a
          href="#"
          className={styles.signIn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Sign in
        </motion.a>
        <motion.a
          href="#"
          className={styles.ctaButton}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Olive <span>→</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}
