'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4ede7] dark:border-b-white/10 px-6 md:px-20 py-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4 text-primary">
          <div className="h-10 w-auto">
            <img src="/hvfoods-logo.webp" alt="Horizon Vert Foods" className="h-full w-auto object-contain" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#1c150d] dark:text-white text-sm font-medium hover:text-primary transition-colors" href="https://horizonvertfoods.com" target="_blank">Shop</a>
            <a className="text-[#1c150d] dark:text-white text-sm font-medium hover:text-primary transition-colors" href="#prizes">Prizes</a>
          </div>
          <a href="#entry-form">
              <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold golden-glow transition-transform"
              >
              <span>Enter Giveaway</span>
              </motion.button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[#1c150d] dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[73px] left-0 w-full bg-background-light dark:bg-background-dark border-b border-[#f4ede7] dark:border-white/10 z-40 overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col p-6 gap-6">
              <a 
                className="text-[#1c150d] dark:text-white text-lg font-medium hover:text-primary transition-colors" 
                href="https://horizonvertfoods.com" 
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a 
                className="text-[#1c150d] dark:text-white text-lg font-medium hover:text-primary transition-colors" 
                href="#prizes"
                onClick={() => setIsMenuOpen(false)}
              >
                Prizes
              </a>
              <a href="#entry-form" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full h-12 rounded-lg bg-primary text-white text-lg font-bold golden-glow">
                  Enter Giveaway
                </button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
