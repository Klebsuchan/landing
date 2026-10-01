import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, ArrowRight } from 'lucide-react';

interface StepTestimonialProps {
  onNext: () => void;
}

export const StepTestimonial: React.FC<StepTestimonialProps> = ({ onNext }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(8);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const toggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } else {
      setIsPlayingAudio(true);
      setAudioSeconds(0);

      // Play synthesized realistic student voice if supported by browser
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          'Fala pessoal, aqui é o Rair da Casa dos Capacetes. Com o método do Tráfego Fácil 2026, saímos de dez mil para mais de cem mil reais por mês! O negócio realmente funciona.'
        );
        utterance.lang = 'pt-BR';
        utterance.rate = 1.05;
        utterance.onend = () => {
          setIsPlayingAudio(false);
          setAudioSeconds(8);
        };
        window.speechSynthesis.speak(utterance);
      }

      // Count up to 8 seconds
      let sec = 0;
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        sec += 1;
        if (sec >= 8) {
          setAudioSeconds(8);
          setIsPlayingAudio(false);
          if (timerRef.current) clearInterval(timerRef.current);
        } else {
          setAudioSeconds(sec);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center pb-8"
    >
      {/* Title Header matching Screenshot */}
      <div className="text-center mb-5">
        <h2 className="text-xl md:text-2xl font-black text-gray-950 leading-snug">
          Clique no áudio e escute o que meu aluno disse 🔊
        </h2>
      </div>

      {/* Audio Player Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-xl p-4 shadow-[4px_4px_0px_#09090b] mb-4">
        <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
          <span className="font-bold text-gray-900 text-sm md:text-base flex items-center gap-1.5">
            <span>Rair - Casa dos Capacetes</span>
          </span>
          <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-sm border border-red-200 flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span>00:0{audioSeconds}</span>
          </span>
        </div>

        {/* Audio controls & waveform */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={toggleAudio}
            className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shrink-0 shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label={isPlayingAudio ? 'Pausar áudio' : 'Ouvir depoimento em áudio'}
          >
            {isPlayingAudio ? (
              <Pause className="w-5 h-5 fill-white text-white" />
            ) : (
              <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
            )}
          </button>

          {/* Simulated animated waveform */}
          <div className="flex-1 flex items-center gap-1 h-8 px-2 overflow-hidden">
            {[40, 65, 30, 85, 95, 45, 70, 90, 60, 40, 75, 80, 50, 90, 70, 45, 80, 60, 35, 70, 85, 40].map(
              (height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all duration-150 ${
                    isPlayingAudio
                      ? 'bg-red-500 animate-pulse'
                      : i < audioSeconds * 2.5
                      ? 'bg-red-600'
                      : 'bg-gray-300'
                  }`}
                  style={{
                    height: isPlayingAudio
                      ? `${Math.max(20, (height + (i % 3) * 15) % 100)}%`
                      : `${height}%`,
                  }}
                />
              )
            )}
          </div>

          <span className="text-xs font-mono font-semibold text-gray-500 shrink-0">
            0:08
          </span>
        </div>

        {/* Callout below audio */}
        <div className="mt-3.5 pt-3 border-t border-gray-100 text-center">
          <p className="text-xs md:text-sm font-bold text-gray-800 leading-snug">
            De <span className="text-gray-500 font-semibold">R$ 10 mil</span> para{' '}
            <span className="text-emerald-600 font-black text-sm md:text-base">
              mais de R$ 100 mil por mês
            </span>
            , o método funciona e o próximo pode ser{' '}
            <span className="text-red-600 font-black uppercase">VOCÊ</span>.
          </p>
        </div>
      </div>

      {/* Instagram Profile Proof Card from Screenshot */}
      <div className="w-full max-w-md rounded-xl overflow-hidden border-2 border-gray-900 shadow-[4px_4px_0px_#09090b] mb-6 bg-white">
        <img
          src="/assets/step4_instagram_proof.png"
          alt="Instagram do aluno: Casa dos Capacetes - 12,7 mil seguidores"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-xl font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Quero o mesmo resultado</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
