import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Globe,
  Lock,
  Mail,
  Zap,
} from 'lucide-react';
import {
  STARFLIX_MODULES,
  CHECKOUT_VISUALS,
} from '../data/funnelData';

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
      className="w-full flex flex-col items-center pb-8"
    >
      {/* Title Header */}
      <div className="text-center mb-4">
        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300 mb-2">
          Apresentação Oficial
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-gray-950 leading-tight">
          Na <span className="text-red-600">STARFLIX</span> você vai ter:
        </h2>
        <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
          Aprenda tráfego pago de forma simples e prática para aumentar suas vendas todos os dias! 🔥
        </p>
      </div>

      {/* Main Official Banner from Other Link */}
      <div className="w-full max-w-md rounded-md overflow-hidden border-2 border-gray-900 shadow-[4px_4px_0px_#09090b] mb-4 bg-black">
        <img
          src={CHECKOUT_VISUALS.productBanner}
          alt="Starflix Treinamento Completo"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Visual Modules Gallery directly copied from the original checkout */}
      <div className="w-full max-w-md mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black uppercase tracking-wider text-gray-950 font-mono flex items-center gap-1.5">
            <Flame className="w-4 h-4 fill-red-600 text-red-600" />
            <span>Módulos Práticos Inclusos</span>
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-sm border border-emerald-300">
            Acesso Imediato
          </span>
        </div>

        {/* 3 Main Deliverable Cards with exact images from Kiwify */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {CHECKOUT_VISUALS.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-md overflow-hidden border-2 border-gray-900 shadow-[2px_2px_0px_#09090b] group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-950">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-1.5 bg-gray-50 border-t border-gray-200 text-center flex-1 flex items-center justify-center">
                <p className="text-[10px] font-black text-gray-900 leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Device Showcase Artwork from First Link */}
        <div className="rounded-md overflow-hidden border-2 border-gray-900 shadow-[3px_3px_0px_#09090b] bg-white p-2">
          <div className="flex items-center gap-2 mb-1.5 text-xs font-black text-gray-900">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>Assista no Celular, Tablet ou Computador</span>
          </div>
          <div className="rounded-sm overflow-hidden border border-gray-200">
            <img
              src={CHECKOUT_VISUALS.sideDevice}
              alt="Plataforma no computador e celular"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Checklist of Everything included inside Starflix */}
      <div className="w-full max-w-md bg-red-50/90 border-2 border-red-300 rounded-md p-4 mb-5 text-gray-900 shadow-[3px_3px_0px_#fca5a5]">
        <div className="flex items-center gap-2 mb-3 text-red-900 font-black text-sm">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>O que você vai dominar dentro do treinamento:</span>
        </div>

        <div className="flex flex-col gap-2">
          {STARFLIX_MODULES.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 bg-white/80 p-2 rounded-sm border border-red-200"
            >
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

      {/* Official Advantages from Kiwify */}
      <div className="w-full max-w-md grid grid-cols-3 gap-2 mb-6">
        <div className="flex flex-col items-center text-center p-2.5 bg-white rounded-md border-2 border-gray-900 shadow-[2px_2px_0px_#09090b]">
          <Globe className="w-4 h-4 text-amber-600 mb-1" />
          <span className="text-[11px] font-black text-gray-900 leading-tight">Privacidade</span>
          <span className="text-[9px] text-gray-500 font-mono mt-0.5">100% Segura</span>
        </div>
        <div className="flex flex-col items-center text-center p-2.5 bg-white rounded-md border-2 border-gray-900 shadow-[2px_2px_0px_#09090b]">
          <Lock className="w-4 h-4 text-emerald-600 mb-1" />
          <span className="text-[11px] font-black text-gray-900 leading-tight">Compra Segura</span>
          <span className="text-[9px] text-gray-500 font-mono mt-0.5">Ambiente Seguro</span>
        </div>
        <div className="flex flex-col items-center text-center p-2.5 bg-white rounded-md border-2 border-gray-900 shadow-[2px_2px_0px_#09090b]">
          <Mail className="w-4 h-4 text-blue-600 mb-1" />
          <span className="text-[11px] font-black text-gray-900 leading-tight">Via E-mail</span>
          <span className="text-[9px] text-gray-500 font-mono mt-0.5">Acesso Imediato</span>
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
