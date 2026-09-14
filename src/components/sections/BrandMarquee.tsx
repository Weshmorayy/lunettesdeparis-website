const brands = [
  'HENRY JULLIEN PARIS',
  'AHLEM PARIS',
  'RAY-BAN',
  'MICHAEL KORS',
  'ESSILOR',
  'ZEISS',
  'LUNETTES DE PARIS',
  'HENRY JULLIEN PARIS',
  'AHLEM PARIS',
  'RAY-BAN',
  'MICHAEL KORS',
  'ESSILOR',
  'ZEISS',
  'LUNETTES DE PARIS',
];

export default function BrandMarquee() {
  return (
    <div className="bg-[#0A1931] py-4 overflow-hidden">
      <div className="animate-marquee">
        {brands.map((brand, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold px-8 whitespace-nowrap">
              {brand}
            </span>
            <span className="text-[#FFB703] text-xs flex-shrink-0">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
