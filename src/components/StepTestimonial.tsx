import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  ArrowRight,
  TrendingUp,
  CheckCheck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import videoSource from './videofinal.mp4';

interface StepTestimonialProps {
  onNext: () => void;
}

export const StepTestimonial: React.FC<StepTestimonialProps> = ({ onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt to autoplay or prepare the video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      // Try to autoplay if browser allows user-gesture carryover
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay with sound was prevented by browser policy; wait for click
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error('Video play error:', err);
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
      {/* Badge Header */}
      <div className="text-center mb-3">
        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-0.5 rounded-sm border border-red-300 mb-2">
          Depoimento Real de Aluno
        </span>
        <h2 className="text-xl md:text-2xl font-black text-gray-950 leading-snug">
          Clique no vídeo e veja o que meu aluno disse{' '}
          <span role="img" aria-label="surpreso">
            😮
          </span>
        </h2>
        <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
          Resultados reais de quem aplicou o método na prática em sua loja:
        </p>
      </div>

      {/* Video Headline */}
      <div className="w-full max-w-md text-center mb-2">
        <h1 className="text-xs md:text-sm font-black text-red-600 uppercase tracking-tight">
          ASSISTE ESSE VÍDEO AQUI PRA VOCÊ ENTENDER:
        </h1>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-md bg-black rounded-md overflow-hidden border-2 border-gray-900 shadow-[4px_4px_0px_#09090b] mb-4 relative aspect-video flex flex-col justify-center items-center">
        {/* HTML5 Native Video Player */}
        <video
          ref={videoRef}
          controls
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => {
            // keep controls active
          }}
          className="w-full h-full object-contain bg-black"
        >
          <source src={videoSource} type="video/mp4" />
          <source src="/videofinal.mp4" type="video/mp4" />
          <source src="/curso-trafego-2026-landpage.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução deste vídeo.
        </video>

        {/* Persuasive Play Overlay (visible before user hits play or if autoplay paused) */}
        {!isPlaying && (
          <div
            onClick={handleStartPlay}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-4 z-20 cursor-pointer group bg-gradient-to-t from-black via-gray-950/85 to-black/90 transition-all duration-200"
          >
            {/* Pulsing Red Play Button */}
            <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center border-2 border-white/90 shadow-[0_0_20px_rgba(220,38,38,0.7)] transition-all duration-200 group-hover:scale-110 active:scale-95 mb-3">
              <Play className="w-8 h-8 fill-white translate-x-0.5 text-white" />
            </div>

            <span className="text-white font-black text-sm tracking-wide font-mono">
              DEPOIMENTO REAL • <span className="text-red-500">ALUNO STARFLIX</span>
            </span>

            <span className="text-[11px] text-gray-200 font-mono mt-2 bg-red-950/70 border border-red-800/80 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Clique aqui para assistir ao vídeo (1m30s)</span>
            </span>
          </div>
        )}
      </div>

      {/* Student Testimonial Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-md p-4 mb-4 shadow-[3px_3px_0px_#09090b]">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center border border-gray-950 shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-950">Aluno Starflix</p>
              <p className="text-[10px] text-gray-500 font-mono">
                Caso Real de Sucesso • Tráfego Pago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm border border-emerald-300">
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Depoimento Real</span>
          </div>
        </div>

        <p className="text-xs text-gray-700 leading-relaxed italic mb-3">
          &ldquo;Assista ao vídeo acima: o depoimento gravado na íntegra pelo próprio aluno mostrando a tela do celular e como destravou as vendas aplicando o método na prática.&rdquo;
        </p>

        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 bg-amber-50 p-2 rounded-sm border border-amber-300">
          <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Resultados reais e comprovados direto na tela pelo aluno</span>
        </div>
      </div>

      {/* Guarantee badge */}
      <div className="w-full max-w-md flex items-center justify-center gap-2 text-xs text-gray-700 font-medium mb-5">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Estratégia validada e aplicável em qualquer segmento</span>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-red-600 hover:bg-red-700 border-2 border-gray-950 shadow-[3px_3px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Quero o Mesmo Resultado</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
