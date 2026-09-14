import React from 'react';
import Image from 'next/image';
import { 
  HeartPulse, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function EyeHealth() {
  return (
    <section id="sante-visuelle" className="py-20 bg-[#F0F7FF] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1931] text-white text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-4 h-4 text-[#D90429]" />
            Espace Prévention & Santé Visuelle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight mb-4">
            Prenez soin de vos yeux au quotidien
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Conseils pratiques et alertes santé rédigés par les spécialistes de Lunettes de Paris pour toute la famille.
          </p>
        </div>

        {/* 3 Health Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.healthTips.map((tip) => (
            <div 
              key={tip.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#E3F2FD] text-[#0A1931]">
                    {tip.tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {tip.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0A1931] mb-3 group-hover:text-[#D90429] transition-colors">
                  {tip.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {tip.summary}
                </p>

                {/* Symptoms */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6">
                  <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                    Signes qui doivent alerter :
                  </div>
                  <ul className="space-y-1.5">
                    {tip.symptoms.map((s, idx) => (
                      <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                        <span className="text-amber-600 font-bold">&bull;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-800 mb-4">
                  <strong className="text-[#0A1931]">Le geste pro :</strong> {tip.recommendation}
                </div>
                <a 
                  href={`https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent(`Bonjour, j'ai une question de santé oculaire concernant : ${tip.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D90429] hover:underline flex items-center gap-1"
                >
                  Poser une question à un opticien &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Big Warning Banner Inspired by Social Post */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-100/80 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div className="text-center sm:text-left flex-grow">
            <h4 className="text-base font-black text-amber-950 mb-1">
              Rappel Médical Important
            </h4>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              En cas de douleur oculaire persistante, rougeur aiguë soudaine ou baisse brutale de vision, consultez immédiatement un ophtalmologiste ou rendez-vous en centre spécialisé.
            </p>
          </div>
          <a 
            href="#bilan-rdv" 
            className="px-5 py-2.5 rounded-xl bg-[#0A1931] text-white text-xs font-bold hover:bg-[#D90429] transition-colors whitespace-nowrap shadow-sm"
          >
            Faire tester ma vue
          </a>
        </div>

      </div>
    </section>
  );
}
