'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Filter, 
  Glasses, 
  Sun, 
  Sparkles, 
  Baby, 
  Laptop, 
  ShieldCheck, 
  MessageCircle,
  Eye,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { GlassesCategory, GlassesProduct } from '@/types';
import { formatPriceFCFA } from '@/lib/utils';

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFrameType, setSelectedFrameType] = useState<string>('all');

  const categories: { id: string; label: string; icon: any }[] = [
    { id: 'all', label: 'Toutes les Montures', icon: Glasses },
    { id: 'vue', label: 'Optique & Vue', icon: Eye },
    { id: 'solaire', label: 'Solaires & UV400', icon: Sun },
    { id: 'anti-lumiere-bleue', label: 'Anti-Lumière Bleue', icon: Laptop },
    { id: 'enfants', label: 'Enfants & Juniors', icon: Baby },
  ];

  const filteredProducts = siteConfig.products.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchFrame = selectedFrameType === 'all' || product.frameType === selectedFrameType;
    return matchCategory && matchFrame;
  });

  return (
    <section id="catalogue" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1931]/5 text-[#0A1931] text-xs font-bold uppercase tracking-wider mb-3">
              <Glasses className="w-3.5 h-3.5 text-[#D90429]" />
              Haute Lunetterie & Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight">
              Catalogue Montures & Solaires
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Plus de 500 références disponibles en boutique. Acétate noble, titane d’orfèvrerie et montures créateurs testées pour un confort durable.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">
              {filteredProducts.length} modèle(s) affiché(s)
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#0A1931] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FFB703]' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Product Top Image Box with Pure White Background */}
              <div className="relative h-64 w-full bg-white p-8 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0A1931] text-[#FFB703] shadow-sm">
                    {product.badge}
                  </span>
                )}

                <span className="absolute top-4 right-4 z-10 text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  {product.frameType}
                </span>

                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-semibold">
                  <span className="text-[#D90429] uppercase tracking-wider font-bold">{product.brand}</span>
                  <span>{product.shape}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0A1931] mb-2 group-hover:text-[#D90429] transition-colors">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features Tags */}
                <div className="space-y-1.5 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar: Price & Booking */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-black text-[#0A1931]">
                      {formatPriceFCFA(product.price)}
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs text-slate-400 line-through">
                        {formatPriceFCFA(product.originalPrice)}
                      </div>
                    )}
                  </div>

                  <a 
                    href={`https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent(`Bonjour, je souhaite réserver la monture *${product.name}* (${product.brand} - ${formatPriceFCFA(product.price)}) et effectuer un essayage.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A1931] hover:bg-[#D90429] text-white text-xs font-bold shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Réserver / Essayer</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0A1931] to-[#0D2244] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703]">
              Recherche d'une marque ou d'un modèle précis ?
            </span>
            <h3 className="text-2xl font-bold">
              Consultez nos 500+ modèles en showroom au Plateau ou à Marcory
            </h3>
            <p className="text-sm text-white/70 max-w-xl">
              Nos opticiens diplômés commandent également vos verres progressifs ou correcteurs spécifiques sous 48h.
            </p>
          </div>

          <a 
            href={`https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent("Bonjour Lunettes de Paris, je recherche un modèle de lunettes spécifique, pouvez-vous m'aider ?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#FFB703] hover:bg-amber-400 text-[#0A1931] text-sm font-black shadow-lg transition-all whitespace-nowrap"
          >
            Demander un Modèle Particulier
          </a>
        </div>

      </div>
    </section>
  );
}
