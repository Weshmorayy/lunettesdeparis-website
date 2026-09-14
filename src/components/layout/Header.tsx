'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  Search,
  Clock,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Multi-Boutiques */}
      <div className="bg-[#071224] text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFB703] animate-pulse"></span>
              <span className="font-semibold text-white">Centres Optiques Abidjan :</span>
            </div>
            <a 
              href="tel:+2250768351515" 
              className="flex items-center gap-1.5 hover:text-[#FFB703] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D90429]" />
              <span>Plateau : <strong className="text-white">+225 07 68 35 15 15</strong></span>
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="tel:+2250768011111" 
              className="flex items-center gap-1.5 hover:text-[#FFB703] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D90429]" />
              <span>Marcory (Rue Montigny) : <strong className="text-white">+225 07 68 01 11 11</strong></span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Tiers payant & Assurances acceptés
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFB703]" />
              Ouvert du Lun au Sam
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav 
        className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled 
            ? 'bg-[#0A1931]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10' 
            : 'bg-[#0A1931] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-white/20 group-hover:ring-[#FFB703] transition-all bg-white flex items-center justify-center p-0.5">
              <Image 
                src="/images/brand/logo.png" 
                alt="Lunettes de Paris Abidjan" 
                width={48} 
                height={48} 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                LUNETTES <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 font-normal text-white/80">de</span> <span className="text-[#FFB703]">PARIS</span>
              </span>
              <span className="text-[10px] sm:text-xs text-white/70 tracking-widest uppercase font-medium">
                Haute Optique & Joaillerie du Regard
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="#morpho-guide" 
              className="text-sm font-medium text-white/90 hover:text-[#FFB703] transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#FFB703]" />
              Trouver ma Monture
            </Link>
            <Link 
              href="#catalogue" 
              className="text-sm font-medium text-white/90 hover:text-[#FFB703] transition-colors"
            >
              Collections & Marques
            </Link>
            <Link 
              href="#services" 
              className="text-sm font-medium text-white/90 hover:text-[#FFB703] transition-colors"
            >
              Services & Assurances
            </Link>
            <Link 
              href="#sante-visuelle" 
              className="text-sm font-medium text-white/90 hover:text-[#FFB703] transition-colors"
            >
              Santé & Conseils
            </Link>
            <Link 
              href="#boutiques" 
              className="text-sm font-medium text-white/90 hover:text-[#FFB703] transition-colors"
            >
              Nos Boutiques
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#bilan-rdv" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D90429] to-[#EF233C] text-white text-xs sm:text-sm font-bold shadow-glow-red hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre RDV Bilan Visuel</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0A1931] border-b border-white/10 shadow-2xl p-6 transition-all">
          <div className="flex flex-col gap-4">
            <Link 
              href="#morpho-guide" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB703]" />
                Guide Morpho-Visage
              </span>
              <ArrowRight className="w-4 h-4 text-white/40" />
            </Link>
            <Link 
              href="#catalogue" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Collections Lunettes</span>
              <ArrowRight className="w-4 h-4 text-white/40" />
            </Link>
            <Link 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Services & Assurances</span>
              <ArrowRight className="w-4 h-4 text-white/40" />
            </Link>
            <Link 
              href="#sante-visuelle" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Conseils Santé des Yeux</span>
              <ArrowRight className="w-4 h-4 text-white/40" />
            </Link>
            <Link 
              href="#boutiques" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Adresses Plateau & Marcory</span>
              <ArrowRight className="w-4 h-4 text-white/40" />
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <a 
                href="#bilan-rdv" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#D90429] text-white font-bold text-sm shadow-md"
              >
                Prendre RDV Bilan Visuel Gratuit
              </a>
              <a 
                href={`https://wa.me/${siteConfig.whatsappMain}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm"
              >
                Contacter un Opticien sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
