import React from 'react';
import { Tv, Smartphone, Laptop, Tablet, type LucideIcon } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const devices: { icon: LucideIcon; name: string }[] = [
    { icon: Tv, name: 'Smart TV' },
    { icon: Smartphone, name: 'Celular' },
    { icon: Laptop, name: 'Computador' },
    { icon: Tablet, name: 'Tablet' },
];

export const Devices: React.FC = () => {
    return (
        <section className="py-[100px] px-6 max-w-[1100px] mx-auto relative z-10">
            <ScrollReveal>
                <span className="block text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#00ff99] text-center mb-3">Compatibilidade total</span>
                <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3.5rem)] text-center text-white tracking-wide mb-4">FUNCIONA EM TODOS OS SEUS APARELHOS</h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-15">
                {devices.map((d, idx) => {
                    const Icon = d.icon;
                    return (
                        <ScrollReveal key={d.name} delay={idx * 80}>
                            <div className="group bg-[#0d150d] border border-[rgba(0,255,153,0.15)] rounded-xl p-[28px_20px] text-center transition-all duration-300 hover:border-[#00ff99] hover:bg-[#111d11]">
                                <div className="w-14 h-14 mx-auto rounded-xl bg-[rgba(0,255,153,0.08)] border border-[rgba(0,255,153,0.15)] flex items-center justify-center mb-3 transition-colors duration-300 group-hover:border-[rgba(0,255,153,0.35)] group-hover:bg-[rgba(0,255,153,0.12)]">
                                    <Icon className="w-7 h-7 text-[#00ff99]" strokeWidth={1.5} />
                                </div>
                                <div className="font-semibold text-[0.9rem] text-white">{d.name}</div>
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
};
