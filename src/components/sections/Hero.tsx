import React from 'react';
import { Button } from '../ui/Button';
import { LANDING_CONFIG } from '../../config/landing';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 overflow-hidden bg-[#050805] before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.015)_2px,rgba(0,255,100,0.015)_4px)] before:pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,255,153,0.08)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(0,255,100,0.05)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(0,200,100,0.04)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10 inline-flex items-center gap-2 bg-[rgba(0,255,153,0.08)] border border-[rgba(0,255,153,0.15)] rounded-full px-[18px] py-2 text-[0.75rem] font-medium text-[#00ff99] tracking-[1.5px] uppercase mb-7 animate-[fadeUp_0.6s_ease_both]">
                <span className="w-[7px] h-[7px] bg-[#00ff99] rounded-full animate-[pulse_2s_infinite]" />
                Serviço Online Agora
            </div>

            <h1 className="relative z-10 font-['Bebas_Neue'] text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9] tracking-[2px] text-white animate-[fadeUp_0.6s_0.1s_ease_both]">
                ENTRETENIMENTO<br />
                <span className="text-[#00ff99]">SEM LIMITES</span>
            </h1>

            <p className="relative z-10 text-[clamp(1rem,2vw,1.2rem)] text-[#7a9a7a] font-light max-w-[520px] mx-auto mt-6 mb-10 leading-[1.7] animate-[fadeUp_0.6s_0.2s_ease_both]">
                Filmes, séries, esportes ao vivo e canais nacionais e internacionais — tudo por apenas <strong className="text-[#00ff99]">R$ 25/mês</strong>.
            </p>

            <div className="relative z-10 flex flex-wrap gap-4 justify-center animate-[fadeUp_0.6s_0.3s_ease_both]">
                <Button href={LANDING_CONFIG.links.freeTrial}>
                    🎁 Teste Grátis — 6 Horas
                </Button>
                <Button href={LANDING_CONFIG.links.subscribe} variant="secondary">
                    💬 Falar no WhatsApp
                </Button>
            </div>

            <div className="relative z-10 flex flex-wrap md:flex-nowrap gap-6 md:gap-[48px] justify-center mt-[60px] animate-[fadeUp_0.6s_0.4s_ease_both]">
                {[
                    { v: 'HD', l: 'Qualidade' },
                    { v: '24/7', l: 'Suporte' },
                    { v: 'R$25', l: 'Por mês' },
                    { v: '4K', l: 'Disponível' }
                ].map((stat, i, arr) => (
                    <React.Fragment key={stat.l}>
                        <div className="text-center min-w-[70px]">
                            <div className="font-['Bebas_Neue'] text-[2.2rem] text-[#00ff99] tracking-[1px] leading-none">{stat.v}</div>
                            <div className="text-[0.7rem] text-[#7a9a7a] uppercase tracking-[1.5px] mt-1">{stat.l}</div>
                        </div>
                        {i < arr.length - 1 && <div className="hidden md:block w-[1px] bg-[rgba(0,255,153,0.15)] self-stretch" />}
                    </React.Fragment>
                ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7a9a7a] text-[0.65rem] tracking-[2px] uppercase animate-[fadeIn_1s_1s_both]">
                <span>Saiba mais</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-[#00ff99] to-transparent animate-[scrollAnim_1.5s_infinite]" />
            </div>
        </section>
    );
};