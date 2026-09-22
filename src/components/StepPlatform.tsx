import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Play, Sparkles, ArrowRight } from 'lucide-react';
import { STARFLIX_MODULES } from '../data/funnelData';

interface StepPlatformProps {
  onNext: () => void;
}

export const StepPlatform: React.FC<StepPlatformProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center"
    >
      {/* Title */}
      <div className="text-center mb-5">
        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300 mb-2">
          Apresentação Oficial
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-gray-950 leading-tight">
          Na <span className="text-red-600">STARFLIX</span> eu vou te mostrar:
        </h2>
      </div>

      {/* Starflix Styled Platform Mockup */}
      <div className="w-full max-w-md bg-gray-950 text-white rounded-md p-4 shadow-[4px_4px_0px_#09090b] border-2 border-gray-900 mb-6">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg tracking-wider text-white">
              STAR<span className="text-red-500">FLIX</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest bg-red-600 font-bold px-1.5 py-0.5 rounded-sm text-white">
              HUB
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-gray-300 font-mono">
            <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse" />
            <span>Acesso Imediato</span>
          </div>
        </div>

        {/* Streaming Modules Showcase Mockup */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-gray-900 rounded-sm p-2.5 border border-gray-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase">Módulo 01</span>
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <p className="text-xs font-bold text-gray-100 leading-snug">
              Anúncios Direto no Celular
            </p>
            <span className="text-[10px] text-gray-400 mt-1">Passo a passo na tela</span>
          </div>

          <div className="bg-gray-900 rounded-sm p-2.5 border border-gray-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase">Módulo 02</span>
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <p className="text-xs font-bold text-gray-100 leading-snug">
              Gerenciador Sem Medo
            </p>
            <span className="text-[10px] text-gray-400 mt-1">Configuração profissional</span>
          </div>

          <div className="bg-gray-900 rounded-sm p-2.5 border border-gray-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase">Módulo 03</span>
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <p className="text-xs font-bold text-gray-100 leading-snug">
              Lotar o WhatsApp
            </p>
            <span className="text-[10px] text-gray-400 mt-1">Clientes prontos pra comprar</span>
          </div>

          <div className="bg-gray-900 rounded-sm p-2.5 border border-gray-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase">Módulo 04</span>
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <p className="text-xs font-bold text-gray-100 leading-snug">
              Roteiros & Criativos
            </p>
            <span className="text-[10px] text-gray-400 mt-1">Modelos que convertem</span>
          </div>
        </div>

        <div className="bg-red-950/60 border border-red-800/60 rounded-sm p-2 text-center text-xs text-red-200 font-medium">
          🎬 Mais de 30 aulas direto ao ponto + atualizações o ano todo
        </div>
      </div>

      {/* Alert / Highlight Box with Checklist */}
      <div className="w-full max-w-md bg-red-50/80 border-2 border-red-300 rounded-md p-4 mb-6 text-gray-900 shadow-[3px_3px_0px_#fca5a5]">
        <div className="flex items-center gap-2 mb-3 text-red-900 font-black text-sm">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>O que você vai dominar dentro do treinamento:</span>
        </div>

        <div className="flex flex-col gap-2">
          {STARFLIX_MODULES.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-white/70 p-2 rounded-sm border border-red-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-semibold text-gray-900 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2.5 border-t border-red-200 text-center">
          <p className="text-xs font-bold text-red-950">
            Tudo pensado para você{' '}
            <strong className="underline decoration-red-500 font-black">
              Impulsionar as vendas
            </strong>{' '}
            do seu negócio usando a Internet.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>É DISSO QUE EU PRECISO</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
