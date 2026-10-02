import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
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
      className="w-full flex flex-col items-center pb-8"
    >
      {/* Top Animated GIF from inlead.digital */}
      <div className="w-full max-w-md rounded-xl overflow-hidden mb-5 bg-black border-2 border-gray-900 shadow-[3px_3px_0px_#09090b] flex items-center justify-center relative aspect-video">
        <img
          src="/assets/inlead/9aVvY-blah-blah-blah-whatever-gif-by-minions.gif"
          alt="O que realmente vai destravar suas vendas"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const fallback = 'https://media.inlead.cloud/uploads/22779/2025-10-28/9aVvY-blah-blah-blah-whatever-gif-by-minions.gif';
            if ((e.currentTarget as HTMLImageElement).src !== fallback) {
              (e.currentTarget as HTMLImageElement).src = fallback;
            }
          }}
        />
      </div>

      {/* Main Headline from Screenshot */}
      <h2 className="text-xl md:text-2xl font-black text-gray-950 text-center leading-snug max-w-md mb-6 px-2">
        Vão te oferecer milhares de{' '}
        <span className="text-gray-400 line-through">“fórmulas mágicas”</span>
        , mas o que realmente vai{' '}
        <span className="text-red-600 underline decoration-red-400 decoration-2">
          destravar suas vendas
        </span>{' '}
        é:
      </h2>

      {/* Checklist Cards matching the screenshot */}
      <div className="w-full max-w-md flex flex-col gap-3 mb-6">
        {SOLUTION_POINTS.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 p-4 rounded-xl bg-white border-2 border-gray-200 shadow-sm"
          >
            <div className="text-emerald-600 shrink-0">
              <CheckCircle2 className="w-6 h-6 fill-emerald-100 text-emerald-600" />
            </div>
            <span className="font-bold text-gray-900 text-base md:text-lg leading-snug">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-xl font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Vou dominar isso agora</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
