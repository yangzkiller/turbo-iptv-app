const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
const supportNumber = import.meta.env.VITE_SUPPORT_NUMBER || "";

export const LANDING_CONFIG = {
    whatsappNumber,
    supportNumber,
    links: {
        subscribe: `https://wa.me/${whatsappNumber}?text=Olá! Quero assinar o plano IPTV.`,
        freeTrial: `https://wa.me/${whatsappNumber}?text=Olá! Quero testar o IPTV grátis por 6 horas.`,
        subscribePlan: `https://wa.me/${whatsappNumber}?text=Olá! Quero assinar o plano IPTV por R$25.`,
    }
};