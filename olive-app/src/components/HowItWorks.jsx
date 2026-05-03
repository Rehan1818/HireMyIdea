import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    number: '01',
    icon: '📱',
    title: 'Scan the Barcode',
    desc: 'Open Olive and simply scan any product barcode to instantly detect ingredients. Olive\'s intuitive design means busy parents get answers in seconds.',
  },
  {
    number: '02',
    icon: '🔬',
    title: 'Expert Analysis',
    desc: 'Our app compares product data with an extensive database of 1M+ products. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients.',
  },
  {
    number: '03',
    icon: '✅',
    title: 'Get Personalized Insights',
    desc: 'Olive provides tailored insights and healthier product suggestions. Proactively flags harmful ingredients and offers personalized recommendations for your family.',
  },
];

export default function HowItWorks() {
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
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.title}>
            Shop smarter in<br />three simple steps
          </h2>
        </motion.div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
