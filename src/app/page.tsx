import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BrandMarquee from '@/components/sections/BrandMarquee';
import Catalogue from '@/components/sections/Catalogue';
import EditorialSplit from '@/components/sections/EditorialSplit';
import MorphoGuide from '@/components/sections/MorphoGuide';
import Services from '@/components/sections/Services';
import Assurances from '@/components/sections/Assurances';
import BilanBooking from '@/components/sections/BilanBooking';
import Stores from '@/components/sections/Stores';
import Testimonials from '@/components/sections/Testimonials';
import EyeHealth from '@/components/sections/EyeHealth';
import SchemaOrg from '@/components/seo/SchemaOrg';

export default function HomePage() {
  return (
    <main>
      <SchemaOrg />
      <Header />
      <Hero />
      <BrandMarquee />
      <Catalogue />
      <EditorialSplit />
      <MorphoGuide />
      <Services />
      <Assurances />
      <BilanBooking />
      <Stores />
      <Testimonials />
      <EyeHealth />
      <Footer />
    </main>
  );
}
