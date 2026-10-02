import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';
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
      className="w-full flex flex-col items-center pb-6"
    >
      {/* Top Animated GIF */}
      {data.gifUrl ? (
        <div className="w-full max-w-md rounded-xl overflow-hidden mb-5 bg-black border-2 border-gray-900 shadow-[3px_3px_0px_#09090b] flex items-center justify-center relative aspect-video">
          <img
            src={data.gifUrl}
            alt={data.question}
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              const fallback =
                data.id === 'step_0'
                  ? 'https://media.inlead.cloud/uploads/22779/2025-10-28/FFVjO-cry-baby-crying-gif-by-luis-ricardo.gif'
                  : 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRjaTAwMzJqNmg3Z2JuOHNhcnk0YWNjbDhub3dmZ3RtMnV3c2d1MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wyi5tYZJvkMLIgRmXv/giphy.gif';
              if ((e.currentTarget as HTMLImageElement).src !== fallback) {
                (e.currentTarget as HTMLImageElement).src = fallback;
              }
            }}
          />
        </div>
      ) : (
        <div className="relative mb-4">
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
      )}

      {/* Main Question Text */}
      <h1 className="text-xl md:text-2xl font-black text-gray-950 text-center leading-snug max-w-md mb-6 px-2">
        {data.question}
      </h1>

      {/* Options List matching the screenshot radio button style */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {data.options.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id, option.text)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 flex items-center gap-3.5 group cursor-pointer ${
                isSelected
                  ? 'border-red-600 bg-red-50/90 shadow-[2px_2px_0px_#dc2626] translate-x-[1px] translate-y-[1px]'
                  : 'border-gray-200 bg-white hover:border-gray-800 hover:shadow-[2px_2px_0px_#09090b] active:translate-x-[1px] active:translate-y-[1px]'
              }`}
            >
              {/* Radio circle */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? 'border-red-600 bg-red-600'
                    : 'border-gray-400 group-hover:border-gray-900 bg-white'
                }`}
              >
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
              </div>

              <span className="font-bold text-gray-900 text-base md:text-lg leading-snug">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-xs font-mono text-gray-400 flex items-center gap-1">
        <span>Toque na opção para avançar →</span>
      </p>
    </motion.div>
  );
};
