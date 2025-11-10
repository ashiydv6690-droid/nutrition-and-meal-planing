
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-dark text-brand-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-gray">
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url('https://picsum.photos/seed/aboutbg/1920/1080')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold">Our Philosophy</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-brand-cream/80">
            We believe that true wellness comes from a harmonious balance of mindful eating, joyful movement, and self-compassion.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif text-brand-emerald mb-4">Our Mission</h2>
              <p className="mb-4 text-gray-300">
                Our mission is to empower individuals to reclaim their health through personalized, science-backed nutrition. We aim to demystify healthy eating, making it accessible, enjoyable, and sustainable for everyone. We're not about restrictive diets; we're about building a positive, lifelong relationship with food.
              </p>
              <p className="text-gray-300">
                By combining cutting-edge nutritional science with culinary creativity, we craft meal plans that not only meet your specific goals but also delight your taste buds.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src="https://picsum.photos/seed/mission/800/600" alt="Team discussing nutrition" className="rounded-2xl shadow-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <img src="https://picsum.photos/seed/approach/800/600" alt="Fresh ingredients" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-emerald mb-4">Our Approach to Nutrition</h2>
              <p className="mb-4 text-gray-300">
                We take a holistic and personalized approach. We understand that every body is unique, with different needs, preferences, and goals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><span className="font-semibold text-brand-gold">Personalization First:</span> Plans are tailored to your BMI, activity level, and dietary preferences.</li>
                <li><span className="font-semibold text-brand-gold">Whole Foods Focus:</span> We prioritize unprocessed, nutrient-dense ingredients.</li>
                <li><span className="font-semibold text-brand-gold">Balance, Not Restriction:</span> Enjoy all food groups in moderation for sustainable results.</li>
                <li><span className="font-semibold text-brand-gold">Education & Support:</span> We provide the knowledge and tools you need to succeed independently.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Living Tips */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-gold text-center mb-12">Healthy Living Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark p-8 rounded-xl border border-brand-gold/20">
              <h3 className="font-serif text-xl text-brand-emerald mb-3">Stay Hydrated</h3>
              <p className="text-gray-400">Drink at least 8 glasses of water a day. Hydration is key for energy, digestion, and skin health.</p>
            </div>
            <div className="bg-brand-dark p-8 rounded-xl border border-brand-gold/20">
              <h3 className="font-serif text-xl text-brand-emerald mb-3">Mindful Eating</h3>
              <p className="text-gray-400">Pay attention to your food. Savor each bite, eat slowly, and listen to your body's hunger and fullness cues.</p>
            </div>
            <div className="bg-brand-dark p-8 rounded-xl border border-brand-gold/20">
              <h3 className="font-serif text-xl text-brand-emerald mb-3">Consistent Movement</h3>
              <p className="text-gray-400">Find an activity you love and aim for at least 30 minutes of moderate exercise most days of the week.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
