import React from 'react';
import { LANDING_CONFIG } from '../../config/landing';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#080f08] border-t border-[rgba(0,255,153,0.15)] py-10 px-6 text-center relative z-10">
            <div className="font-['Bebas_Neue'] text-xl text-[#00ff99] tracking-[3px] mb-3">
                P2<span className="text-[#7a9a7a]">SEVEN IPTV</span>
            </div>
            <p className="text-[0.8rem] text-[#7a9a7a] leading-relaxed">
                © 2026 P2Seven IPTV — Todos os direitos reservados<br />
                <span className="text-[0.75rem]">Atendimento via WhatsApp: {LANDING_CONFIG.supportPhone}</span>
            </p>
        </footer>
    );
};