import Image from 'next/image';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Services', href: '#services' },
  { label: 'Visagisme', href: '#morpho' },
  { label: 'Nos Centres', href: '#centres' },
  { label: 'Prendre RDV', href: '#bilan' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1931] pt-20 pb-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/images/brand/logo.png"
              alt="Lunettes de Paris"
              width={46}
              height={46}
              className="rounded-full"
            />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-[0.2em]">Lunettes de Paris</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest mt-0.5">Abidjan</p>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs italic font-serif">
            &ldquo;Votre regard mérite son style.&rdquo;
          </p>
          <p className="text-white/30 text-xs mt-4">
            Opticien-lunetier depuis plus de 15 ans en Côte d&apos;Ivoire.
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#FFB703] font-bold mb-6">Navigation</p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#FFB703] font-bold mb-6">Contact</p>
          <div className="space-y-4">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Plateau</p>
              <a href="tel:+221708027277" className="text-white/60 text-sm hover:text-white transition-colors block">
                {siteConfig.contactPlateau}
              </a>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Marcory</p>
              <a href="tel:+221708027277" className="text-white/60 text-sm hover:text-white transition-colors block">
                {siteConfig.contactMarcory}
              </a>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-white/60 text-sm hover:text-white transition-colors block">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-white/25 text-[10px]">
          © {new Date().getFullYear()} Lunettes de Paris Abidjan. Tous droits réservés.
        </p>
        <p className="text-white/25 text-[10px]">
          Plateau · Ave Chardy / Bd République &nbsp;·&nbsp; Marcory · Rue A55 Montigny
        </p>
      </div>
    </footer>
  );
}
