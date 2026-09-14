import { siteConfig } from '@/config/site';

export default function EyeHealth() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F5F5F3]">
      {/* Header */}
      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Santé visuelle</p>
          <h2 className="font-serif text-[#0A1931] text-4xl md:text-5xl leading-tight max-w-sm">
            Nos conseils d&apos;opticien
          </h2>
          <div className="w-12 h-[2px] bg-[#D90429] mt-5" />
        </div>
        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
          Trois sujets décryptés par notre équipe. Parce que bien voir commence par bien comprendre.
        </p>
      </div>

      {/* Tips — horizontal magazine strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {siteConfig.healthTips.map((tip, i) => (
          <div key={tip.id} className="md:px-8 first:pl-0 last:pr-0 py-8 md:py-0">
            {/* Number */}
            <span className="font-serif text-[#D90429]/30 text-5xl font-bold leading-none block mb-4">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#FFB703] font-bold mb-3">
              {tip.tag}
            </p>
            <h3 className="font-serif text-[#0A1931] text-xl leading-snug mb-3">
              {tip.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{tip.summary}</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400">{tip.readTime} de lecture</p>
          </div>
        ))}
      </div>
    </section>
  );
}
