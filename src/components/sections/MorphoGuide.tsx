'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

type FaceId = 'rond' | 'ovale' | 'carre' | 'rectangulaire' | 'coeur';

interface FaceOption {
  id: FaceId;
  label: string;
  svgPath: string;
  recommend: string;
  avoid: string;
  why: string;
}

const faces: FaceOption[] = [
  {
    id: 'rond',
    label: 'Rond',
    svgPath: 'M50,10 C75,10 90,30 90,55 C90,78 75,90 50,90 C25,90 10,78 10,55 C10,30 25,10 50,10Z',
    recommend: 'Montures carrées, rectangulaires ou géométriques pour allonger visuellement le visage.',
    avoid: 'Les montures rondes ou ovales qui renforcent le côté circular du visage.',
    why: 'Les angles créent un contraste dynamique avec vos joues pleines.',
  },
  {
    id: 'ovale',
    label: 'Ovale',
    svgPath: 'M50,8 C70,8 88,27 88,52 C88,75 70,92 50,92 C30,92 12,75 12,52 C12,27 30,8 50,8Z',
    recommend: 'Presque toutes les formes fonctionnent — carrées, pilote, cat-eye, rondes.',
    avoid: 'Les montures trop volumineuses qui déséquilibrent les proportions naturelles.',
    why: 'Le visage ovale est la forme de référence — proportions idéales.',
  },
  {
    id: 'carre',
    label: 'Carré',
    svgPath: 'M15,15 L85,15 L85,75 L15,75 Z',
    recommend: 'Montures rondes, ovales ou légèrement incurvées pour adoucir les angles.',
    avoid: 'Les montures carrées ou rectangulaires qui amplifient les angles de la mâchoire.',
    why: 'Les courbes équilibrent la structure forte et angulaire du visage.',
  },
  {
    id: 'rectangulaire',
    label: 'Allongé',
    svgPath: 'M15,20 L85,20 L85,80 L15,80 Z',
    recommend: 'Montures larges, hautes ou avec des décorations sur les tempes.',
    avoid: 'Les montures étroites ou petites qui étirent encore plus le visage.',
    why: 'Les montures larges ajoutent de la largeur et raccourcissent visuellement le visage.',
  },
  {
    id: 'coeur',
    label: 'Cœur',
    svgPath: 'M50,80 C20,60 5,45 5,30 C5,15 20,8 35,12 C42,14 47,20 50,25 C53,20 58,14 65,12 C80,8 95,15 95,30 C95,45 80,60 50,80Z',
    recommend: 'Montures légères, sans bord supérieur, ou aviateur bas de gamme.',
    avoid: 'Les montures cat-eye ou avec une barre supérieure large qui élargissent le front.',
    why: 'L\'objectif est d\'attirer le regard vers le bas pour équilibrer le front large.',
  },
];

export default function MorphoGuide() {
  const [selected, setSelected] = useState<FaceId | null>(null);
  const selectedFace = faces.find((f) => f.id === selected);

  const waLink = selectedFace
    ? `https://wa.me/${siteConfig.whatsappMain}?text=${encodeURIComponent(
        `Bonjour, j'ai un visage ${selectedFace.label} et je cherche des conseils montures personnalisés.`
      )}`
    : `https://wa.me/${siteConfig.whatsappMain}`;

  return (
    <section id="morpho" className="py-24 bg-[#F5F5F3]">
      <div className="px-6 md:px-16">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Guide visagisme</p>
          <h2 className="font-serif text-[#0A1931] text-4xl md:text-5xl max-w-lg leading-tight">
            Quelle monture pour votre visage ?
          </h2>
          <div className="w-12 h-[2px] bg-[#D90429] mt-5" />
          <p className="text-gray-500 mt-5 max-w-lg">
            Sélectionnez la forme de votre visage. Nos recommandations s&apos;adaptent à vos traits.
          </p>
        </div>

        {/* Face shape selector */}
        <div className="flex gap-4 md:gap-8 flex-wrap mb-12">
          {faces.map((face) => (
            <button
              key={face.id}
              onClick={() => setSelected(face.id === selected ? null : face.id)}
              className={`flex flex-col items-center gap-3 group transition-all ${
                selected === face.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center transition-all ${
                  selected === face.id
                    ? 'bg-[#0A1931]'
                    : 'bg-white border border-gray-200 group-hover:border-[#0A1931]'
                }`}
              >
                <svg viewBox="0 0 100 100" className="w-9 h-9">
                  <path
                    d={face.svgPath}
                    fill={selected === face.id ? '#FFB703' : '#0A1931'}
                    opacity={0.9}
                  />
                </svg>
              </div>
              <span
                className={`text-[9px] uppercase tracking-[0.2em] font-bold ${
                  selected === face.id ? 'text-[#D90429]' : 'text-gray-500'
                }`}
              >
                {face.label}
              </span>
            </button>
          ))}
        </div>

        {/* Recommendation panel */}
        {selectedFace && (
          <div className="border-l-4 border-[#D90429] pl-8 py-4 max-w-2xl animate-fade-in">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D90429] font-bold mb-4">
              Visage {selectedFace.label} — Recommandations
            </p>
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">À privilégier</p>
              <p className="text-[#0A1931] leading-relaxed">{selectedFace.recommend}</p>
            </div>
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">À éviter</p>
              <p className="text-gray-500 leading-relaxed">{selectedFace.avoid}</p>
            </div>
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Pourquoi ?</p>
              <p className="text-gray-500 text-sm italic leading-relaxed">{selectedFace.why}</p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A1931] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold inline-block hover:bg-[#D90429] transition-colors"
            >
              Conseil personnalisé en boutique →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
