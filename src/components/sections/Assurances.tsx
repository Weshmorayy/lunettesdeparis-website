const insurers = [
  'ASCOMA',
  'NSIA',
  'SUNU',
  'ALLIANZ',
  'SAHAM',
  'SANLAM',
  'GRAS SAVOYE',
];

export default function Assurances() {
  return (
    <section className="bg-white border-y border-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Tiers payant agréé</p>
        <p className="font-serif text-[#0A1931] text-2xl md:text-3xl mb-10">
          Votre assurance règle directement. Zéro tracasserie.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {insurers.map((ins) => (
            <span
              key={ins}
              className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500 hover:text-[#0A1931] transition-colors"
            >
              {ins}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-xs mt-8">
          Apportez simplement votre carte d&apos;assurance. Nos équipes gèrent le dossier de prise en charge à votre place.
        </p>
      </div>
    </section>
  );
}
