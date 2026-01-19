'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-20 py-8">
      <div className="@container max-w-7xl mx-auto">
        <motion.div 
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[560px] flex flex-col items-center justify-center text-center p-8 rounded-2xl overflow-hidden bg-cover bg-center" 
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("/haiti-world-cup.jpg")' }}
        >
          <div className="max-w-[800px] flex flex-col gap-6 items-center">
            <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full"
            >
                World Cup Exclusive
            </motion.span>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]"
            >
                The Ultimate Goal: Fuel Your Passion, Win the World Cup Experience.
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-white/90 text-lg md:text-xl font-medium max-w-2xl"
            >
                Organic nutrition meets the beautiful game. Enter for a chance to win the Golden Ticket and a year of healthy living.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <a className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold golden-glow hover:bg-primary/90 transition-all" href="#entry-form">
                Enter Now
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span>Official Horizon Vert Partnership</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
