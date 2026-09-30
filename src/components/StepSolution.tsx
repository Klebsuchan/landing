import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe,
  Lock,
  Mail,
  Zap,
} from 'lucide-react';
import { SOLUTION_POINTS, CHECKOUT_VISUALS } from '../data/funnelData';

interface StepSolutionProps {
  onNext: () => void;
}

export const StepSolution: React.FC<StepSolutionProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center pb-8"
    >
      {/* Badge Header */}
      <div className="mb-3.5 flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-sm border border-amber-300 shadow-sm">
          <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
          <span>O Que Realmente Funciona</span>
        </span>
      </div>

      {/* Main GIF & Visual Display */}
      <div className="w-full max-w-md mb-4 flex flex-col gap-3">
        {/* Animated GIF demonstrating breakthrough / results */}
        <div className="w-full aspect-video rounded-md overflow-hidden border-2 border-gray-900 shadow-[3px_3px_0px_#09090b] bg-gray-950 flex items-center justify-center relative">
          <img
            src={CHECKOUT_VISUALS.solutionGif}
            alt="Destravar vendas e lucrar com anúncios"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute top-2 left-2 bg-gray-950/80 backdrop-blur-sm text-[10px] font-mono font-black text-amber-400 px-2 py-0.5 rounded-sm border border-gray-800">
            RESULTADOS REAIS 💸
          </div>
        </div>

        {/* Official Training Showcase Banner from First Link */}
        <div className="w-full rounded-md overflow-hidden border-2 border-gray-900 shadow-[2px_2px_0px_#09090b] bg-black">
          <img
            src={CHECKOUT_VISUALS.productBanner}
            alt="Starflix do Empreendedor Digital"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Main Headline */}
      <h2 className="text-xl md:text-2xl font-black text-gray-950 text-center leading-snug max-w-md mb-4">
        Vão te oferecer milhares de{' '}
        <span className="text-gray-400 line-through">“fórmulas mágicas”</span>
        , mas o que realmente vai{' '}
        <span className="text-red-600 underline decoration-red-400 decoration-2">
          destravar suas vendas
        </span>{' '}
        é:
      </h2>

      {/* Checklist Card */}
      <div className="w-full max-w-md bg-white rounded-md border-2 border-gray-900 p-4 shadow-[4px_4px_0px_#09090b] mb-5 flex flex-col gap-3">
        {SOLUTION_POINTS.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-2.5 rounded-sm bg-gray-50/80 border border-gray-200"
          >
            <div className="mt-0.5 text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-emerald-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm leading-snug">
                {item.title}
              </span>
              <span className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                {item.desc}
              </span>
            </div>
          </div>
        ))}

        <div className="mt-1 pt-2.5 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-gray-800 font-semibold bg-emerald-50/80 p-2.5 rounded-sm border border-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Método testado e validado em centenas de empresas reais</span>
        </div>
      </div>

      {/* Trust Badges directly copied from Kiwify original link */}
      <div className="w-full max-w-md grid grid-cols-3 gap-2 mb-6">
        <div className="flex flex-col items-center text-center p-2.5 bg-white rounded-md border-2 border-gray-900 shadow-[2px_2px_0px_#09090b]">
          <Globe className="w-4 h-4 text-amber-600 mb-1" />
          <span className="text-[11px] font-black text-gray-900 leading-tight">Privacidade</span>
          <span className="text-[9px] text-gray-500 font-mono mt-0.5">100% Segura</span>
        </div>
        <div className="flex flex-col items-center text-center p-2.5 bg-white rounded-md border-2 border-gray-900 shadow-[2px_2px_0px_#09090b]">
          <Lock className="w-4 h-4 text-emerald-600 mb-1" />
          <span className="text-[11px] font-black text-gray-900 leading-tight">Compra Segura</span>
          <span className="text-[9px] text-gray-500 font-mono mt-0.5">Autenticada</span>
        </div>
        <div className="flex flex-col items-center text-center p-2.5 bg-white rounded-md border-2 border-gray-900 shadow-[2px_2px_0px_#09090b]">
          <Mail className="w-4 h-4 text-blue-600 mb-1" />
          <span className="text-[11px] font-black text-gray-900 leading-tight">Acesso Rápido</span>
          <span className="text-[9px] text-gray-500 font-mono mt-0.5">Via E-mail</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Vou dominar isso agora</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
