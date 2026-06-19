import React from 'react';
import { Shield } from 'lucide-react';

export const Cabecalho: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800 p-8 md:p-12 border border-neutral-800 shadow-2xl">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Shield className="w-4 h-4 text-[#d4af37] animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase">Porsche Sales Intelligence</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
        Performance comercial com <span className="text-[#d4af37]">precisão esportiva.</span>
      </h1>
    </div>
  );
};
