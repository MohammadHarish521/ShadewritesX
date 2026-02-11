import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Mic, PenLine, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [
  { 
    id: 'note',
    Icon: FileText, 
    color: '#111111', 
    label: 'Capture Ideas' 
  },
  { 
    id: 'pen',
    Icon: PenLine, 
    color: '#111111', 
    label: 'Refine Message' 
  },
  { 
    id: 'voice',
    Icon: Mic, 
    color: '#111111', 
    label: 'Amplify Voice' 
  },
  { 
    id: 'growth',
    Icon: TrendingUp, 
    color: '#111111', 
    label: 'Drive Growth' 
  }
];

const HeroAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
     const timer = setInterval(() => {
       setCurrentIndex((prev) => (prev + 1) % icons.length);
     }, 3000); // Change icon every 3 seconds
     return () => clearInterval(timer);
  }, []);

  const CurrentIcon = icons[currentIndex].Icon;

  return (
    <div className="hero-animation-wrapper">
      <div className="animation-circle-bg"></div>
      <div className="animation-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="icon-container"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}
          >
            <CurrentIcon 
              size={120} 
              strokeWidth={1} 
              color={icons[currentIndex].color} 
            />
            <motion.span 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="icon-label"
              style={{ 
                marginTop: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                color: 'var(--text-subtle)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              {icons[currentIndex].label}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroAnimation;
