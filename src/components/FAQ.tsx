import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_ITEMS, FaqItem } from '../data/funnelData';

interface FAQProps {
  items?: FaqItem[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items = FAQ_ITEMS, className = '' }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`w-full max-w-md mb-6 ${className}`}>
      {/* Header */}
      <div className="text-center mb-3.5">
        <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300 mb-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Respostas Rápidas</span>
        </div>
        <h3 className="text-base md:text-lg font-black text-gray-950 leading-tight">
          Perguntas Frequentes (FAQ)
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Tire suas dúvidas antes de garantir sua vaga no Tráfego Fácil 2026
        </p>
      </div>

      {/* Accordion Container */}
      <div className="flex flex-col gap-2">
        {items.map((item, index) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`border-2 border-gray-900 rounded-md transition-all duration-150 overflow-hidden ${
                isOpen
                  ? 'bg-white shadow-[3px_3px_0px_#09090b]'
                  : 'bg-white hover:bg-gray-50 shadow-[2px_2px_0px_#09090b]'
              }`}
            >
              <button
                type="button"
                id={`faq-btn-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono font-bold text-red-600 shrink-0 mt-0.5">
                    0{index + 1}.
                  </span>
                  <span className="text-xs md:text-sm font-bold text-gray-900 leading-snug">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-6 h-6 rounded-sm border border-gray-900 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-red-100 rotate-180' : 'bg-gray-100'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 text-gray-950" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <div className="px-3.5 pb-3.5 pt-1 border-t border-gray-200 text-xs text-gray-700 leading-relaxed">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Trust reassurance banner under FAQ */}
      <div className="mt-3 bg-emerald-50 border border-emerald-300 rounded-sm p-2.5 flex items-center gap-2 text-emerald-900">
        <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
        <p className="text-[11px] font-semibold leading-tight">
          Acesso imediato e garantia incondicional de 7 dias com suporte dedicado aos alunos.
        </p>
      </div>
    </div>
  );
};
