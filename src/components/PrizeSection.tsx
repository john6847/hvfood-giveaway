'use client';
import { motion } from 'framer-motion';

export default function PrizeSection() {
  return (
    <section className="w-full px-4 md:px-20 py-20" id="prizes">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4"
          >
            The Prize Package
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="flex justify-center">
          {/* Grand Prize */}
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex flex-col items-center rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-background-dark border border-[#f4ede7] dark:border-white/5 max-w-2xl w-full relative group"
          >
            {/* Golden Glow Effect behind/around */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-full aspect-video bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJaYGMW8NofmtWP-FFAHWOJrHsDG6b4utNRgTxNcSbIZdbpg_QuNnyeCWX2Wp4WYxxgSkuyEqBHj5pj6ZeP6MwqfAnc7xHS7BNJqzNAVw8z7MbgmWVkVpEiglFED5HLYyUfYpulkxjhB6iniBe4v3UhZmyWyANWQkb81JBB5j8GC88zzShIkkfSXRe4s8l98Td9pLuhstVMzjklftqm45doERvHJgl_IBS-F9g5Zk7pQKt2x0ddrr8g9oKcjs9dYJ7o1YKiKWbv1nR")' }}></div>
            
            <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6 relative z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-5xl mb-2">confirmation_number</span>
                <h3 className="text-[#1c150d] dark:text-white text-3xl md:text-4xl font-black uppercase tracking-tight">The Chance of a Lifetime</h3>
              </div>
              <p className="text-[#9c7449] dark:text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
                Two tickets to the World Cup to watch Haiti vs Scotland play
              </p>
              <div className="mt-4 pt-6 w-full border-t border-[#f4ede7] dark:border-white/10 flex flex-col gap-2">
                <span className="text-sm uppercase tracking-widest text-primary/80 font-bold">Total Value</span>
                <span className="text-[#1c150d] dark:text-white text-3xl font-black">$4,000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
