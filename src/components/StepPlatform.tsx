import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { TRAFEGO_FACIL_MODULES } from '../data/funnelData';

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
      {/* Title Header matching the screenshot */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-gray-950 leading-tight">
          No <span className="text-red-600">TRÁFEGO FÁCIL 2026</span> eu vou te mostrar:
        </h2>
      </div>

      {/* Bullets List */}
      <div className="w-full max-w-md flex flex-col gap-3 mb-6">
        {TRAFEGO_FACIL_MODULES.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white border-2 border-gray-200 shadow-sm"
          >
            <div className="text-emerald-600 shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-emerald-600" />
            </div>
            <span className="font-bold text-gray-900 text-sm md:text-base leading-snug">
              {item}
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
          <span>É DISSO QUE EU PRECISO</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
