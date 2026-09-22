import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, ArrowRight, TrendingUp, CheckCheck } from 'lucide-react';

interface StepTestimonialProps {
  onNext: () => void;
}

export const StepTestimonial: React.FC<StepTestimonialProps> = ({ onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5 | 2>(1);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 48; // 48 seconds
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Toggle playback
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          // If browser blocks audio, still allow simulated progress
          console.log('Audio autoplay prevented, using timer fallback');
        });
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Change speed
  const cycleSpeed = () => {
    const nextSpeed: 1 | 1.5 | 2 = playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1;
    setPlaybackSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  // Simulated timer fallback in case audio file doesn't load
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center"
    >
      {/* Hidden audio element pointing to the original inlead audio */}
      <audio
        ref={audioRef}
        src="https://media.inlead.cloud/uploads/22779/2026-02-03/Z7iAM-whatsapp-video-2026-02-03-at-160408.mp3"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      {/* Main Headline */}
      <div className="text-center mb-5">
        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300 mb-2">
          Depoimento Real de Aluno
        </span>
        <h2 className="text-xl md:text-2xl font-black text-gray-950 leading-snug">
          Clique no áudio e escute o que meu aluno disse{' '}
          <span role="img" aria-label="surpreso">
            😮
          </span>
        </h2>
      </div>

      {/* WhatsApp Voice Memo Player (Sleek Geometric UI clone) */}
      <div className="w-full max-w-md bg-[#e7f7ed] border-2 border-gray-900 rounded-md p-4 shadow-[4px_4px_0px_#09090b] mb-6">
        <div className="flex items-center justify-between mb-3 border-b border-[#c8eed7] pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-sm bg-[#128c7e] text-white flex items-center justify-center font-bold text-sm border border-gray-800 shadow-sm">
              RC
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900 text-sm">
                  Rair - Casa dos Capacetes
                </span>
                <CheckCheck className="w-4 h-4 text-[#128c7e]" />
              </div>
              <span className="text-[11px] text-gray-600 font-mono">Mensagem de voz via WhatsApp</span>
            </div>
          </div>

          <button
            type="button"
            onClick={cycleSpeed}
            className="text-xs font-mono font-bold text-gray-900 bg-white px-2 py-0.5 rounded-sm border border-gray-900 hover:bg-[#d8f5e3] transition-colors"
          >
            {playbackSpeed}x
          </button>
        </div>

        {/* Audio Scrubber & Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="w-12 h-12 rounded-sm bg-[#25d366] hover:bg-[#20ba59] text-gray-950 flex items-center justify-center shrink-0 border-2 border-gray-950 shadow-[2px_2px_0px_#09090b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            aria-label={isPlaying ? 'Pausar áudio' : 'Tocar áudio'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-gray-950" />
            ) : (
              <Play className="w-6 h-6 fill-gray-950 translate-x-0.5" />
            )}
          </button>

          <div className="flex-1 flex flex-col justify-center">
            {/* Waveform graphic visualization */}
            <div className="flex items-center gap-[2px] h-8 w-full">
              {Array.from({ length: 32 }).map((_, i) => {
                const heights = [
                  16, 24, 12, 28, 20, 32, 14, 22, 30, 18, 26, 32, 20, 28, 16, 24,
                  30, 18, 26, 14, 32, 22, 18, 28, 20, 32, 16, 24, 12, 20, 28, 14
                ];
                const height = heights[i % heights.length];
                const barProgress = (i / 32) * duration;
                const isPassed = currentTime >= barProgress;

                return (
                  <div
                    key={i}
                    style={{ height: `${height}px` }}
                    className={`flex-1 rounded-none transition-all duration-150 ${
                      isPassed ? 'bg-[#128c7e]' : 'bg-[#9fd9bc]'
                    } ${isPlaying && isPassed ? 'opacity-100 scale-y-105' : 'opacity-80'}`}
                  />
                );
              })}
            </div>

            <div className="flex justify-between items-center text-[11px] text-gray-600 mt-1 font-mono font-bold">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Results Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-md p-4 shadow-[4px_4px_0px_#09090b] mb-6">
        <div className="flex items-center gap-1.5 mb-2 text-red-600 font-bold text-xs font-mono uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-red-600" />
          <span>Transformação Comprovada</span>
        </div>

        <p className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-3">
          De <span className="text-gray-400 font-normal line-through">R$ 10 mil</span> para mais de{' '}
          <strong className="text-red-700 bg-red-100 px-1 py-0.5 rounded-sm border border-red-200">
            R$ 100 mil por mês
          </strong>
          , o método <span className="text-gray-950 font-black">STARFLIX</span> funciona e o próximo
          pode ser <span className="underline decoration-red-500 font-black">VOCÊ</span>.
        </p>

        {/* Before / After Stats */}
        <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2.5 rounded-sm border border-gray-200">
          <div className="bg-white p-2.5 rounded-sm border border-gray-300 text-center">
            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">Antes</span>
            <div className="text-sm md:text-base font-black text-gray-700 mt-0.5">R$ 10.000</div>
            <span className="text-[10px] text-gray-500">faturamento/mês</span>
          </div>

          <div className="bg-emerald-50 p-2.5 rounded-sm border border-emerald-300 text-center">
            <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Com Starflix</span>
            <div className="text-sm md:text-base font-black text-emerald-700 mt-0.5">+ R$ 100.000</div>
            <span className="text-[10px] text-emerald-800 font-medium">10x mais vendas</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Eu quero isso também</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
