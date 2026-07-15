import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Nepal Army', logo: '/nepal-army.png' },
  { id: 2, name: 'Armed Police Force Nepal', logo: '/armed-police.png' },
];

export function Collaborations() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white dark:bg-[#0a0f1a] border-t border-slate-100 dark:border-slate-800/50">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-700 dark:text-brand-400 sm:text-4xl">
            Our Collaborations
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Proud to partner with leading organizations to drive innovation forward.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0c1a2d] rounded-[2rem] py-8 px-6 sm:py-10 sm:px-12 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl w-full mx-auto">
          <div className="flex flex-wrap sm:flex-nowrap justify-around items-center gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-24 w-32 sm:w-40 items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain drop-shadow-sm transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
