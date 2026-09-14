import { siteConfig } from '@/config/site';

export default function Testimonials() {
  return (
    <section className="bg-[#0A1931] py-24 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <div className="mb-14">
        <p className="text-[#FFB703] text-[10px] uppercase tracking-[0.3em] mb-3">Ce qu'ils disent</p>
        <h2 className="font-serif text-white text-4xl md:text-5xl">Ils nous font confiance</h2>
      </div>

      {/* Testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {siteConfig.testimonials.map((t) => (
          <div key={t.id} className="border-t border-white/15 pt-8">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-[#FFB703] text-sm">★</span>
              ))}
            </div>
            {/* Quote */}
            <p className="text-white/70 leading-relaxed text-sm mb-6 italic">
              &ldquo;{t.content}&rdquo;
            </p>
            {/* Attribution */}
            <div>
              <p className="text-white font-bold text-sm">{t.name}</p>
              <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
              {t.frameBought && (
                <p className="text-[#FFB703] text-[9px] uppercase tracking-widest mt-2">{t.frameBought}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
