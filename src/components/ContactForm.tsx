import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Mail, Phone, User } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  guests: string;
  budget: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Something Special
          </h2>
          <div className="h-1 w-20 bg-[#48ef0b] mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Tell us about your event, and we'll help make it unforgettable
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#48ef0b] transition-colors" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#48ef0b] transition-colors"
              />
            </div>

            <div className="relative group">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#48ef0b] transition-colors" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#48ef0b] transition-colors"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#48ef0b] transition-colors" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#48ef0b] transition-colors"
              />
            </div>

            <div className="relative group">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#48ef0b] transition-colors" />
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#48ef0b] transition-colors"
              />
            </div>

            <div className="relative group">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#48ef0b] transition-colors" />
              <input
                type="number"
                name="guests"
                required
                min="1"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Number of Guests"
                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#48ef0b] transition-colors"
              />
            </div>

            <div className="relative group">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#48ef0b] transition-colors" />
              <input
                type="text"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                placeholder="Your Budget"
                className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#48ef0b] transition-colors"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[#48ef0b] text-black font-semibold py-4 rounded-lg hover:bg-[#3bc709] transform hover:scale-[1.02] transition-all duration-300"
            >
              Get Your Custom Quote
            </button>
          </div>

          <p className="text-gray-400 text-sm text-center mt-6">
            We'll get back to you within 24 hours
          </p>
        </form>
      </div>
    </section>
  );
};