import React from 'react';
import { 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  Clock, 
  Glasses,
  BadgeCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Services() {
  const iconMap: Record<string, any> = {
    Eye: Eye,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    FileCheck: FileCheck,
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F2FD] text-[#0A1931] border border-[#1565C0]/20 text-xs font-bold uppercase tracking-wider mb-4">
            <BadgeCheck className="w-4 h-4 text-[#D90429]" />
            Standards Médicaux & Savoir-Faire
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight mb-4">
            Des services optiques de précision pour votre santé visuelle
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            De l'examen réfractif approfondi à la prise en charge tiers payant avec votre mutuelle, bénéficiez d'une expertise reconnue à Abidjan.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteConfig.services.map((srv) => {
            const Icon = iconMap[srv.iconName] || Eye;
            return (
              <div 
                key={srv.id}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-[#1565C0] hover:shadow-xl transition-all duration-300 flex flex-col group relative"
              >
                {srv.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0A1931] text-[#FFB703]">
                    {srv.badge}
                  </span>
                )}

                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#0A1931] group-hover:bg-[#0A1931] group-hover:text-[#FFB703] transition-colors mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-[#0A1931] mb-1">
                  {srv.title}
                </h3>
                <p className="text-xs font-semibold text-[#D90429] mb-4">
                  {srv.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="mt-auto space-y-2 pt-4 border-t border-slate-200/60">
                  {srv.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Assurances Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#071224] to-[#0A1931] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1565C0]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Conventionné & Agréé 100% Tiers Payant
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ne payez rien d'avance selon les conditions de votre mutuelle
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                Nos équipes au Plateau et à Marcory s’occupent de toutes vos démarches administratives auprès de votre compagnie d'assurance (ASCOMA, NSIA, SAHAM/SANLAM, SUNU, ALLIANZ, Gras Savoye...).
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-white/90">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 font-semibold">&bull; Devis normalisé en 10 min</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 font-semibold">&bull; Télétransmission directe</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 font-semibold">&bull; Reste à charge minime ou nul</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a 
                href="#bilan-rdv"
                className="px-8 py-4 rounded-2xl bg-[#D90429] hover:bg-[#EF233C] text-white font-bold text-sm shadow-glow-red hover:scale-105 active:scale-95 transition-all text-center flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre RDV avec mon assurance</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
