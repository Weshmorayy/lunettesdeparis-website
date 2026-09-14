import { siteConfig } from '@/config/site';

export default function Stores() {
  return (
    <section id="centres" className="py-24 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Où nous trouver</p>
        <h2 className="font-serif text-[#0A1931] text-4xl md:text-5xl max-w-md leading-tight">
          Deux centres à Abidjan
        </h2>
        <div className="w-12 h-[2px] bg-[#D90429] mt-5" />
      </div>

      {/* Stores grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {siteConfig.stores.map((store) => (
          <div key={store.id} className="border-l-2 border-[#D90429] pl-8">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#FFB703] font-bold mb-3">
              {store.district}
            </p>
            <h3 className="font-serif text-[#0A1931] text-2xl md:text-3xl mb-6 leading-snug">
              {store.name}
            </h3>
            <div className="space-y-3 mb-8">
              <p className="text-gray-500 text-sm leading-relaxed">{store.address}</p>
              <a
                href={`tel:${store.phone.replace(/\s/g, '')}`}
                className="text-[#D90429] font-bold text-xl block hover:text-[#0A1931] transition-colors"
              >
                {store.phone}
              </a>
              <div className="text-gray-400 text-xs space-y-1">
                <p>{store.hoursWeek}</p>
                <p>{store.hoursSat}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${store.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-[#0A1931] font-bold border-b border-[#0A1931] pb-0.5 w-fit hover:text-[#D90429] hover:border-[#D90429] transition-colors"
              >
                Contacter sur WhatsApp →
              </a>
              <a
                href="#bilan"
                className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold border-b border-gray-300 pb-0.5 w-fit hover:text-[#0A1931] hover:border-[#0A1931] transition-colors"
              >
                Prendre rendez-vous →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
