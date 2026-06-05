import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Pricing } from './components/sections/Pricing';
import { Benefits } from './components/sections/Benefits';
import { Devices } from './components/sections/Devices';
import { Cta } from './components/sections/Cta';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-[#050805] text-[#e8f0e8] overflow-x-hidden min-h-screen relative before:content-[''] before:fixed before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.035%22/%3E%3C/svg%3E')] before:pointer-events-none before:z-0">
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
  );
};

export default App;