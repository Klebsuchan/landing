import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  ShieldCheck,
  Gift,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageCircle,
  CreditCard,
  Lock,
  ArrowRight,
  ExternalLink,
  Flame,
  Zap,
} from 'lucide-react';
import {
  CHECKOUT_BASE_URL,
  WHATSAPP_BASE_URL,
  BONUSES_LIST,
  CHECKOUT_VISUALS,
} from '../data/funnelData';
import { buildUrlWithParams } from '../utils/utm';
import { FAQ } from './FAQ';
import videoSource from './videofinal.mp4';

interface StepCheckoutProps {
  utmParams: Record<string, string>;
}

export const StepCheckout: React.FC<StepCheckoutProps> = ({ utmParams }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 14 mins 59 secs
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Attempt autoplay when step loads
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, []);

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error('Playback error:', err);
      });
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const checkoutUrl = buildUrlWithParams(CHECKOUT_BASE_URL, utmParams);
  const whatsappUrl = buildUrlWithParams(WHATSAPP_BASE_URL, utmParams);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex flex-col items-center pb-20"
    >
      {/* Top Urgency Banner: Oferta Especial Liberada */}
      <div className="w-full max-w-md bg-red-600 text-white p-3 rounded-md border-2 border-gray-900 shadow-[3px_3px_0px_#09090b] mb-4 text-center flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
          <Flame className="w-4 h-4 fill-amber-300 text-amber-300 animate-bounce" />
          <span>Oferta Especial Liberada</span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-sm border border-black/30 font-mono text-xs font-bold text-amber-300">
          <Clock className="w-3.5 h-3.5" />
          <span>{formatTimer(timeLeft)}</span>
        </div>
      </div>

      {/* Video Headline */}
      <div className="text-center mb-2">
        <h1 className="text-sm md:text-base font-black text-red-600 uppercase tracking-tight">
          ASSISTE ESSE VÍDEO AQUI PRA VOCÊ ENTENDER:
        </h1>
      </div>

      {/* Video Container (1m30s Video) */}
      <div className="w-full max-w-md bg-black rounded-md overflow-hidden border-2 border-gray-900 shadow-[4px_4px_0px_#09090b] mb-5 relative aspect-video flex flex-col justify-center items-center">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          className="w-full h-full object-contain bg-black"
        >
          <source src={videoSource} type="video/mp4" />
          <source src="/videofinal.mp4" type="video/mp4" />
          <source src="/curso-trafego-2026-landpage.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução deste vídeo.
        </video>

        {!isPlaying && (
          <div
            onClick={handleStartPlay}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-4 z-20 cursor-pointer group bg-gradient-to-t from-black via-gray-950/85 to-black/90 transition-all duration-200"
          >
            <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center border-2 border-white/90 shadow-[0_0_20px_rgba(220,38,38,0.7)] transition-all duration-200 group-hover:scale-110 active:scale-95 mb-3">
              <Play className="w-8 h-8 fill-white translate-x-0.5 text-white" />
            </div>

            <span className="text-white font-black text-sm tracking-wide font-mono">
              ASSISTIR VÍDEO COMPLETO • <span className="text-red-500">1:30 MIN</span>
            </span>

            <span className="text-[11px] text-gray-200 font-mono mt-2 bg-red-950/70 border border-red-800/80 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Clique aqui para dar o play</span>
            </span>
          </div>
        )}
      </div>

      {/* Ready Headline */}
      <div className="w-full max-w-md text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-gray-950 mb-2">
          Você está pronto!
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Em <strong className="text-red-600 font-black">menos de 24hrs</strong>, você já pode estar{' '}
          <strong className="text-red-600 font-black">fazendo anúncios</strong> do jeito certo,{' '}
          <strong className="text-gray-950 font-black">atraindo novos clientes</strong> e{' '}
          <strong className="text-gray-950 font-black">
            vendendo muito mais do que já vende hoje
          </strong>
          .
        </p>

        <div className="mt-3 bg-gray-950 text-amber-400 font-bold text-xs md:text-sm p-3 rounded-md border-2 border-gray-900 shadow-[3px_3px_0px_#09090b] leading-snug">
          ⭐ Tudo isso com estratégias testadas e validadas por centenas de alunos que estão vendendo todos os dias!
        </div>
      </div>

      {/* Primary CTA Button #1 - Direct Eduzz link */}
      <div className="w-full max-w-md mb-6">
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-emerald-600 hover:bg-emerald-700 border-2 border-gray-950 shadow-[4px_4px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Quero garantir essa Oportunidade</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Selos de Confiança (Trust Badges) */}
        <div className="mt-3.5 bg-gray-50 border-2 border-gray-900 rounded-md p-3 shadow-[2px_2px_0px_#09090b]">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black text-gray-900 leading-tight">Compra Segura</span>
                <span className="text-[9px] text-gray-500 font-mono">Ambiente blindado</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-sm">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black text-gray-900 leading-tight">Pagamento Criptografado</span>
                <span className="text-[9px] text-gray-500 font-mono">Certificado SSL 256</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-sm">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black text-gray-900 leading-tight">Acesso Imediato</span>
                <span className="text-[9px] text-gray-500 font-mono">Envio no e-mail</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black text-gray-900 leading-tight">Garantia de 7 Dias</span>
                <span className="text-[9px] text-gray-500 font-mono">Risco zero total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Objective Card */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-md p-4 shadow-[3px_3px_0px_#09090b] mb-5">
        <div className="flex items-center gap-2 mb-1.5 text-gray-950 font-black text-sm">
          <span className="text-lg">🎯</span>
          <span>Seu Objetivo:</span>
        </div>
        <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
          Hoje você vai começar a fazer anúncios que realmente trazem clientes,{' '}
          <strong className="text-red-600 font-black">
            usando as estratégias que eu aplico pra vender todo dia!
          </strong>
        </p>
      </div>

      {/* Bonus Box */}
      <div className="w-full max-w-md bg-red-50/90 border-2 border-red-300 rounded-md p-4 shadow-[3px_3px_0px_#fca5a5] mb-6">
        <div className="flex items-center gap-2 text-gray-950 font-black text-sm md:text-base mb-3">
          <Gift className="w-5 h-5 text-red-600" />
          <span>
            Bônus que você recebe no <span className="text-red-600">TRÁFEGO FÁCIL 2026</span>:
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {BONUSES_LIST.map((bonus, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-sm border border-red-200">
              <span className="text-base leading-none">🎁</span>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-snug">
                  {bonus.title}
                </p>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2.5 border-t border-red-200 text-center">
          <p className="text-xs font-bold text-red-950">
            Tudo pensado para você{' '}
            <strong className="underline decoration-red-500 font-black">
              Impulsionar as vendas do seu negócio usando a Internet.
            </strong>
          </p>
        </div>
      </div>

      {/* Deliverables Cards */}
      <div className="w-full max-w-md mb-6">
        <div className="grid grid-cols-3 gap-2">
          {CHECKOUT_VISUALS.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="rounded-md overflow-hidden border-2 border-gray-900 shadow-[2px_2px_0px_#09090b] bg-white group cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Official Pricing Box (55% OFF) - 12x de R$ 20,68 */}
      <div className="w-full max-w-md bg-white border-2 border-gray-900 rounded-md p-5 shadow-[5px_5px_0px_#09090b] mb-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider py-1 px-3 border-b-2 border-l-2 border-gray-900 font-mono">
          55% OFF
        </div>

        <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-sm border border-emerald-300 mb-3">
          Condição Especial de Lançamento
        </span>

        <h3 className="text-xl md:text-2xl font-black text-gray-950 mb-1">
          55% de <span className="text-emerald-600">DESCONTO</span>
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          para os próximos 50 alunos que entrarem agora
        </p>

        <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded-sm border border-gray-200 mb-4 leading-relaxed">
          Isso aqui não é gatilho mental, olhe no link da minha bio e veja que o treinamento tem valor de{' '}
          <span className="line-through font-semibold text-gray-500">R$ 497,00</span>.
        </p>

        {/* Price Display */}
        <div className="mb-4">
          <div className="text-xs font-mono text-gray-400 line-through">De R$ 497,00 por apenas</div>
          <div className="flex items-baseline justify-center gap-1 mt-1">
            <span className="text-sm font-bold text-gray-700">12x de</span>
            <span className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight font-mono">
              R$ 20,68
            </span>
          </div>
          <div className="text-xs font-bold text-emerald-700 mt-1 font-mono">
            ou R$ 197,00 à vista no PIX ou Cartão
          </div>
        </div>

        {/* Urgency Progress */}
        <div className="w-full bg-gray-200 h-2 mb-2">
          <div className="bg-red-600 h-full w-[86%]" />
        </div>
        <p className="text-[11px] font-mono text-red-600 font-bold mb-4">
          Restam apenas 7 vagas com este desconto exclusivo!
        </p>

        {/* Secondary CTA Button */}
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-md font-black text-base text-white bg-emerald-600 hover:bg-emerald-700 border-2 border-gray-950 shadow-[4px_4px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#09090b] transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Garantir com desconto</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Selos de Confiança no Box de Preço */}
        <div className="mt-3.5 grid grid-cols-2 gap-2 bg-gray-50 p-2 rounded-sm border border-gray-300">
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-gray-200 rounded-sm text-left">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-900 leading-tight">Compra Segura</span>
              <span className="text-[8px] text-gray-500 font-mono">Privacidade 100%</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-gray-200 rounded-sm text-left">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-900 leading-tight">Pagamento Criptografado</span>
              <span className="text-[8px] text-gray-500 font-mono">SSL 256 bits</span>
            </div>
          </div>
        </div>

        {/* Guarantee Info */}
        <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-700 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Garantia incondicional de 7 dias ou 100% de volta</span>
        </div>
      </div>

      {/* Accordion FAQ Component */}
      <FAQ />

      {/* WhatsApp Doubts Section */}
      <div className="w-full max-w-md bg-amber-50/90 border-2 border-gray-900 rounded-md p-4 shadow-[3px_3px_0px_#09090b] mb-6 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-950 font-black text-sm mb-1">
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Ficou com alguma dúvida?</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">
          Converse diretamente comigo no WhatsApp para tirar qualquer dúvida antes de garantir sua vaga.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md font-black text-xs text-gray-950 bg-emerald-400 hover:bg-emerald-300 border-2 border-gray-950 shadow-[2px_2px_0px_#09090b] transition-all cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chamar no WhatsApp</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      {/* Payment Methods Footer Info */}
      <div className="w-full max-w-md flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600 font-mono mb-6">
        <div className="flex items-center gap-1">
          <CreditCard className="w-3.5 h-3.5 text-gray-600" />
          <span>Cartão em até 12x</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <span className="font-bold text-emerald-600">PIX</span>
          <span>Aprovação Imediata</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-gray-600" />
          <span>Acesso Imediato</span>
        </div>
      </div>

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t-2 border-gray-900 shadow-[0_-4px_15px_rgba(0,0,0,0.1)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3 px-1">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-tight">
              55% de Desconto
            </span>
            <span className="text-sm font-black text-gray-950 leading-tight font-mono">
              12x de <span className="text-emerald-700">R$ 20,68</span>
            </span>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[210px] py-2.5 px-3 rounded-md font-black text-xs md:text-sm text-white bg-emerald-600 hover:bg-emerald-700 border-2 border-gray-950 shadow-[2px_2px_0px_#09090b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-1"
          >
            <span>Garantir Vaga</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
