import { siteConfig } from '@/config/site';

export default function Services() {
  return (
    <section id="services" className="bg-[#0A1931] py-24 px-6 md:px-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[#FFB703] text-[10px] uppercase tracking-[0.3em] mb-4">Ce que nous faisons</p>
        <h2 className="font-serif text-white text-4xl md:text-5xl max-w-lg leading-tight">
          Nos services
        </h2>
      </div>

      {/* Numbered service list */}
      <div className="divide-y divide-white/10 max-w-4xl">
        {siteConfig.services.map((service, i) => (
          <div key={service.id} className="flex gap-8 md:gap-12 py-10 group">
            {/* Number */}
            <div className="flex-shrink-0 pt-1">
              <span className="font-serif text-[#D90429] text-3xl md:text-4xl font-bold leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide leading-snug">
                  {service.title}
                </h3>
                {service.badge && (
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#FFB703] font-bold border border-[#FFB703]/40 px-2.5 py-1 self-start flex-shrink-0">
                    {service.badge}
                  </span>
                )}
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                {service.highlights.map((h, hi) => (
                  <div key={hi} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#FFB703] flex-shrink-0" />
                    <span className="text-white/40 text-xs">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 pt-10 border-t border-white/10">
        <a
          href="#bilan"
          className="inline-block bg-[#D90429] text-white px-10 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-red-700 transition-colors"
        >
          Prendre RDV — Bilan visuel offert →
        </a>
      </div>
    </section>
  );
}
