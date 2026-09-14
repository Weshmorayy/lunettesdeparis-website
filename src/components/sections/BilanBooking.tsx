'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function BilanBooking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [store, setStore] = useState('Plateau');
  const [date, setDate] = useState('');
  const [insurance, setInsurance] = useState<'oui' | 'non' | ''>('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Bonjour Lunettes de Paris,`,
      `Je souhaite réserver un bilan visuel.`,
      ``,
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Centre : ${store}`,
      date ? `Date souhaitée : ${date}` : '',
      insurance ? `Assurance : ${insurance === 'oui' ? 'Oui' : 'Non'}` : '',
      note ? `Remarques : ${note}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const waNumber = store === 'Marcory' ? siteConfig.stores[1].whatsapp : siteConfig.stores[0].whatsapp;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="bilan" className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
      {/* Left: editorial image */}
      <div className="relative min-h-[340px] md:min-h-full hidden md:block overflow-hidden">
        <img
          src="/images/editorial/GL_CLP_VTO_D_03_NEW.jpg"
          alt="Bilan visuel Lunettes de Paris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute bottom-12 left-10 right-6">
          <p className="text-[#FFB703] text-[10px] uppercase tracking-[0.25em] mb-3">Bilan visuel</p>
          <p className="font-serif text-white text-3xl leading-snug">
            15 minutes.<br />Un regard transformé.
          </p>
          <p className="text-white/60 text-sm mt-3">
            Examen complet, résultat immédiat,<br />montures essayables le jour même.
          </p>
        </div>
      </div>

      {/* Right: form */}
      <div className="bg-[#F5F5F3] flex flex-col justify-center px-8 md:px-14 py-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Prise de rendez-vous</p>
        <h2 className="font-serif text-[#0A1931] text-3xl md:text-4xl mb-10 leading-tight">
          Réserver mon bilan visuel
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Nom complet</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="input-underline"
            />
          </div>

          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Téléphone</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+225 00 00 00 00 00"
              className="input-underline"
            />
          </div>

          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">Centre préféré</label>
            <div className="flex gap-4">
              {['Plateau', 'Marcory'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStore(s)}
                  className={`flex-1 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border transition-colors ${
                    store === s
                      ? 'bg-[#0A1931] text-white border-[#0A1931]'
                      : 'bg-transparent text-gray-500 border-gray-300 hover:border-[#0A1931]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Date souhaitée</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-underline"
            />
          </div>

          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">Assurance santé / mutuelle ?</label>
            <div className="flex gap-4">
              {([['oui', 'Oui'], ['non', 'Non']] as ['oui' | 'non', string][]).map(([val, lbl]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setInsurance(val)}
                  className={`flex-1 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border transition-colors ${
                    insurance === val
                      ? 'bg-[#0A1931] text-white border-[#0A1931]'
                      : 'bg-transparent text-gray-500 border-gray-300 hover:border-[#0A1931]'
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Remarques (optionnel)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ex: ancienne ordonnance, fatigue oculaire..."
              rows={3}
              className="input-underline resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#D90429] text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-red-700 transition-colors w-full"
          >
            Confirmer via WhatsApp →
          </button>
          <p className="text-gray-400 text-xs text-center -mt-4">
            Confirmation instantanée · Consultation sans engagement
          </p>
        </form>
      </div>
    </section>
  );
}
