export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-end"
      style={{ backgroundImage: "url('/images/editorial/pexels-moha-sour-171531171-13048322.jpg')" }}
    >
      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      {/* Yellow sticky-note badge — top right */}
      <div className="absolute top-20 right-5 md:right-14 bg-[#FFB703] p-4 w-44 z-10 shadow-2xl rotate-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A1931] mb-1">Offre du mois</p>
        <p className="text-sm font-bold text-[#0A1931] leading-snug">Examen de vue offert pour tout achat</p>
        <div className="mt-2 w-4 h-0.5 bg-[#D90429]" />
      </div>

      {/* Bottom-left content */}
      <div className="relative z-10 px-6 md:px-16 pb-20 max-w-3xl">
        <p className="text-[#FFB703] text-[11px] uppercase tracking-[0.25em] mb-5">
          Opticien-Lunetier · Abidjan depuis 15 ans
        </p>
        <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          Voyez Clair,<br />Vivez Grand.
        </h1>
        <p className="text-white/75 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
          Montures de créateurs, verres haute précision et bilan visuel complet.
          Deux centres à <strong className="text-white">Plateau</strong> et <strong className="text-white">Marcory</strong>.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#bilan"
            className="bg-[#D90429] text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-red-700 transition-colors"
          >
            Prendre RDV Bilan →
          </a>
          <a
            href="#collections"
            className="border border-white/70 text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#0A1931] transition-colors"
          >
            Voir les montures
          </a>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0A1931]/90 backdrop-blur-sm flex items-center justify-between px-6 md:px-16 h-12 z-10">
        <div className="flex items-center gap-6 text-white/60 text-[10px] uppercase tracking-widest">
          <span>Plateau · +225 07 68 35 15 15</span>
          <span className="hidden md:block">·</span>
          <span className="hidden md:block">Marcory · +225 07 68 01 11 11</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/60 text-[10px] uppercase tracking-widest">Ouvert maintenant</span>
        </div>
      </div>
    </section>
  );
}
