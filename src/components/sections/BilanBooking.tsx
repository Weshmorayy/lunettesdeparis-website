'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  Eye,
  Send
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function BilanBooking() {
  const [centre, setCentre] = useState<'plateau' | 'marcory'>('plateau');
  const [motif, setMotif] = useState<string>('Examen de vue complet');
  const [hasInsurance, setHasInsurance] = useState<string>('Oui');
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [creneau, setCreneau] = useState('Matinée (09h00 - 12h30)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const targetStore = siteConfig.stores.find(s => s.id === centre) || siteConfig.stores[0];
    const targetPhone = centre === 'plateau' ? siteConfig.contactPlateau : siteConfig.contactMarcory;

    const message = `👓 *NOUVELLE DEMANDE DE RDV — LUNETTES DE PARIS*
----------------------------------------
📍 *Centre choisi* : ${targetStore.name} (${targetStore.district})
👤 *Nom du patient* : ${nom}
📞 *Téléphone* : ${telephone}
🎯 *Motif de consultation* : ${motif}
⏰ *Créneau souhaité* : ${creneau}
🛡️ *Prise en charge Assurance* : ${hasInsurance}
📝 *Détails / Besoins* : ${notes || 'Aucun détail supplémentaire'}
----------------------------------------
Envoyé depuis le site officiel lunettesdeparis.ci`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetStore.whatsapp}?text=${encoded}`;
    
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="bilan-rdv" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D90429]/10 text-[#D90429] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              Réservation Immédiate
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight">
              Prenez rendez-vous pour votre <span className="text-[#D90429]">bilan visuel gratuit</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Choisissez votre centre optique (Plateau ou Marcory). Nos opticiens diplômés vous reçoivent pour un contrôle approfondi de votre acuité visuelle et le choix sur mesure de vos montures.
            </p>

            {/* Commitments Card */}
            <div className="p-6 rounded-3xl bg-[#F0F7FF] border border-[#1565C0]/20 space-y-3.5">
              <h4 className="text-sm font-bold text-[#0A1931] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB703]" />
                Ce qui vous attend lors de votre visite :
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Réfraction numérique HD sans douleur en 15 minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Conseils morpho-visage avec un opticien dédié</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Prise en charge directe avec votre assurance maladie</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Montage et centrage haute précision en atelier</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Besoin d'aide ou d'un conseil immédiat ?
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`tel:${siteConfig.contactPlateau}`}
                  className="flex items-center gap-2 text-xs font-bold text-[#0A1931] hover:text-[#D90429]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D90429]" />
                  <span>Plateau : {siteConfig.contactPlateau}</span>
                </a>
                <span className="hidden sm:inline text-slate-300">|</span>
                <a 
                  href={`tel:${siteConfig.contactMarcory}`}
                  className="flex items-center gap-2 text-xs font-bold text-[#0A1931] hover:text-[#D90429]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D90429]" />
                  <span>Marcory : {siteConfig.contactMarcory}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Card (Crisp White High Contrast) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-6 sm:p-10 relative">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Centre Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-2">
                  1. Choisissez votre Centre Optique *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCentre('plateau')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      centre === 'plateau'
                        ? 'bg-[#0A1931] text-white border-[#0A1931] shadow-md ring-2 ring-[#FFB703]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase">Centre Plateau</span>
                      <MapPin className={`w-4 h-4 ${centre === 'plateau' ? 'text-[#FFB703]' : 'text-slate-400'}`} />
                    </div>
                    <p className={`text-xs ${centre === 'plateau' ? 'text-white/80' : 'text-slate-500'}`}>
                      Ave Chardy / Bd République
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCentre('marcory')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      centre === 'marcory'
                        ? 'bg-[#0A1931] text-white border-[#0A1931] shadow-md ring-2 ring-[#FFB703]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase">Boutique Marcory</span>
                      <MapPin className={`w-4 h-4 ${centre === 'marcory' ? 'text-[#FFB703]' : 'text-slate-400'}`} />
                    </div>
                    <p className={`text-xs ${centre === 'marcory' ? 'text-white/80' : 'text-slate-500'}`}>
                      Rue A55 Montigny
                    </p>
                  </button>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-1.5">
                    Nom & Prénoms *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      required 
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Ex: M. Koffi Eric"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0A1931] focus:ring-2 focus:ring-[#1565C0] focus:border-transparent outline-none bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-1.5">
                    Numéro Téléphone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="tel" 
                      required 
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="+225 07 00 00 00 00"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0A1931] focus:ring-2 focus:ring-[#1565C0] focus:border-transparent outline-none bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              {/* Consultation Motif & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-1.5">
                    Motif de la visite *
                  </label>
                  <select 
                    value={motif}
                    onChange={(e) => setMotif(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm text-[#0A1931] focus:ring-2 focus:ring-[#1565C0] outline-none bg-slate-50/50 font-medium"
                  >
                    <option value="Examen de vue complet (Bilan visuel)">Examen de vue complet (Bilan visuel)</option>
                    <option value="Conseil et choix de monture vue">Conseil et choix de monture vue</option>
                    <option value="Lunettes de soleil & protection UV">Lunettes de soleil & protection UV</option>
                    <option value="Lunettes anti-lumière bleue écran">Lunettes anti-lumière bleue écran</option>
                    <option value="Contrôle de vue enfant / junior">Contrôle de vue enfant / junior</option>
                    <option value="Renouvellement ordonnance & devis assurance">Renouvellement ordonnance & assurance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-1.5">
                    Créneau préféré *
                  </label>
                  <select 
                    value={creneau}
                    onChange={(e) => setCreneau(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm text-[#0A1931] focus:ring-2 focus:ring-[#1565C0] outline-none bg-slate-50/50 font-medium"
                  >
                    <option value="Matinée (09h00 - 12h30)">Matinée (09h00 - 12h30)</option>
                    <option value="Midi (12h30 - 14h30)">Pause Déjeuner (12h30 - 14h30)</option>
                    <option value="Après-midi (14h30 - 18h30)">Après-midi (14h30 - 18h30)</option>
                    <option value="Samedi matin">Samedi Matin</option>
                  </select>
                </div>
              </div>

              {/* Insurance */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-1.5">
                  Bénéficiez-vous d'une assurance santé / mutuelle ?
                </label>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="insurance" 
                      value="Oui" 
                      checked={hasInsurance === 'Oui'}
                      onChange={() => setHasInsurance('Oui')}
                      className="w-4 h-4 text-[#D90429]"
                    />
                    <span>Oui (ASCOMA, NSIA, SANLAM, SUNU, ALLIANZ, etc.)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="insurance" 
                      value="Non" 
                      checked={hasInsurance === 'Non'}
                      onChange={() => setHasInsurance('Non')}
                      className="w-4 h-4 text-[#D90429]"
                    />
                    <span>Non (Règlement direct)</span>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-1.5">
                  Remarques ou ordonnance existante (optionnel)
                </label>
                <textarea 
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: J'ai une ancienne ordonnance, ou je ressens une fatigue oculaire devant l'ordinateur..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-[#0A1931] focus:ring-2 focus:ring-[#1565C0] outline-none bg-slate-50/50"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D90429] to-[#EF233C] text-white font-extrabold text-base shadow-glow-red hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Confirmer mon Rendez-vous via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Confirmation instantanée & consultation sans engagement.</span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
