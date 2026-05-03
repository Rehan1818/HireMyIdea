import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './PhoneMockup.module.css';

/* ─── SVG product illustrations ─── */
function SanPellegrinoSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="80" height="80" fill="#e8f2e8"/>
      <rect x="28" y="8" width="24" height="60" rx="6" fill="#5a9a6a"/>
      <rect x="31" y="12" width="18" height="52" rx="4" fill="#4a8a5a"/>
      <rect x="30" y="22" width="20" height="28" rx="2" fill="#fff" opacity="0.9"/>
      <text x="40" y="33" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#c8102e" fontFamily="sans-serif">S.PELLEG</text>
      <text x="40" y="40" textAnchor="middle" fontSize="4" fill="#c8102e" fontFamily="sans-serif">RINO</text>
      <circle cx="40" cy="46" r="5" fill="#c8102e" opacity="0.85"/>
      <path d="M38 46 L40 43 L42 46 L40 49 Z" fill="#fff"/>
      <rect x="33" y="14" width="14" height="6" rx="2" fill="#3a7a4a"/>
    </svg>
  );
}
function OliveOilSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="80" height="80" fill="#f5f0e0"/>
      <path d="M32 68 Q28 56 28 40 L30 26 Q32 18 36 14 L36 10 L44 10 L44 14 Q48 18 50 26 L52 40 Q52 56 48 68Z" fill="#c8b840"/>
      <path d="M33 65 Q30 54 30 40 L32 28 Q34 21 37 16 L37 12 L43 12 L43 16 Q46 21 48 28 L50 40 Q50 54 47 65Z" fill="#e8d440" opacity="0.8"/>
      <rect x="33" y="32" width="14" height="20" rx="2" fill="#fff" opacity="0.85"/>
      <path d="M37 40 Q40 36 43 40" stroke="#4a8c3f" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <circle cx="40" cy="44" r="2.5" fill="#3d5c2e"/>
      <text x="40" y="52" textAnchor="middle" fontSize="4" fill="#5a4010" fontFamily="sans-serif" fontWeight="bold">OLIVE</text>
      <rect x="35" y="7" width="10" height="5" rx="1.5" fill="#8B6020"/>
    </svg>
  );
}
function MilkSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="80" height="80" fill="#f0f8f0"/>
      <rect x="22" y="24" width="36" height="46" rx="4" fill="#fff" stroke="#dde8dd" strokeWidth="1.5"/>
      <polygon points="22,24 40,12 58,24" fill="#e8f4e8" stroke="#dde8dd" strokeWidth="1.5"/>
      <line x1="40" y1="12" x2="40" y2="24" stroke="#c8ddc8" strokeWidth="1"/>
      <rect x="22" y="34" width="36" height="22" fill="#4a8c3f" opacity="0.12"/>
      <text x="40" y="43" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#2d5a27" fontFamily="sans-serif">ORGANIC</text>
      <text x="40" y="51" textAnchor="middle" fontSize="4.5" fill="#2d5a27" fontFamily="sans-serif">WHOLE MILK</text>
      <ellipse cx="40" cy="60" rx="8" ry="3" fill="#e8f4e8"/>
    </svg>
  );
}
function CerealSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="80" height="80" fill="#fdf3e0"/>
      <rect x="18" y="12" width="44" height="58" rx="5" fill="#4a90d9" opacity="0.2"/>
      <rect x="18" y="12" width="44" height="58" rx="5" fill="url(#cerealG)" stroke="#4a90d9" strokeWidth="1" opacity="0.5"/>
      <rect x="22" y="16" width="36" height="50" rx="3" fill="#fff" opacity="0.7"/>
      <text x="40" y="30" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#1a3a8a" fontFamily="sans-serif">Honey Nut</text>
      <text x="40" y="38" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#1a3a8a" fontFamily="sans-serif">Cheerios</text>
      {[[33,48,6],[47,46,5],[38,55,5.5],[52,53,5]].map(([cx,cy,r],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="#e8a830" stroke="#c88820" strokeWidth="1.5"/>
          <circle cx={cx} cy={cy} r={r-2.5} fill="#fdf3e0"/>
        </g>
      ))}
      <defs><linearGradient id="cerealG" x1="18" y1="12" x2="62" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6ab0f0"/><stop offset="100%" stopColor="#2a70c0"/>
      </linearGradient></defs>
    </svg>
  );
}

/* ─── Products data ─── */
const PRODUCTS = [
  {
    Svg: SanPellegrinoSVG,
    heroBg: 'linear-gradient(145deg, #d4ecd4 0%, #b8dbb8 100%)',
    name: 'San Pellegrino Sparkling Natural Mineral Water',
    brand: 'Sanpellegrino',
    score: 52, scoreLabel: 'Limit', scoreColor: '#e8a030',
    details: [
      { icon: '⚠', label: 'Contaminants',  value: '7',       dot: 'red'   },
      { icon: '🧪', label: 'Fluoride',      value: 'Yes',     dot: 'red'   },
      { icon: '🛡', label: 'PFAS',          value: 'No',      dot: 'green' },
      { icon: '💧', label: 'Microplastics', value: 'Minimal', dot: 'green' },
      { icon: '📈', label: 'pH Level',      value: '5.7',     dot: null    },
    ],
    breakdown: { label: 'Nitrate', value: '0.75 mg/L', tag: '5x limit' },
  },
  {
    Svg: CerealSVG,
    heroBg: 'linear-gradient(145deg, #dde8f5 0%, #b8cfe8 100%)',
    name: 'Honey Nut Cheerios',
    brand: 'General Mills',
    score: 38, scoreLabel: 'Avoid', scoreColor: '#c0402a',
    details: [
      { icon: '⚠', label: 'Added Sugars',       value: 'High',     dot: 'red'    },
      { icon: '🧪', label: 'Pesticides',         value: 'Detected', dot: 'red'    },
      { icon: '🛡', label: 'Seed Oils',          value: 'No',       dot: 'green'  },
      { icon: '💊', label: 'Synthetic Vitamins', value: 'Yes',      dot: 'yellow' },
      { icon: '📈', label: 'Glycemic Index',     value: '74',       dot: null     },
    ],
    breakdown: { label: 'Glyphosate', value: '1.2 ppb', tag: '2x limit' },
  },
  {
    Svg: MilkSVG,
    heroBg: 'linear-gradient(145deg, #e0f5e0 0%, #c0e0c0 100%)',
    name: 'Organic Whole Milk',
    brand: 'Horizon Organic',
    score: 82, scoreLabel: 'Good', scoreColor: '#4a8c3f',
    details: [
      { icon: '⚠', label: 'Contaminants', value: '0',     dot: 'green' },
      { icon: '🧪', label: 'Hormones',     value: 'None',  dot: 'green' },
      { icon: '🛡', label: 'Antibiotics',  value: 'None',  dot: 'green' },
      { icon: '💊', label: 'Additives',    value: 'Clean', dot: 'green' },
      { icon: '📈', label: 'Fat Content',  value: '3.25%', dot: null    },
    ],
    breakdown: { label: 'Omega-3', value: '0.4 g/cup', tag: 'Beneficial' },
  },
  {
    Svg: OliveOilSVG,
    heroBg: 'linear-gradient(145deg, #f0e8c0 0%, #d8cc80 100%)',
    name: 'Extra Virgin Olive Oil',
    brand: 'California Olive Ranch',
    score: 94, scoreLabel: 'Excellent', scoreColor: '#4a8c3f',
    details: [
      { icon: '⚠', label: 'Contaminants', value: '0',    dot: 'green' },
      { icon: '🧪', label: 'Pesticides',   value: 'None', dot: 'green' },
      { icon: '🛡', label: 'Seed Oils',    value: 'No',   dot: 'green' },
      { icon: '💊', label: 'Additives',    value: 'None', dot: 'green' },
      { icon: '📈', label: 'Polyphenols',  value: 'High', dot: null    },
    ],
    breakdown: { label: 'Oleic Acid', value: '73%', tag: 'Heart-healthy' },
  },
];

/* ─── Big hero image — slides right→left on product change ─── */
function HeroImage({ product, index }) {
  return (
    <div className={styles.heroOuter}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.heroImageWrap}
          style={{ background: product.heroBg }}
          initial={{ x: 90,  opacity: 0 }}
          animate={{ x: 0,   opacity: 1 }}
          exit={{    x: -90, opacity: 0 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <product.Svg />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicator */}
      <div className={styles.heroDots}>
        {PRODUCTS.map((_, i) => (
          <div
            key={i}
            className={styles.heroDot}
            style={{
              width:      i === index ? '20px' : '6px',
              opacity:    i === index ? 1 : 0.3,
              background: i === index ? '#3d5c2e' : '#999',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Detail row ─── */
function DetailRow({ icon, label, value, dot }) {
  const dotColor = dot === 'red' ? '#e05555' : dot === 'yellow' ? '#e0a030' : dot === 'green' ? '#4a9c45' : null;
  return (
    <div className={styles.detailRow}>
      <span className={styles.detailIcon}>{icon}</span>
      <span className={styles.detailLabel}>{label}</span>
      <span className={styles.detailValue}>{value}</span>
      {dotColor && <span className={styles.detailDot} style={{ background: dotColor }} />}
    </div>
  );
}

/* ─── Details panel — pops up from bottom on every product change ─── */
function DetailsPanel({ product, index }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className={styles.detailsPanel}
        initial={{ y: 60,  opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        exit={{    y: -20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }}
      >
        {/* Thumb + name + score */}
        <div className={styles.productRow}>
          <div className={styles.thumbWrap}><product.Svg /></div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productBrand}>{product.brand}</div>
            <div className={styles.scoreRow}>
              <span className={styles.scoreDot} style={{ background: product.scoreColor }} />
              <span className={styles.scoreNum}  style={{ color: product.scoreColor }}>
                {product.score}/100
              </span>
              <span className={styles.scoreLabel}>{product.scoreLabel}</span>
              <motion.button className={styles.actionBtn}
                whileHover={{ scale: 1.3, color: '#e05555' }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </motion.button>
              <motion.button className={styles.actionBtn}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Detail rows stagger in */}
        <motion.div
          className={styles.detailsList}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
        >
          {product.details.map((d, i) => (
            <motion.div key={i} variants={{
              hidden: { opacity: 0, x: -10 },
              show:   { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22,1,0.36,1] } },
            }}>
              <DetailRow {...d} />
            </motion.div>
          ))}
        </motion.div>

        {/* Breakdown slides up last */}
        <motion.div
          className={styles.breakdownSection}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ delay: 0.36, duration: 0.38, ease: [0.22,1,0.36,1] }}
        >
          <div className={styles.breakdownTitle}>Contaminants</div>
          <div className={styles.breakdownCard}>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownName}>{product.breakdown.label}</span>
              <span className={styles.breakdownTag} style={{
                background: product.breakdown.tag.includes('limit') ? '#fde8e8' : '#e8f5e8',
                color:      product.breakdown.tag.includes('limit') ? '#c0402a' : '#2d7a27',
              }}>
                {product.breakdown.tag}
              </span>
            </div>
            <div className={styles.breakdownValue}>{product.breakdown.value}</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Side blurred cards ─── */
function SideBlur({ side, current }) {
  const total = PRODUCTS.length;
  const adjIndex = side === 'left'
    ? (current - 1 + total) % total
    : (current + 1) % total;
  const product = PRODUCTS[adjIndex];

  return (
    <motion.div
      className={`${styles.sideBlur} ${side === 'right' ? styles.sideBlurRight : ''}`}
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={styles.sideBlurInner}
          style={{ background: product.heroBg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{    opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <product.Svg />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main export ─── */
export default function PhoneMockup() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % PRODUCTS.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.mockupArea}>
      <SideBlur side="left" current={current} />

      <motion.div
        className={styles.phone}
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0,  scale: 1   }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      >
        <div className={styles.notch}>
          <div className={styles.notchPill} />
          <div className={styles.notchCamera} />
        </div>

        <HeroImage product={PRODUCTS[current]} index={current} />
        <DetailsPanel product={PRODUCTS[current]} index={current} />
      </motion.div>

      <SideBlur side="right" current={current} />
    </div>
  );
}