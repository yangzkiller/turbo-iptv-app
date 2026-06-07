import React from 'react';
import { Gift, MessageCircle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LANDING_CONFIG } from '@/config/landing';

export const Cta: React.FC = () => {
    return (
        <section className="py-20 px-6 relative z-10 overflow-hidden">
            <ScrollReveal>
                <div className="max-w-[800px] mx-auto bg-[#0d150d] border border-[#00ff99] rounded-[20px] py-[60px] px-6 md:px-12 text-center relative overflow-hidden shadow-[0_0_100px_rgba(0,255,153,0.06)]">
                    <div className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[radial-gradient(ellipse,rgba(0,255,153,0.1)_0%,transparent_70%)] pointer-events-none" />

                    <div className="relative z-10 w-14 h-14 mx-auto rounded-xl bg-[rgba(0,255,153,0.08)] border border-[rgba(0,255,153,0.15)] flex items-center justify-center mb-6">
                        <Rocket className="w-7 h-7 text-[#00ff99]" strokeWidth={1.5} />
                    </div>

                    <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3rem)] text-white tracking-wide mb-3 uppercase">
                        PRONTO PARA <span className="text-[#00ff99]">COMEÇAR?</span>
                    </h2>
                    <p className="text-[#7a9a7a] text-base max-w-[400px] mx-auto mb-9 leading-[1.7]">
                        Teste grátis por 6 horas sem compromisso. Se gostar, assine por apenas R$25/mês.
                    </p>

                    <div className="flex flex-wrap gap-3.5 justify-center">
                        <Button href={LANDING_CONFIG.links.freeTrial}>
                            <Gift className="w-[18px] h-[18px]" strokeWidth={2} />
                            Quero o Teste Grátis
                        </Button>
                        <Button href={LANDING_CONFIG.links.subscribe} variant="secondary">
                            <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2} />
                            Assinar Agora
                        </Button>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};
