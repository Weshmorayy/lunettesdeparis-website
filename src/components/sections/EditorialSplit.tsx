export default function EditorialSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      {/* Left: full editorial image */}
      <div className="relative min-h-[50vh] md:min-h-full overflow-hidden">
        <img
          src="/images/editorial/pexels-pojuuu-35659738.jpg"
          alt="Femme portant des lunettes de créateur"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Right: navy content */}
      <div className="bg-[#0A1931] flex flex-col justify-center px-8 md:px-14 py-20">
        <p className="text-[#FFB703] text-[10px] uppercase tracking-[0.3em] mb-6">
          Le guide visagisme
        </p>
        <h2 className="font-serif text-white text-4xl md:text-5xl leading-[1.1] mb-7">
          Il suffit d&apos;une paire<br />
          pour changer<br />
          toute une allure.
        </h2>
        <p className="text-white/55 leading-relaxed mb-10 max-w-sm">
          Nos visagistes analysent la forme de votre visage, votre teint et votre style de vie
          pour vous orienter vers les montures qui vous subliment vraiment —
          et pas seulement celles qui sont à la mode.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#FFB703]" />
            <span className="text-white/70 text-sm">Analyse morpho-visage personnalisée</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#FFB703]" />
            <span className="text-white/70 text-sm">Plus de 500 modèles en boutique</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#FFB703]" />
            <span className="text-white/70 text-sm">Acétate, titane et montures percées</span>
          </div>
        </div>
        <a
          href="#morpho"
          className="bg-[#D90429] text-white px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-bold inline-block w-fit hover:bg-red-700 transition-colors"
        >
          Découvrir mon profil →
        </a>
      </div>
    </section>
  );
}
