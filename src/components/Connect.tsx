import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Youtube } from 'lucide-react';

export function Connect() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="connect" className="relative bg-white dark:bg-[#161616] px-5 py-24 sm:px-8 lg:px-12 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] dark:text-white leading-tight">
              Let's Build the <span className="text-brand-600 dark:text-brand-400">Future</span> Together.
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Whether you're interested in partnering on a robotics project, setting up a STEM lab, or joining our research initiatives, we'd love to hear from you.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center min-h-[3rem]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#161616] dark:text-white">Location</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Balkumari, Lalitpur (Near KUSOM College), Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center min-h-[3rem]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#161616] dark:text-white">Phone</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">984-1864812</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center min-h-[3rem]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#161616] dark:text-white">Email</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">gbsalemagar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <MessageCircle size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center min-h-[3rem]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#161616] dark:text-white">Messenger</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">GBS Team</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <Youtube size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center min-h-[3rem]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#161616] dark:text-white">YouTube</h3>
                  <a href="https://www.youtube.com/c/GANESHBIKRAMSINGHALEMAGAR" target="_blank" rel="noopener noreferrer" className="mt-1 text-sm text-brand-600 dark:text-brand-400 hover:underline">GANESHBIKRAMSINGHALEMAGAR</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2.5rem] bg-white dark:bg-[#0c1a2d] p-8 sm:p-12 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none"
          >
            <h3 className="font-display text-2xl font-bold text-[#161616] dark:text-white mb-8">
              Send a Message
            </h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm text-[#161616] dark:text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email_connect" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  id="email_connect" 
                  placeholder="john@example.com"
                  className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm text-[#161616] dark:text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can we help you?"
                  className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm text-[#161616] dark:text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#086638] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0a7d45] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-[#0c1a2d] shadow-md"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
