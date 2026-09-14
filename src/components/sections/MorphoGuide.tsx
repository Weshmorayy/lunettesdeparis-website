'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Check, 
  HelpCircle, 
  ArrowRight, 
  User, 
  Eye, 
  ShieldCheck, 
  Layers,
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { FaceShape } from '@/types';
import { formatPriceFCFA } from '@/lib/utils';

type ValidFaceShape = 'rond' | 'ovale' | 'carre' | 'rectangulaire' | 'coeur';

export default function MorphoGuide() {
  const [selectedShape, setSelectedShape] = useState<ValidFaceShape>('rond');

  const shapeGuides: Record<ValidFaceShape, {
    title: string;
    description: string;
    recommendedFrame: string;
    avoidFrame: string;
    iconText: string;
  }> = {
    rond: {
      title: "Visage Rond",
      description: "Des lignes douces et des joues pleines. L'objectif est d'allonger et de structurer les traits avec du caractère.",
      recommendedFrame: "Montures rectangulaires, carrées, géométriques ou papillon.",
      avoidFrame: "Petites montures rondes qui accentuent la rondeur.",
      iconText: "⭕",
    },
    ovale: {
      title: "Visage Ovale",
      description: "Des proportions équilibrées et harmonieuses. C'est la forme idéale qui s'adapte à presque toutes les montures !",
      recommendedFrame: "Montures pantographes, aviateurs, rondes ou oversize créateur.",
      avoidFrame: "Montures excessivement larges qui dépassent des tempes.",
      iconText: "🥚",
    },
    carre: {
      title: "Visage Carré",
      description: "Une mâchoire affirmée et un front large. L'objectif est d'adoucir les angles et d'apporter de la légèreté.",
      recommendedFrame: "Montures rondes, ovales, fines en titane ou papillon.",
      avoidFrame: "Montures carrées épaisses et angulaires très strictes.",
      iconText: "⏹️",
    },
    rectangulaire: {
      title: "Visage Rectangulaire / Allongé",
      description: "Un visage plus long que large avec des traits droits. L'objectif est de rééquilibrer la hauteur du regard.",
      recommendedFrame: "Grandes montures, formes aviateur, pont bas ou montures bicolores.",
      avoidFrame: "Montures trop étroites et petites qui étirent le visage.",
      iconText: "▯",
    },
    coeur: {
      title: "Visage Cœur / Triangle Inversé",
      description: "Front large et menton pointu. L'objectif est d'élargir visuellement la partie inférieure du visage.",
      recommendedFrame: "Montures fines, percées/invisibles, ovales ou cat-eye discret.",
      avoidFrame: "Montures lourdes sur le dessus et trop épaisses.",
      iconText: "❤️",
    },
  };

  const currentGuide = shapeGuides[selectedShape];

  // Filter products matching selected shape
  const filteredProducts = siteConfig.products.filter(p => 
    p.suitedForFaces.includes('tous') || p.suitedForFaces.includes(selectedShape)
  );

  return (
    <section id="morpho-guide" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F2FD] text-[#0A1931] border border-[#1565C0]/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#FFB703]" />
            Guide Interactif Visagisme
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight mb-4">
            Quelle monture est <span className="text-[#D90429]">vraiment faite</span> pour vous ?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Ronde, carrée, discrète ou audacieuse... Le bon choix dépend de la morphologie de votre visage, de votre teint et de votre mode de vie.
          </p>
        </div>

        {/* Step 1: Shape Selector Bar */}
        <div className="mb-10">
          <label className="block text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            1. Choisissez la forme de votre visage :
          </label>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {(Object.keys(shapeGuides) as ValidFaceShape[]).map((shape) => {
              const info = shapeGuides[shape];
              const isSelected = selectedShape === shape;
              return (
                <button
                  key={shape}
                  onClick={() => setSelectedShape(shape)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all border ${
                    isSelected
                      ? 'bg-[#0A1931] text-white border-[#0A1931] shadow-lg scale-105 ring-2 ring-[#FFB703]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span className="text-base">{info.iconText}</span>
                  <span>{info.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Diagnostic Card with Visual Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-gradient-to-br from-slate-50 to-[#F0F7FF] rounded-3xl p-6 sm:p-10 border border-slate-200">
          
          {/* Advice Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{currentGuide.iconText}</span>
              <h3 className="text-2xl font-bold text-[#0A1931]">
                Conseil d'Opticien pour {currentGuide.title}
              </h3>
            </div>
            
            <p className="text-slate-700 text-base leading-relaxed">
              {currentGuide.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Montures Idéales
                </div>
                <p className="text-sm font-medium">
                  {currentGuide.recommendedFrame}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5 mb-1.5">
                  <HelpCircle className="w-4 h-4 text-rose-600" />
                  À Éviter
                </div>
                <p className="text-sm font-medium">
                  {currentGuide.avoidFrame}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent(`Bonjour, j'ai un visage ${currentGuide.title} et j'aimerais recevoir des recommandations de montures adaptées.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A1931] hover:text-[#D90429] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Demander un conseil personnalisé en direct sur WhatsApp &rarr;
              </a>
            </div>
          </div>

          {/* Model Showcase for this Shape */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-[4/3] bg-slate-200">
              <Image 
                src="/images/editorial/pexels-moha-sour-171531171-13048322.jpg" 
                alt="Harmonie monture et visage" 
                fill 
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs p-2.5 rounded-xl bg-[#0A1931]/80 backdrop-blur-sm">
                <span className="font-bold text-[#FFB703] block mb-0.5">Essai en boutique :</span>
                Essayez nos modèles dans nos centres de Plateau & Marcory avec l'aide d'un visagiste.
              </div>
            </div>
          </div>

        </div>

        {/* Step 2: Matching Montures List */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-extrabold text-[#0A1931]">
                Montures Recommandées pour votre Profil ({filteredProducts.length})
              </h3>
              <p className="text-xs text-slate-500">
                Sélectionnées spécialement pour équilibrer vos traits et sublimer votre regard.
              </p>
            </div>
            <a 
              href="#catalogue" 
              className="text-xs font-bold text-[#D90429] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              Voir tout le catalogue &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 3).map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image Container with pure white background */}
                <div className="relative h-56 w-full bg-white p-6 flex items-center justify-center border-b border-slate-100 group-hover:scale-105 transition-transform duration-500">
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#0A1931] text-[#FFB703] shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-4"
                  />
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {product.brand} &bull; {product.material}
                  </div>
                  <h4 className="text-base font-extrabold text-[#0A1931] mb-2 group-hover:text-[#D90429] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-[#0A1931]">
                        {formatPriceFCFA(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-xs text-slate-400 line-through">
                          {formatPriceFCFA(product.originalPrice)}
                        </div>
                      )}
                    </div>

                    <a 
                      href={`https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par la monture ${product.name} (${product.brand}) vue sur votre site.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#0A1931] hover:bg-[#D90429] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Réserver</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
