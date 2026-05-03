import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const REVIEWS = [
  { name: 'Sarah M.', role: 'Mom of 3', stars: 5, text: 'Olive has completely changed the way I shop for my family. I feel confident knowing exactly what\'s in our food before it ever hits our pantry.' },
  { name: 'James T.', role: 'Health-conscious dad', stars: 5, text: 'Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It\'s that easy.' },
  { name: 'Rachel K.', role: 'Nutritionist', stars: 5, text: 'After just a week of using Olive, I feel more in control of my family\'s nutrition than ever before. It\'s empowering to make informed choices so quickly.' },
  { name: 'Tom W.', role: 'Father of two', stars: 5, text: 'Finally an app that doesn\'t sugarcoat the truth. Olive shows exactly what\'s harmful and immediately suggests better alternatives. Life-changing.' },
  { name: 'Lisa H.', role: 'Allergy mom', stars: 5, text: 'Managing my son\'s allergies used to mean reading every tiny label. Olive flags everything instantly. I can\'t imagine grocery shopping without it.' },
  { name: 'Mike D.', role: 'Clean eating advocate', stars: 5, text: 'The restaurant finder alone is worth it. Finding seed oil-free options near me has never been easier. This app is on another level.' },
];

function StarRating({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className={styles.card}>
      <StarRating count={review.stars} />
      <p className={styles.reviewText}>"{review.text}"</p>
      <div className={styles.reviewer}>
        <div className={styles.avatar}>
          {review.name[0]}
        </div>
        <div>
          <div className={styles.reviewerName}>{review.name}</div>
          <div className={styles.reviewerRole}>{review.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track1 = [...REVIEWS, ...REVIEWS];
  const track2 = [...REVIEWS.slice(3), ...REVIEWS.slice(0,3), ...REVIEWS.slice(3), ...REVIEWS.slice(0,3)];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22,1,0.36,1] }}
        >
          Loved by thousands<br />of healthy families
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join over 200,000 families making smarter food choices every day
        </motion.p>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <motion.div
            className={styles.track}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {track1.map((r, i) => <ReviewCard key={i} review={r} />)}
          </motion.div>
        </div>
        <div className={styles.marquee}>
          <motion.div
            className={styles.track}
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {track2.map((r, i) => <ReviewCard key={i} review={r} />)}
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.ratingBadge}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 280 }}
      >
        <span className={styles.bigStar}>★</span>
        <div>
          <div className={styles.ratingNum}>4.9 / 5.0</div>
          <div className={styles.ratingLabel}>from 3,147+ reviews</div>
        </div>
      </motion.div>
    </section>
  );
}
