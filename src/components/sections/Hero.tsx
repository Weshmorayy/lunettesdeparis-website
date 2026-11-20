export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-end pt-20"
      style={{ backgroundImage: "url('/images/editorial/pexels-moha-sour-171531171-13048322.jpg')" }}
    >
      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      {/* Yellow sticky-note badge — desktop only */}
      <div className="hidden md:block absolute top-24 right-10 lg:right-16 bg-[#FFB703] p-4 w-44 z-10 shadow-2xl rotate-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A1931] mb-1">Offre du mois</p>
        <p className="text-sm font-bold text-[#0A1931] leading-snug">Examen de vue offert pour tout achat</p>
        <div className="mt-2 w-4 h-0.5 bg-[#D90429]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 md:px-16 pb-16 md:pb-20 max-w-3xl">
        {/* Mobile offer pill */}
        <div className="inline-flex md:hidden items-center gap-2 bg-[#FFB703] text-[#0A1931] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D90429]" />
          <span>Offre : Examen de vue offert</span>
        </div>

        <p className="text-[#FFB703] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-3 md:mb-5 font-semibold">
          Opticien-Lunetier · Abidjan depuis 15 ans
        </p>
        <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.08] mb-4 md:mb-6">
          Voyez Clair,<br />Vivez Grand.
        </h1>
        <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-10 max-w-lg leading-relaxed">
          Montures de créateurs, verres haute précision et bilan visuel complet.
          Deux centres à <strong className="text-white">Plateau</strong> et <strong className="text-white">Marcory</strong>.
        </p>
        <div className="flex gap-3 md:gap-4 flex-wrap">
          <a
            href="#bilan"
            className="bg-[#D90429] text-white px-6 md:px-8 py-3.5 md:py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            Prendre RDV Bilan →
          </a>
          <a
            href="#collections"
            className="border border-white/70 text-white px-6 md:px-8 py-3.5 md:py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#0A1931] transition-colors"
          >
            Voir les montures
          </a>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0A1931]/95 backdrop-blur-sm flex items-center justify-between px-5 md:px-16 h-12 z-10 border-t border-white/10">
        <div className="flex items-center gap-4 text-white/70 text-[10px] uppercase tracking-widest overflow-hidden text-ellipsis whitespace-nowrap">
          <span>Plateau &amp; Marcory · +221 70 802 72 77</span>
        </div>
        <div className="flex items-center gap-2 flex-none">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70 text-[10px] uppercase tracking-widest">Ouvert</span>
        </div>
      </div>
    </section>
  );
}
