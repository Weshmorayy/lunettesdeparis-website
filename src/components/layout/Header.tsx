'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Services', href: '#services' },
  { label: 'Visagisme', href: '#morpho' },
  { label: 'Nos Centres', href: '#centres' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/images/brand/logo.png"
              alt="Lunettes de Paris"
              width={42}
              height={42}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] leading-none ${scrolled ? 'text-[#0A1931]' : 'text-white'}`}>
                Lunettes de Paris
              </p>
              <p className={`text-[9px] uppercase tracking-widest mt-0.5 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                Opticien · Abidjan
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#D90429] ${
                  scrolled ? 'text-[#0A1931]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bilan"
              className={`text-[11px] uppercase tracking-widest font-bold px-5 py-2.5 transition-colors ${
                scrolled
                  ? 'bg-[#0A1931] text-white hover:bg-[#D90429]'
                  : 'bg-white text-[#0A1931] hover:bg-[#FFB703]'
              }`}
            >
              Prendre RDV
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2"
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} className={scrolled ? 'text-[#0A1931]' : 'text-white'} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[99999] bg-[#0A1931] flex flex-col">
          <div className="flex justify-between items-center px-6 h-16">
            <a href="/" className="flex items-center gap-3">
              <Image src="/images/brand/logo.png" alt="Lunettes de Paris" width={40} height={40} className="rounded-full" />
              <span className="text-white text-sm font-bold uppercase tracking-widest">Lunettes de Paris</span>
            </a>
            <button onClick={() => setOpen(false)} aria-label="Fermer">
              <X size={24} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col gap-0 px-6 pt-12 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-3xl font-serif py-5 border-b border-white/10 hover:text-[#FFB703] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bilan"
              onClick={() => setOpen(false)}
              className="mt-10 bg-[#D90429] text-white text-center py-5 text-sm uppercase tracking-widest font-bold hover:bg-red-700 transition-colors"
            >
              Prendre RDV Bilan Visuel →
            </a>
          </nav>
          <div className="px-6 pb-10">
            <p className="text-white/40 text-xs">WhatsApp / Contact : +221 70 802 72 77</p>
          </div>
        </div>
      )}
    </>
  );
}
