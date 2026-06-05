import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Benefits: React.FC = () => {
    const list = [
        { icon: '🎬', title: 'Grande Variedade de Conteúdo', desc: 'Filmes, séries, canais ao vivo e esportes em um único lugar, com opções nacionais e internacionais para toda a família.' },
        { icon: '📱', title: 'Assista em Qualquer Dispositivo', desc: 'Compatível com Smart TVs, celulares, tablets e computadores. Assista onde e quando quiser, sem restrições.' },
        { icon: '⏯️', title: 'Controle Total', desc: 'Pause, volte e escolha o que assistir quando quiser. Muito mais liberdade do que a TV tradicional ou à cabo.' },
        { icon: '💰', title: 'Excelente Custo-Benefício', desc: 'Muito mais conteúdo por um valor acessível. Economize em comparação com operadoras de TV a cabo.' },
        { icon: '🎥', title: 'Alta Qualidade de Imagem', desc: 'Conteúdos em HD, Full HD e até 4K dependendo da velocidade da sua internet. Experiência cinematográfica em casa.' },
        { icon: '🌍', title: 'Conteúdo Internacional', desc: 'Canais e conteúdos de vários países direto na sua tela. Acesse o mundo sem sair do sofá.' }
    ];

    return (
        <section className="bg-[#080f08] border-y border-[rgba(0,255,153,0.15)] py-[100px] px-6 relative z-10">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <span className="block text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#00ff99] text-center mb-3">Por que escolher a P2Seven?</span>
                    <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3.5rem)] text-center text-white tracking-wide mb-4">VANTAGENS DO IPTV</h2>
                    <p className="text-center text-[#7a9a7a] text-base max-w-[480px] mx-auto mb-15 leading-relaxed">Descubra por que milhares de pessoas estão migrando para o IPTV.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {list.map((item, idx) => (
                        <ScrollReveal key={item.title} delay={idx * 80}>
                            <div className="group relative bg-[#0d150d] border border-[rgba(0,255,153,0.15)] rounded-xl p-[32px_28px] overflow-hidden transition-all duration-300 hover:border-[rgba(0,255,153,0.35)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,255,153,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#00ff99] after:to-transparent after:scale-x-0 after:transition-transform after:duration-400 hover:after:scale-x-100">
                                <span className="text-3xl mb-4 block">{item.icon}</span>
                                <h3 className="font-bold text-base text-white mb-2.5">{item.title}</h3>
                                <p className="text-[0.875rem] text-[#7a9a7a] leading-[1.7]">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};