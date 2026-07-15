import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

const companies = [
  { 
    id: 'nepal-automation', 
    name: 'Nepal Automation Pvt Ltd', 
    image: '/nepal-automation.jpg',
    color: '#0055a4',
    url: 'https://gbsteam.com'
  },
  { 
    id: 'nrrc', 
    name: 'National Robotics And Research Center', 
    image: '/nrrc.jpg',
    color: '#000000',
    url: 'https://gbsteam.com'
  },
  { 
    id: 'roboaarambh', 
    name: 'Roboaarambh', 
    image: '/roboaarambh.png',
    color: '#00529b',
    url: 'https://roboaarambh.com/'
  }
];

export function GroupCompaniesPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="our-group" className="px-5 py-24 sm:px-8 lg:px-12 bg-white dark:bg-[#0a0f1a]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500 dark:text-brand-400">Our Network</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-700 dark:text-brand-400 sm:text-3xl">
              Group of Companies
            </h2>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0c1a2d] rounded-[2rem] py-8 px-6 sm:py-12 sm:px-12 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-24">
            {companies.map((company, index) => {
              return (
                <motion.div
                  key={company.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-1 w-full max-w-[320px]"
                >
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-6 text-center w-full"
                  >
                    <div 
                      className="flex h-36 w-full place-items-center justify-center rounded-2xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg p-6 relative overflow-hidden" 
                    >
                      <img 
                        src={company.image} 
                        alt={`${company.name} Logo`} 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl text-slate-500 text-[10px] text-center p-2">
                        <span>Image not found</span>
                        <span className="font-mono mt-1 font-bold">{company.image}</span>
                      </div>
                    </div>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-[#161616] dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {company.name}
                    </h3>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://gbsteam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Explore all companies <ArrowUpRightIcon size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
