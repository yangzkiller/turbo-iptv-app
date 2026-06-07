import React from 'react';
import { Button } from '../ui/Button';
import { LANDING_CONFIG } from '../../config/landing';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-5 py-[18px] md:px-10 flex items-center justify-between bg-[#050805]/85 backdrop-blur-[16px] border-b border-[rgba(0,255,153,0.15)]">
            <a href="#" className="font-['Bebas_Neue'] text-[1.6rem] text-[#00ff99] tracking-[3px] no-underline">
                Turbo<span className="text-white">IPTV</span>
            </a>
            <Button href={LANDING_CONFIG.links.subscribe} variant="nav">
                Assinar Agora
            </Button>
        </nav>
    );
};