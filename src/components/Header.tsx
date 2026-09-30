import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  totalSteps,
  onBack,
}) => {
  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / totalSteps) * 100));

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-md bg-white/95">
      <div className="max-w-md mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={onBack}
                className="p-1.5 -ml-1 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Voltar para etapa anterior"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-7 h-7" />
            )}

            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight text-gray-900">
                STAR<span className="text-red-600">FLIX</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-1.5 py-0.5 rounded-sm border border-red-200">
                Oficial
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">
            {currentStep === totalSteps - 1 ? (
              <span className="flex items-center gap-1 text-emerald-800 font-bold bg-emerald-100/90 px-2 py-0.5 rounded-sm border border-emerald-300">
                <Sparkles className="w-3.5 h-3.5" />
                Oferta Liberada
              </span>
            ) : (
              <span className="font-mono text-gray-600">
                Passo {currentStep + 1} de {totalSteps}
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
