import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronRight, Check } from 'lucide-react';
import { QuestionData } from '../data/funnelData';

interface StepQuestionProps {
  data: QuestionData;
  onSelectOption: (optionId: string, value: string) => void;
  iconType: 'confusion' | 'target';
}

export const StepQuestion: React.FC<StepQuestionProps> = ({
  data,
  onSelectOption,
  iconType,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string, value: string) => {
    setSelectedId(id);
    // Smooth transition delay so user feels the feedback
    setTimeout(() => {
      onSelectOption(id, value);
    }, 280);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center"
    >
      {/* Visual illustration badge */}
      <div className="mb-5 flex flex-col items-center">
        <div className="relative">
          <div className="w-18 h-18 rounded-lg bg-red-50 border-2 border-gray-900 flex items-center justify-center text-red-600 shadow-[3px_3px_0px_#09090b]">
            {iconType === 'confusion' ? (
              <span className="text-3xl" role="img" aria-label="pensando">
                🤔
              </span>
            ) : (
              <span className="text-3xl" role="img" aria-label="alvo">
                🎯
              </span>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gray-900 text-white p-1 rounded-sm border border-gray-800">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

        <span className="mt-3 inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300">
          {data.badge}
        </span>
      </div>

      {/* Main Question Text */}
      <h1 className="text-xl md:text-2xl font-black text-gray-950 text-center leading-snug max-w-md mb-2">
        {data.question}
      </h1>

      {data.subtitle && (
        <p className="text-xs md:text-sm text-gray-600 text-center mb-5 max-w-sm">
          {data.subtitle}
        </p>
      )}

      {/* Options List */}
      <div className="w-full max-w-md flex flex-col gap-2.5">
        {data.options.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id, option.text)}
              className={`w-full text-left p-3.5 rounded-md border-2 transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                isSelected
                  ? 'border-red-600 bg-red-50/80 shadow-[2px_2px_0px_#dc2626] translate-x-[1px] translate-y-[1px]'
                  : 'border-gray-300 bg-white hover:border-gray-900 hover:shadow-[2px_2px_0px_#09090b] active:translate-x-[1px] active:translate-y-[1px]'
              }`}
            >
              <div className="flex items-start gap-3 pr-2">
                <span
                  className={`w-7 h-7 rounded-sm font-mono font-black text-xs flex items-center justify-center shrink-0 border transition-colors ${
                    isSelected
                      ? 'bg-red-600 text-white border-red-700'
                      : 'bg-gray-100 text-gray-900 border-gray-300 group-hover:bg-gray-900 group-hover:text-white'
                  }`}
                >
                  {option.letter}
                </span>

                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-sm md:text-base leading-snug">
                    {option.text}
                  </span>
                  {option.desc && (
                    <span className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {option.desc}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`w-6 h-6 rounded-sm flex items-center justify-center shrink-0 border transition-all ${
                  isSelected
                    ? 'bg-red-600 text-white border-red-700'
                    : 'border-gray-300 text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900'
                }`}
              >
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs font-mono text-gray-500 flex items-center gap-1">
        <span>Toque na opção para avançar →</span>
      </p>
    </motion.div>
  );
};
