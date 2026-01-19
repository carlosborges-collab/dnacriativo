export interface CreativeType {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  neuro: string; // Key neurological feature
  risk: string; // Key vulnerability
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
