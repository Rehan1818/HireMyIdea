import { motion } from 'framer-motion';
import styles from './Features.module.css';

const FEATURES = [
  { icon: '🔍', title: 'Instant Barcode Scanner', desc: 'Scan food, water & cosmetics to reveal detailed analyses of harmful ingredients — additives, seed oils, pesticides, heavy metals and more.' },
  { icon: '🧪', title: 'Lab-Tested Data', desc: 'Unlike other apps, Olive uses independent lab-tested data — not just product labels. We flag things other scanners simply cannot.' },
  { icon: '🍽️', title: 'Restaurant Finder', desc: 'Discover thousands of seed oil-free restaurants near you with our curated dining map for clean, toxin-free meals when eating out.' },
  { icon: '💧', title: 'Water Scanner', desc: 'Check bottled water for contaminants like fluoride, microplastics, PFAS and heavy metals — invisible threats most scanners ignore.' },
  { icon: '🎯', title: 'Personalized Filters', desc: 'Customize alerts for ingredients you want to avoid. Whether gluten-free, vegan, or managing allergies — Olive adapts to your family.' },
  { icon: '💡', title: 'Healthy Alternatives', desc: 'Olive doesn\'t just flag harmful products. We provide tailored recommendations aligned with your dietary preferences and sensitivities.' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>Features</span>
          <h2 className={styles.title}>
            Everything your family<br />needs to eat safely
          </h2>
          <p className={styles.subtitle}>
            Olive breaks down every ingredient into clear, actionable information
            so you never second-guess what you're putting on the table.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.title}
              className={styles.card}
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(26,46,26,0.14)' }}
            >
              <div className={styles.iconWrap}>{feat.icon}</div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
