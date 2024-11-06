import React from 'react';
import { Star, Award, Clock } from 'lucide-react';

const achievements = [
  {
    icon: Star,
    title: "10+ Years",
    description: "Of Culinary Excellence"
  },
  {
    icon: Award,
    title: "Master Chef",
    description: "Certified Professional"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Flexible Scheduling"
  }
];

export const ChefSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('http://flamingocateringjax.com/wp-content/uploads/2024/06/personal-chef-catering-near-me-chef-pete.jpg')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Meet Chef Pete
              </h2>
              <div className="h-1 w-20 bg-[#48ef0b]" />
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Bringing over a decade of culinary expertise, Chef Pete creates exquisite dishes using the freshest seasonal ingredients. His passion for cooking and commitment to excellence make every meal a celebration. Experience the difference with a personal chef who cares about every detail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-[#48ef0b] mb-2" />
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm text-center">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <button className="px-8 py-3 bg-[#48ef0b] text-black font-semibold rounded-full hover:bg-[#3bc709] transition-colors duration-300">
              Book a Consultation
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="http://flamingocateringjax.com/wp-content/uploads/2024/06/personal-chef-catering-near-me-chef-pete.jpg"
                alt="Chef Pete"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};