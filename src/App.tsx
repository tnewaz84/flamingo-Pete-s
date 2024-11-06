import React from 'react';
import { VideoSlider } from './components/VideoSlider';
import { ChefSection } from './components/ChefSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <main className="w-full min-h-screen">
      <VideoSlider />
      <ChefSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactForm />
    </main>
  );
}

export default App;