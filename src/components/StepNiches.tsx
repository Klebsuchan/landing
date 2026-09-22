import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Store,
  Wrench,
  Briefcase,
  UtensilsCrossed,
  Shirt,
  Sparkles,
  GraduationCap,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { NICHES_DATA } from '../data/funnelData';

interface StepNichesProps {
  onNext: () => void;
}

const NICHE_ICONS = [
  Store,
  Wrench,
  Briefcase,
  UtensilsCrossed,
  Shirt,
  Sparkles,
  GraduationCap,
  ShoppingBag,
];

export const StepNiches: React.FC<StepNichesProps> = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? NICHES_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === NICHES_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentNiche = NICHES_DATA[currentIndex];
  const IconComponent = NICHE_ICONS[currentIndex % NICHE_ICONS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center"
    >
      {/* Title Header */}
      <div className="text-center mb-5">
        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300 mb-2">
          Segmentos Atendidos
        </span>
        <h2 className="text-xl md:text-2xl font-black text-gray-950 leading-snug">
          SERÁ QUE FUNCIONA PRO{' '}
          <span className="text-red-600 underline decoration-red-400 decoration-2">
            SEU NICHO?
          </span>
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1.5 max-w-sm mx-auto">
          Se ainda tem dúvidas se funciona mesmo, olha o tanto de segmentos que eu
          já ajudei e hoje vendem muito 👇
        </p>
      </div>

      {/* Interactive Carousel Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-md p-4 shadow-[4px_4px_0px_#09090b] mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-sm border border-emerald-300">
            {currentNiche.tag}
          </span>
          <span className="text-xs font-mono font-bold text-gray-500">
            {currentIndex + 1} de {NICHES_DATA.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentNiche.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-center text-center py-2"
          >
            {/* Visual Icon Badge */}
            <div className="w-16 h-16 rounded-md bg-red-50 border-2 border-gray-900 flex items-center justify-center text-red-600 mb-3 shadow-[2px_2px_0px_#09090b]">
              <IconComponent className="w-8 h-8" />
            </div>

            <h3 className="text-base md:text-lg font-black text-gray-900 mb-1.5">
              {currentNiche.name}
            </h3>

            {/* Result Tag */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 px-2.5 py-1 rounded-sm text-xs font-bold mb-2.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>{currentNiche.result}</span>
            </div>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xs">
              {currentNiche.highlight}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
          <button
            type="button"
            onClick={prevSlide}
            className="p-1.5 rounded-sm border border-gray-900 hover:bg-gray-100 text-gray-900 transition-colors cursor-pointer"
            aria-label="Nicho anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Square Dash Indicators */}
          <div className="flex items-center gap-1.5">
            {NICHES_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-red-600'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para nicho ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="p-1.5 rounded-sm border border-gray-900 hover:bg-gray-100 text-gray-900 transition-colors cursor-pointer"
            aria-label="Próximo nicho"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reassurance copy */}
      <div className="w-full max-w-md text-center mb-5 px-2">
        <p className="text-xs md:text-sm text-gray-700 font-semibold leading-relaxed">
          São tantos que eu não consigo colocar todos aqui...{' '}
          <strong className="text-gray-950 font-black">
            Quer ser o próximo a vender muito também?
          </strong>
        </p>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>QUERO VENDER MUITO 🤩</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
