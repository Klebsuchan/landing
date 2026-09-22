export interface FunnelOption {
  id: string;
  value: string;
  label: string;
  score?: number;
}

export interface FunnelStepData {
  id: string;
  stepIndex: number;
  title: string;
  category: 'question' | 'content' | 'testimonial' | 'niche' | 'checkout';
}

export interface UserResponses {
  desanimo?: string;
  motivo?: string;
  nicheInterest?: string;
}

export interface UtmParams {
  [key: string]: string;
}
