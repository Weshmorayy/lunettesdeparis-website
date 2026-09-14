import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F2FD] text-[#0A1931] border border-[#1565C0]/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 text-[#FFB703] fill-[#FFB703]" />
            Avis & Confiance Clients
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight mb-4">
            Ce que disent nos clients à Abidjan
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Cadres d'entreprises, professionnels de santé, familles... Découvrez leurs retours d'expérience sur notre accueil et nos équipements.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div 
              key={t.id}
              className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all relative"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#FFB703]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB703]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  « {t.content} »
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="font-extrabold text-sm text-[#0A1931]">
                  {t.name}
                </div>
                <div className="text-xs text-slate-500 mb-1">
                  {t.role} &bull; {t.location}
                </div>
                {t.frameBought && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D90429] bg-[#D90429]/5 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-[#D90429]" />
                    <span>Modèle : {t.frameBought}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
