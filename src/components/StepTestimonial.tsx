import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, ArrowRight } from 'lucide-react';

interface StepTestimonialProps {
  onNext: () => void;
}

export const StepTestimonial: React.FC<StepTestimonialProps> = ({ onNext }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(8);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/assets/inlead/Z7iAM-whatsapp-video-2026-02-03-at-160408.mp3');
    audio.preload = 'auto';

    audio.onended = () => {
      setIsPlayingAudio(false);
      setAudioSeconds(8);
    };

    audio.ontimeupdate = () => {
      if (audio.duration) {
        setAudioSeconds(Math.min(8, Math.round(audio.currentTime)));
      }
    };

    audioElementRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioElementRef.current) return;

    if (isPlayingAudio) {
      audioElementRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioElementRef.current.currentTime = 0;
      audioElementRef.current
        .play()
        .then(() => {
          setIsPlayingAudio(true);
        })
        .catch(() => {
          // Fallback if browser blocks autoplay
          setIsPlayingAudio(true);
          const timer = setInterval(() => {
            setAudioSeconds((s) => {
              if (s <= 1) {
                clearInterval(timer);
                setIsPlayingAudio(false);
                return 8;
              }
              return s - 1;
            });
          }, 1000);
        });
    }
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
        <h2 className="text-xl md:text-2xl font-black text-gray-950 leading-snug">
          Clique no áudio e escute o que meu aluno disse 😮
        </h2>
      </div>

      {/* Audio Player Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-xl p-4 shadow-[4px_4px_0px_#09090b] mb-4">
        <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
          <div className="flex items-center gap-2">
            <img
              src="/assets/inlead/Xa4xE-490223871-687534127012772-3182568221928524864-n.jpg"
              alt="Rair"
              className="w-8 h-8 rounded-full border border-gray-300 object-cover"
            />
            <span className="font-bold text-gray-900 text-sm md:text-base">
              Rair - Casa dos Capacetes
            </span>
          </div>
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

          {/* Animated waveform */}
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

      {/* Instagram WhatsApp Proof Image from inlead.digital */}
      <div className="w-full max-w-md rounded-xl overflow-hidden border-2 border-gray-900 shadow-[4px_4px_0px_#09090b] mb-6 bg-white">
        <img
          src="/assets/inlead/jfdpl-whatsapp-image-2025-10-30-at-104709-pm.jpg"
          alt="Comprovante de resultado real do aluno"
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
          <span>Eu quero isso também</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
