import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Devices: React.FC = () => {
    const devices = [
        { icon: '📺', name: 'Smart TV' }, { icon: '📱', name: 'Celular' },
        { icon: '💻', name: 'Computador' }, { icon: '📟', name: 'Tablet' }
    ];

    return (
        <section className="py-[100px] px-6 max-w-[1100px] mx-auto relative z-10">
            <ScrollReveal>
                <span className="block text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#00ff99] text-center mb-3">Compatibilidade total</span>
                <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3.5rem)] text-center text-white tracking-wide mb-4">FUNCIONA EM TODOS OS SEUS APARELHOS</h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-15">
                {devices.map((d, idx) => (
                    <ScrollReveal key={d.name} delay={idx * 80}>
                        <div className="bg-[#0d150d] border border-[rgba(0,255,153,0.15)] rounded-xl p-[28px_20px] text-center transition-all duration-300 hover:border-[#00ff99] hover:bg-[#111d11]">
                            <div className="text-4xl mb-3">{d.icon}</div>
                            <div className="font-semibold text-[0.9rem] text-white">{d.name}</div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};