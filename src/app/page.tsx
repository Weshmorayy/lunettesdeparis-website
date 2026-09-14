import React from 'react';
import Hero from '@/components/sections/Hero';
import MorphoGuide from '@/components/sections/MorphoGuide';
import Catalogue from '@/components/sections/Catalogue';
import Services from '@/components/sections/Services';
import EyeHealth from '@/components/sections/EyeHealth';
import BilanBooking from '@/components/sections/BilanBooking';
import Stores from '@/components/sections/Stores';
import Testimonials from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MorphoGuide />
      <Catalogue />
      <Services />
      <EyeHealth />
      <BilanBooking />
      <Stores />
      <Testimonials />
    </div>
  );
}
