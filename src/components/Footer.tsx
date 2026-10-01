import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-2 border-gray-900 bg-gray-100 py-6 mt-12 text-center text-xs text-gray-600 font-mono">
      <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 font-bold text-gray-900 font-sans">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Tráfego Fácil 2026</span>
        </div>

        <p className="text-[11px] text-gray-500">
          AGENCIA STAR NA INTERNET LTDA • CNPJ 47.982.102/0001-83
        </p>

        <p className="text-[10px] text-gray-500 leading-tight">
          Contato & Suporte: suporte@starnainternet.com.br
        </p>

        <p className="text-[10px] text-gray-400 leading-tight max-w-xs mt-1">
          Este site não é afiliado ao Facebook nem a qualquer entidade da Meta Inc. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};
