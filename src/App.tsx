import React from 'react';
import DotGrid from '@/components/ui/DotGrid';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Pricing } from '@/components/sections/Pricing';
import { Benefits } from '@/components/sections/Benefits';
import { Devices } from '@/components/sections/Devices';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/sections/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-[#050805] text-[#e8f0e8] overflow-x-hidden min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={10}
          gap={24}
          baseColor="#0a1a0f"
          activeColor="#00ff99"
          proximity={120}
          shockRadius={200}
          shockStrength={4}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Pricing />
          <Benefits />
          <Devices />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;