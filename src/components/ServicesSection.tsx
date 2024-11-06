import React from 'react';
import { ChefHat, UtensilsCrossed, Flame } from 'lucide-react';

const services = [
  {
    icon: ChefHat,
    title: "Private Chef",
    description: "Elevate your dining experience with personalized gourmet meals prepared in the comfort of your home.",
    color: "#48ef0b",
    link: "/private-chef"
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Service",
    description: "Exceptional catering solutions for events of any size, from intimate gatherings to grand celebrations.",
    color: "#f64e6e",
    link: "/catering"
  },
  {
    icon: Flame,
    title: "Hot Sauce",
    description: "Discover our signature collection of artisanal hot sauces, crafted to ignite your culinary adventures.",
    color: "white",
    link: "/hot-sauce"
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                className="relative group block transform transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform rotate-1 rounded-2xl transition-transform group-hover:rotate-2" />
                <div className="relative p-8 rounded-2xl bg-gray-800 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="p-4 rounded-full mb-6 transform transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: `2px solid ${service.color}`
                      }}
                    >
                      <Icon 
                        size={32} 
                        style={{ color: service.color }}
                        className="transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <div 
                      className="mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-24"
                      style={{ backgroundColor: service.color }}
                    />
                    <span 
                      className="mt-4 inline-block text-sm font-semibold transition-colors duration-300"
                      style={{ color: service.color }}
                    >
                      Learn More →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};