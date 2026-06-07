import React from 'react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LANDING_CONFIG } from '@/config/landing';

export const Pricing: React.FC = () => {
    const features = [
        "Todos os canais liberados", "Filmes e séries completos", "Esportes ao vivo",
        "Conteúdo infantil", "Qualidade HD, Full HD e 4K", "Canais nacionais e internacionais",
        "Suporte rápido via WhatsApp"
    ];

    return (
        <section className="py-[100px] px-6 max-w-[1100px] mx-auto relative z-10">
            <ScrollReveal>
                <span className="block text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#00ff99] text-center mb-3">Preço simples e justo</span>
                <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3.5rem)] text-center text-white tracking-[1px] mb-4">UM PLANO. TUDO INCLUSO.</h2>
                <p className="text-center text-[#7a9a7a] text-base max-w-[480px] mx-auto mb-[60px] leading-[1.7]">Sem surpresas na fatura. Sem fidelidade. Acesse tudo por um valor fixo mensal.</p>
            </ScrollReveal>

            <div className="flex justify-center">
                <ScrollReveal delay={100}>
                    <div className="bg-[#0d150d] border border-[#00ff99] rounded-[20px] p-[50px] max-w-[520px] w-full relative overflow-hidden shadow-[0_0_80px_rgba(0,255,153,0.08)] before:content-[''] before:absolute before:top-0 before:left-[20%] before:right-[20%] before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#00ff99] before:to-transparent">
                        <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[radial-gradient(ellipse,rgba(0,255,153,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="inline-block bg-[rgba(0,255,153,0.1)] border border-[rgba(0,255,153,0.3)] text-[#00ff99] text-[0.7rem] font-semibold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-5">⭐ Mais popular</div>
                        <h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-[2px] mb-2">Plano Completo IPTV</h3>
                        <p className="text-[#7a9a7a] text-[0.875rem] leading-[1.6]">Acesso total a todos os canais, filmes, séries e conteúdo ao vivo.</p>

                        <div className="my-7">
                            <div className="text-[0.8rem] text-[#7a9a7a] uppercase tracking-[1px]">a partir de</div>
                            <div className="font-['Bebas_Neue'] text-8xl text-[#00ff99] tracking-[-2px] leading-none">
                                <sup className="text-3xl tracking-normal align-super">R$</sup>25<span className="text-3xl">,00</span>
                            </div>
                            <div className="text-[0.85rem] text-[#7a9a7a] mt-1">por mês · sem fidelidade</div>
                        </div>

                        <div className="h-[1px] bg-[rgba(0,255,153,0.15)] my-7" />
                        <ul className="flex flex-col gap-3.5 mb-9 text-[0.95rem] text-[#e8f0e8]">
                            {features.map(f => (
                                <li key={f} className="flex items-center gap-3">
                                    <span className="w-[22px] h-[22px] bg-[rgba(0,255,153,0.12)] rounded-full flex items-center justify-center text-[0.65rem] text-[#00ff99] shrink-0">✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <div className="w-full flex flex-col">
                            <Button href={LANDING_CONFIG.links.subscribePlan}>💬 ASSINAR AGORA NO WHATSAPP</Button>
                        </div>
                        <p className="text-center mt-3.5 text-[0.8rem] text-[#7a9a7a]">
                            Quer experimentar antes? <a href={LANDING_CONFIG.links.freeTrial} className="text-[#00ff99] font-medium hover:underline">Peça seu teste grátis de 6 horas →</a>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};