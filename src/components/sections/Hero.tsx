import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  ArrowRight,
  MapPin,
  Clock,
  Star
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-[#0A1931] via-[#0D2244] to-[#F8FAFC] overflow-hidden text-white">
      {/* Decorative Paris & Optical Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB703_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1565C0]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D90429]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Trust Pill / Campaign Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D90429] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-white uppercase">
                Nouvelle Saison &bull; Spéciale Rentrée & Bureautique
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Voyez <span className="text-[#FFB703]">Clair</span>,<br />
              Vivez <span className="text-white underline decoration-[#D90429] decoration-4 underline-offset-8">Grand</span>.<br />
              <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white/90">
                Portez ce qui vous distingue.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Votre opticien-lunetier d’exception à <strong className="text-white">Abidjan (Plateau & Marcory)</strong>. Examens de vue haute précision, montures de créateurs, verres médicaux sur mesure et prise en charge directe par votre assurance.
            </p>

            {/* Quick Guarantees Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
                <span className="text-xs font-medium text-white/90">Bilan Visuel 15 min</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-white/90">Tiers Payant Agréé</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
                <span className="text-xs font-medium text-white/90">+500 Montures</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="#bilan-rdv" 
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D90429] to-[#EF233C] text-white text-base font-bold shadow-glow-red hover:brightness-110 active:scale-95 transition-all text-center"
              >
                <Calendar className="w-5 h-5" />
                <span>Prendre RDV Bilan Visuel</span>
              </a>

              <a 
                href="#morpho-guide" 
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-semibold backdrop-blur-md transition-all text-center"
              >
                <Sparkles className="w-5 h-5 text-[#FFB703]" />
                <span>Trouver ma Monture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Dual Location Quick Info */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-white/70 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D90429]" />
                <span><strong>Plateau :</strong> Ave Chardy / Bd République</span>
              </div>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D90429]" />
                <span><strong>Marcory :</strong> Rue A55 Montigny</span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition (Inspired by Social Posts) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white group">
                <div className="relative h-[420px] sm:h-[480px] w-full bg-slate-100">
                  <Image 
                    src="/images/editorial/GL_CLP_VTO_D_03_NEW.jpg" 
                    alt="Haute Lunetterie Lunettes de Paris" 
                    fill 
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-transparent"></div>
                </div>

                {/* Floating Social Style Banner Overlay (Yellow & Red Badge) */}
                <div className="absolute top-4 right-4 bg-[#FFB703] text-[#0A1931] p-3 rounded-2xl shadow-xl border border-white/40 max-w-[160px] text-center">
                  <div className="w-3 h-3 bg-[#D90429] rounded-full mx-auto mb-1 animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider block">OFFRE DU MOIS</span>
                  <span className="text-xs font-bold leading-tight block">Examen de vue offert pour tout achat</span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#0A1931]/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[#FFB703] text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-[#FFB703]" />
                      <Star className="w-3.5 h-3.5 fill-[#FFB703]" />
                      <Star className="w-3.5 h-3.5 fill-[#FFB703]" />
                      <Star className="w-3.5 h-3.5 fill-[#FFB703]" />
                      <Star className="w-3.5 h-3.5 fill-[#FFB703]" />
                      <span className="text-white ml-1 font-bold">5.0 / 5</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#D90429] font-bold text-white uppercase tracking-wider">
                      Henry Jullien &bull; Ahlem &bull; Ray-Ban
                    </span>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2">
                    « Portez une monture qui sublime votre regard et protège vos yeux des écrans et du soleil. »
                  </p>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white text-[#0A1931] shadow-float border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#0A1931] text-[#FFB703] flex items-center justify-center font-black">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A1931]">100% Verres Certifiés</div>
                  <div className="text-[10px] text-slate-500">Protection UV400 & Anti-Lumière Bleue</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
