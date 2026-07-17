import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight as ArrowUpRightIcon,
  Menu as MenuIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  X as XIcon,
  LogOut,
  LogIn } from
'lucide-react';
import { useAuth } from '../context/AuthContext';
type NavigationProps = {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
};
const navigationLinks = [
{
  label: 'Dashboard',
  href: '/dashboard',
  isRoute: true
},
{
  label: 'About',
  href: '/#about'
},
{
  label: 'Expertise',
  href: '/#expertise'
},
{
  label: 'Projects',
  href: '/#projects'
},
{
  label: 'Programs',
  href: '/#programs'
},
{
  label: 'Research',
  href: '/#research'
},
{
  label: 'Team Member',
  href: '/#team-member'
},
{
  label: 'Connect',
  href: '/#connect'
},
{
  label: 'Our Group',
  href: '/#our-group',
  isRoute: false
}];

export function Navigation({ theme, onThemeToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeMenu = () => setIsOpen(false);
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border border-white/[0.11] bg-[#161616]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5"
        aria-label="Main navigation">
        
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400">
          
          <img src="/logo.png" alt="GBS Team Logo" className="h-[4.5rem] w-auto object-contain bg-white rounded-lg p-1" />
        </a>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navigationLinks
            .filter((link) => link.label !== 'Dashboard' || isAuthenticated)
            .map((link) =>
          link.isRoute ? (
          <Link
            key={link.href}
            to={link.href}
            className="rounded-md text-[13px] font-medium text-brand-300 ring-1 ring-brand-400/30 px-3 py-1 transition-colors hover:text-white hover:ring-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            {link.label}
          </Link>
          ) : (
          <a
            key={link.href}
            className="rounded-md text-[13px] font-medium text-slate-300 transition-colors hover:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400"
            href={link.href}>
            
              {link.label}
            </a>
          )
          )}
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="hidden items-center gap-2 rounded-xl bg-red-600/20 px-4 py-2.5 text-[13px] font-semibold text-red-500 transition hover:bg-red-600/30 focus:outline-none focus:ring-2 focus:ring-brand-400 sm:flex">
              Logout <LogOut size={15} aria-hidden="true" />
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden items-center gap-2 rounded-xl bg-brand-500/20 px-4 py-2.5 text-[13px] font-semibold text-brand-400 transition hover:bg-brand-500/30 focus:outline-none focus:ring-2 focus:ring-brand-400 sm:flex">
              Login <LogIn size={15} aria-hidden="true" />
            </Link>
          )}
          <a
            href="/#connect"
            className="hidden items-center gap-2 rounded-xl bg-[#086638] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0a7d45] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#161616] sm:flex">
            
            Join GBS <ArrowUpRightIcon size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={
            theme === 'dark' ?
            'Switch to light appearance' :
            'Switch to dark appearance'
            }
            aria-pressed={theme === 'light'}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.13] bg-white/[0.05] text-brand-200 transition hover:border-brand-400/50 hover:bg-brand-400/[0.1] focus:outline-none focus:ring-2 focus:ring-brand-400">
            
            <motion.span
              key={theme}
              initial={
              reduceMotion ?
              false :
              {
                opacity: 0,
                rotate: -30,
                scale: 0.7
              }
              }
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1
              }}
              transition={{
                duration: 0.18
              }}
              className="grid place-items-center">
              
              {theme === 'dark' ?
              <SunIcon size={18} aria-hidden="true" /> :

              <MoonIcon size={18} aria-hidden="true" />
              }
            </motion.span>
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-400 lg:hidden"
            aria-label={
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}>
            
            {isOpen ?
            <XIcon size={21} aria-hidden="true" /> :

            <MenuIcon size={21} aria-hidden="true" />
            }
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={
          reduceMotion ?
          false :
          {
            opacity: 0,
            y: -12
          }
          }
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={
          reduceMotion ?
          {
            opacity: 0
          } :
          {
            opacity: 0,
            y: -12
          }
          }
          transition={{
            duration: 0.2
          }}
          className="mx-auto mt-2 max-w-[1440px] rounded-2xl border border-white/[0.11] bg-[#0b1728]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          
            <div className="grid gap-1">
              {navigationLinks
                .filter((link) => link.label !== 'Dashboard' || isAuthenticated)
                .map((link) =>
              link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-brand-300 hover:bg-white/[0.07] focus:bg-white/[0.07] focus:outline-none">
                {link.label}
              </Link>
              ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.07] focus:bg-white/[0.07] focus:outline-none">
                
                  {link.label}
                </a>
              )
            )}

              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-red-600/20 px-4 py-3 text-sm font-semibold text-red-500 focus:outline-none focus:ring-2 focus:ring-brand-400">
                  Logout <LogOut size={16} aria-hidden="true" />
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand-500/20 px-4 py-3 text-sm font-semibold text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400">
                  Login <LogIn size={16} aria-hidden="true" />
                </Link>
              )}

              <a
              href="/#connect"
              onClick={closeMenu}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#086638] px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-brand-400">
              
                Join GBS <ArrowUpRightIcon size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}