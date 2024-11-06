import React from 'react';
import { Utensils, Leaf, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: "Personalized Menus",
    description: "Tailored to your preferences and dietary needs"
  },
  {
    icon: Leaf,
    title: "Fresh, Seasonal Ingredients",
    description: "Sourced locally for superior taste and sustainability"
  },
  {
    icon: Clock,
    title: "Effortless Entertaining",
    description: "We handle everything from cooking to cleanup"
  },
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Gourmet dining at competitive prices"
  }
];

const pricingTiers = [
  {
    name: "Essential Experience",
    price: 55,
    description: "Perfect for intimate gatherings",
    features: [
      "3-course gourmet meal",
      "Professional service",
      "Basic table setup",
      "Cleanup included"
    ]
  },
  {
    name: "Premium Dining",
    price: 75,
    description: "Elevated dining experience",
    features: [
      "4-course gourmet meal",
      "Wine pairing suggestions",
      "Enhanced table styling",
      "Extended service hours"
    ]
  },
  {
    name: "Luxury Feast",
    price: 95,
    description: "Ultimate culinary journey",
    features: [
      "5-course tasting menu",
      "Custom menu planning",
      "Premium table decoration",
      "Complete event coordination"
    ]
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Starting at Just $55 per Person
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Luxury dining doesn't have to break the bank. Flamingo Pete's offers affordable catering options without compromising on quality. Create lasting memories with our customized menus designed to fit your taste and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#48ef0b]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#48ef0b]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#48ef0b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-[#48ef0b]">${tier.price}</span>
                  <span className="text-gray-400 ml-2">per person</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#48ef0b] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-[#48ef0b] text-black font-semibold hover:bg-[#3bc709] transition-colors duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};