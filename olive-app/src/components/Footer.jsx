import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const OliveLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="20" rx="10" ry="11" fill="#5a8040"/>
    <ellipse cx="16" cy="20" rx="6.5" ry="7.5" fill="#7ab05a"/>
    <path d="M16 9 Q19 4 24 3" stroke="#5a8040" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <circle cx="9.5" cy="18.5" r="1.6" fill="#c8e6a0" opacity="0.7"/>
  </svg>
);

const LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Blog'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  Community: ['Instagram', 'TikTok', 'Twitter', 'Discord'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <OliveLogo />
              <span className={styles.logoText}>live</span>
            </div>
            <p className={styles.tagline}>
              Scan Smarter. Shop Safer.<br />Live Healthier.
            </p>
            <div className={styles.appBadges}>
              <a href="#" className={styles.badge}>App Store</a>
              <a href="#" className={styles.badge}>Google Play</a>
            </div>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul className={styles.linkList}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className={styles.link}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 Olive. All rights reserved.</span>
          <span className={styles.copy}>Made with 🫒 for healthy families</span>
        </div>
      </div>
    </footer>
  );
}
