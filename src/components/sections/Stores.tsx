import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Calendar,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Stores() {
  return (
    <section id="boutiques" className="py-20 bg-[#071224] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1565C0]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D90429]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFB703] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4" />
            2 Centres d'Excellence à Abidjan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Venez nous rendre visite au <span className="text-[#FFB703]">Plateau</span> ou à <span className="text-[#D90429]">Marcory</span>
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Nos showrooms modernes vous accueillent dans un cadre chaleureux et climatisé avec plus de 500 montures en démonstration et un espace réfraction équipé.
          </p>
        </div>

        {/* 2 Showrooms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.stores.map((store) => (
            <div 
              key={store.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#0A1931] border border-white/15 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#FFB703]/50 transition-all duration-300"
            >
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFB703] text-[#0A1931]">
                    {store.district}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ouvert
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#FFB703] transition-colors">
                  {store.name}
                </h3>

                <div className="space-y-4 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D90429] flex-shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FFB703] flex-shrink-0" />
                    <a href={`tel:${store.phone}`} className="hover:text-white font-bold text-base text-white">
                      {store.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-white/70">
                    <Clock className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <div>{store.hoursWeek}</div>
                      <div>{store.hoursSat}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a 
                  href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite contacter le centre Lunettes de Paris ${store.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp {store.district.split(',')[0]}</span>
                </a>

                <a 
                  href="#bilan-rdv"
                  className="flex-1 text-center py-3.5 rounded-xl bg-[#D90429] hover:bg-[#EF233C] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prendre RDV</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
