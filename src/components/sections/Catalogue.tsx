'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { formatPriceFCFA } from '@/lib/utils';

type Filter = 'Tous' | 'Optiques' | 'Solaires' | 'High-Tech';

const categoryMap: Record<Filter, string[]> = {
  Tous: ['vue', 'solaire', 'anti-lumiere-bleue'],
  Optiques: ['vue'],
  Solaires: ['solaire'],
  'High-Tech': ['anti-lumiere-bleue'],
};

export default function Catalogue() {
  const [filter, setFilter] = useState<Filter>('Tous');

  const filtered = siteConfig.products.filter((p) =>
    categoryMap[filter].includes(p.category)
  );

  return (
    <section id="collections" className="py-20 bg-white">
      {/* Header row */}
      <div className="px-6 md:px-16 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Nos sélections</p>
          <h2 className="font-serif text-[#0A1931] text-4xl md:text-5xl">Collection</h2>
          <div className="w-12 h-[2px] bg-[#D90429] mt-4" />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-1">
          {(['Tous', 'Optiques', 'Solaires', 'High-Tech'] as Filter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap pb-1.5 transition-all border-b-2 ${
                filter === cat
                  ? 'border-[#D90429] text-[#0A1931]'
                  : 'border-transparent text-gray-400 hover:text-[#0A1931]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll rail */}
      <div className="flex gap-0 overflow-x-auto scrollbar-hide pl-6 md:pl-16 pr-6">
        {filtered.map((product) => {
          const waMsg = encodeURIComponent(
            `Bonjour, je suis intéressé(e) par la monture "${product.name}" (${formatPriceFCFA(product.price)}). Puis-je avoir plus d'informations ?`
          );
          const waLink = `https://wa.me/${siteConfig.whatsappMain}?text=${waMsg}`;

          return (
            <div
              key={product.id}
              className="min-w-[280px] md:min-w-[300px] mr-6 flex-shrink-0 bg-white group"
            >
              {/* Badge — OUTSIDE the image overflow-hidden container */}
              {product.badge && (
                <div className="bg-[#0A1931] text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 inline-block">
                  {product.badge}
                </div>
              )}

              {/* Image container — isolated overflow-hidden */}
              <div className="overflow-hidden bg-white h-[220px] flex items-center justify-center border-t border-b border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product info */}
              <div className="py-5">
                <p className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-medium">
                  {product.brand}
                </p>
                <h3 className="font-serif text-[#0A1931] text-lg mt-1 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-[#0A1931] font-bold text-base">
                    {formatPriceFCFA(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      {formatPriceFCFA(product.originalPrice)}
                    </span>
                  )}
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] text-[#D90429] font-bold border-b border-[#D90429] pb-0.5 hover:text-[#0A1931] hover:border-[#0A1931] transition-colors"
                >
                  Essayer en boutique →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* "View all" link */}
      <div className="px-6 md:px-16 mt-10">
        <a
          href={`https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent('Bonjour, je souhaite voir votre catalogue complet de montures.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold hover:text-[#D90429] transition-colors"
        >
          Voir tout le catalogue (+500 montures) →
        </a>
      </div>
    </section>
  );
}
