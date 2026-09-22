import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { SOLUTION_POINTS } from '../data/funnelData';

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
      className="w-full flex flex-col items-center"
    >
      {/* Icon Badge */}
      <div className="mb-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-md bg-amber-50 border-2 border-gray-900 flex items-center justify-center text-amber-600 shadow-[3px_3px_0px_#09090b]">
          <Zap className="w-8 h-8 fill-amber-500 text-amber-600" />
        </div>
        <span className="mt-3 inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-sm border border-amber-300">
          O Que Realmente Funciona
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-xl md:text-2xl font-black text-gray-950 text-center leading-snug max-w-md mb-5">
        Vão te oferecer milhares de{' '}
        <span className="text-gray-400 line-through">“fórmulas mágicas”</span>
        , mas o que realmente vai{' '}
        <span className="text-red-600 underline decoration-red-400 decoration-2">
          destravar suas vendas
        </span>{' '}
        é:
      </h2>

      {/* Checklist Card */}
      <div className="w-full max-w-md bg-white rounded-md border-2 border-gray-900 p-4 shadow-[4px_4px_0px_#09090b] mb-6 flex flex-col gap-3.5">
        {SOLUTION_POINTS.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-2 rounded-sm bg-gray-50/70 border border-gray-200">
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

        <div className="mt-1 pt-2.5 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-gray-800 font-semibold bg-emerald-50/80 p-2 rounded-sm border border-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Método testado e validado em centenas de empresas reais</span>
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
