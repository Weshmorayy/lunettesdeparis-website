import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Clock, 
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071224] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/brand/logo.png" 
                  alt="Lunettes de Paris" 
                  width={46} 
                  height={46} 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  LUNETTES <span className="text-[#FFB703]">DE PARIS</span>
                </span>
                <span className="text-xs text-white/60 uppercase tracking-widest">
                  Opticien-Lunetier Abidjan
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              « Voyez clair, vivez grand. Portez ce qui vous distingue. »
              Examen de vue précis, montures d'exception, verres de haute technologie et tiers payant toutes assurances en Côte d'Ivoire.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href={siteConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="Facebook"
              >
                fb
              </a>
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-white flex items-center justify-center transition-all font-bold text-xs"
                aria-label="Instagram"
              >
                ig
              </a>
              <a 
                href={`https://wa.me/${siteConfig.whatsappMain}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Centre Plateau */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#FFB703] font-bold text-sm uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#D90429]" />
              <span>Centre Optique Plateau</span>
            </div>
            <p className="text-sm text-white/80">
              Avenue Chardy / Boulevard de la République<br />
              Centre des Affaires, Abidjan Plateau
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB703]" />
                <a href={`tel:${siteConfig.contactPlateau}`} className="hover:text-white font-medium">
                  {siteConfig.contactPlateau}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/40" />
                <span>Lun - Ven : 08h00 - 18h30 | Sam : 09h00 - 17h00</span>
              </div>
            </div>
            <div className="pt-1">
              <a 
                href="#bilan-rdv" 
                className="text-xs text-[#FFB703] hover:underline font-semibold flex items-center gap-1"
              >
                Prendre rendez-vous au Plateau &rarr;
              </a>
            </div>
          </div>

          {/* Col 3: Boutique Marcory */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#FFB703] font-bold text-sm uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#D90429]" />
              <span>Boutique & Espace Marcory</span>
            </div>
            <p className="text-sm text-white/80">
              Rue A55 Montigny<br />
              Marcory Résidentiel, Abidjan
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB703]" />
                <a href={`tel:${siteConfig.contactMarcory}`} className="hover:text-white font-medium">
                  {siteConfig.contactMarcory}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/40" />
                <span>Lun - Ven : 08h30 - 19h00 | Sam : 09h00 - 18h00</span>
              </div>
            </div>
            <div className="pt-1">
              <a 
                href="#bilan-rdv" 
                className="text-xs text-[#FFB703] hover:underline font-semibold flex items-center gap-1"
              >
                Prendre rendez-vous à Marcory &rarr;
              </a>
            </div>
          </div>

          {/* Col 4: Assurances & Engagements */}
          <div className="flex flex-col gap-4">
            <span className="text-[#FFB703] font-bold text-sm uppercase tracking-wider">
              Partenariats Assurances
            </span>
            <p className="text-xs text-white/70 leading-relaxed">
              Nous gérons directement votre prise en charge avec toutes les assurances majeures en Côte d'Ivoire :
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ASCOMA</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> NSIA Assurances</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SANLAM / SAHAM</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SUNU Assurances</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ALLIANZ CI</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Gras Savoye / WTW</span>
            </div>
            <div className="pt-2">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/70">
                <strong className="text-white">Email assistance :</strong> {siteConfig.email}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} Lunettes de Paris Abidjan. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Opticien Agréé Côte d'Ivoire</span>
            <span>Garantie Authenticité & Adaptation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
