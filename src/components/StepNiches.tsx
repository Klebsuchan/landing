import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { INLEAD_ASSETS } from '../data/funnelData';

interface StepNichesProps {
  onNext: () => void;
}

export const StepNiches: React.FC<StepNichesProps> = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = INLEAD_ASSETS.carouselImages;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center pb-8"
    >
      {/* Title Header matching inlead.digital */}
      <div className="text-center mb-5">
        <h2 className="text-xl md:text-2xl font-black text-red-600 leading-snug">
          SERÁ QUE FUNCIONA PRO SEU NICHO?
        </h2>
        <p className="text-xs md:text-sm text-gray-700 mt-2 max-w-sm mx-auto font-medium">
          Se ainda tem dúvidas se funciona mesmo, olha o tanto de segmentos que eu
          já ajudei e hoje vendem muito 👇
        </p>
      </div>

      {/* Real Image Carousel Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-xl overflow-hidden shadow-[4px_4px_0px_#09090b] mb-4">
        <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-700">Depoimentos & Nichos Reais</span>
          <span className="text-xs font-mono font-bold text-red-600">
            {currentIndex + 1} de {images.length}
          </span>
        </div>

        <div className="relative w-full aspect-[4/5] bg-gray-950 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Nicho comprovado ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full object-contain"
              loading="eager"
            />
          </AnimatePresence>

          {/* Quick Prev/Next Overlay Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Navigation Bottom Bar */}
        <div className="flex items-center justify-between p-3 bg-white border-t border-gray-200">
          <button
            type="button"
            onClick={prevSlide}
            className="p-1.5 rounded-lg border border-gray-900 hover:bg-gray-100 text-gray-900 transition-colors cursor-pointer text-xs font-bold flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {/* Dash Indicators */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-[180px]">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-5 bg-red-600'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="p-1.5 rounded-lg border border-gray-900 hover:bg-gray-100 text-gray-900 transition-colors cursor-pointer text-xs font-bold flex items-center gap-1"
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reassurance copy matching inlead.digital */}
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
          className="w-full py-4 px-6 rounded-xl font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>QUERO VENDER MUITO 🤩</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
