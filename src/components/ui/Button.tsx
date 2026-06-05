import React from 'react';

interface ButtonProps {
    href: string;
    variant?: 'primary' | 'secondary' | 'nav';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, variant = 'primary', children }) => {
    const baseStyles = "inline-flex items-center justify-center gap-2.5 font-bold rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center";

    const variants = {
        primary: "bg-[#00ff99] text-black text-[0.95rem] px-[30px] py-4 shadow-[0_0_30px_rgba(0,255,153,0.3)] hover:bg-[#00ffaa] hover:shadow-[0_0_50px_rgba(0,255,153,0.5)]",
        secondary: "bg-transparent text-[#00ff99] text-[0.95rem] px-[30px] py-4 border border-[rgba(0,255,153,0.15)] hover:bg-[rgba(0,255,153,0.15)] hover:border-[#00ff99]",
        nav: "bg-[#00ff99] text-black text-[0.8rem] px-5 py-2.5 rounded-[6px] hover:bg-[#00ffaa]"
    };

    return (
        <a href={href} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </a>
    );
};