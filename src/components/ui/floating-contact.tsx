'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatDots } from '@phosphor-icons/react';

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const pastHero = window.scrollY > window.innerHeight;
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - window.innerHeight * 0.5;
      setVisible(pastHero && !nearBottom);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          aria-label="Contact"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center
            justify-center rounded-full bg-accent text-white shadow-lg
            transition-transform duration-200 hover:scale-110
            hover:shadow-[0_0_20px_rgba(239,68,68,0.45)]"
        >
          <ChatDots size={22} weight="bold" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
