import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { StepQuestion } from './components/StepQuestion';
import { StepSolution } from './components/StepSolution';
import { StepPlatform } from './components/StepPlatform';
import { StepTestimonial } from './components/StepTestimonial';
import { StepNiches } from './components/StepNiches';
import { StepCheckout } from './components/StepCheckout';
import { Footer } from './components/Footer';
import { QUESTION_1, QUESTION_2 } from './data/funnelData';
import { extractUtmParams } from './utils/utm';
import { UserResponses } from './types';

const TOTAL_STEPS = 7;

export default function App() {
  // Support URL param for direct testing of any step (e.g. ?step=4 or ?step=video)
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const stepParam = urlParams.get('step');
      if (stepParam === 'video' || stepParam === 'depoimento') return 4;
      if (stepParam === 'checkout') return 6;
      if (stepParam) {
        const parsed = parseInt(stepParam, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < TOTAL_STEPS) return parsed;
      }
    }
    return 0;
  });
  const [userResponses, setUserResponses] = useState<UserResponses>({});
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  // Capture UTM parameters from URL on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = extractUtmParams(window.location.search);
      setUtmParams(params);
    }
  }, []);

  // Scroll to top smoothly when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleQuestion1Select = (_optionId: string, value: string) => {
    setUserResponses((prev) => ({ ...prev, desanimo: value }));
    handleNext();
  };

  const handleQuestion2Select = (_optionId: string, value: string) => {
    setUserResponses((prev) => ({ ...prev, motivo: value }));
    handleNext();
  };

  return (
    <div className="min-h-screen bg-gray-100/60 text-gray-900 flex flex-col items-center justify-start font-sans selection:bg-red-500 selection:text-white">
      {/* Mobile-first centered shell */}
      <div className="w-full max-w-md min-h-screen bg-white shadow-sm sm:shadow-md sm:border-x sm:border-gray-200/80 flex flex-col justify-between">
        {/* Top Progress & Logo Header */}
        <Header
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          onBack={handleBack}
        />

        {/* Main Funnel Step Content */}
        <main className="flex-1 flex flex-col items-center justify-start px-4 py-5 w-full">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <StepQuestion
                key="step_0"
                data={QUESTION_1}
                onSelectOption={handleQuestion1Select}
                iconType="confusion"
              />
            )}

            {currentStep === 1 && (
              <StepQuestion
                key="step_1"
                data={QUESTION_2}
                onSelectOption={handleQuestion2Select}
                iconType="target"
              />
            )}

            {currentStep === 2 && (
              <StepSolution key="step_2" onNext={handleNext} />
            )}

            {currentStep === 3 && (
              <StepPlatform key="step_3" onNext={handleNext} />
            )}

            {currentStep === 4 && (
              <StepTestimonial key="step_4" onNext={handleNext} />
            )}

            {currentStep === 5 && (
              <StepNiches key="step_5" onNext={handleNext} />
            )}

            {currentStep === 6 && (
              <StepCheckout key="step_6" utmParams={utmParams} />
            )}
          </AnimatePresence>
        </main>

        {/* Trust & Legal Footer */}
        <Footer />
      </div>
    </div>
  );
}
