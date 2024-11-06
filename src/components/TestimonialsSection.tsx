import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Quote className="w-16 h-16 text-[#48ef0b] opacity-50" />
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Personalized Culinary Excellence
            </h2>
            <div className="h-1 w-20 bg-[#48ef0b]" />
            <p className="text-gray-300 text-lg leading-relaxed">
              At Flamingo Pete's, we believe that every event is unique and deserves a personalized touch. Our chefs work closely with you to design a menu that reflects your tastes and dietary preferences, ensuring a customized culinary experience. Whether you're celebrating a birthday, anniversary, or hosting a themed dinner party, we can create a menu that fits the occasion perfectly, delighting you and your guests.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-2 bg-gradient-to-r from-[#48ef0b] to-emerald-600 opacity-30 blur-lg" />
            </div>
            <div className="relative bg-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#48ef0b] text-[#48ef0b]" />
                  ))}
                </div>
                <span className="ml-2 text-white font-semibold">Google Review</span>
              </div>
              
              <blockquote className="mb-6">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "Having Pete cook for us at St. Augustine Beach was an incredible experience. His culinary skills are exceptional, and his family is wonderful. We trust him completely and can't wait to have him back for another beachside feast."
                </p>
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#48ef0b] to-emerald-600 flex items-center justify-center text-black font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Sarah M.</div>
                  <div className="text-gray-400 text-sm">Verified Customer</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 text-[#48ef0b]/10">
                <Quote className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};