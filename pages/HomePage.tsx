
import React, { useState } from 'react';
import { FEATURED_PLANS, TESTIMONIALS } from '../constants';
import { FeaturedPlan, Testimonial } from '../types';
import CalorieIcon from '../components/icons/CalorieIcon';
import ProteinIcon from '../components/icons/ProteinIcon';
import VitaminIcon from '../components/icons/VitaminIcon';
import WaterIcon from '../components/icons/WaterIcon';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import BMICalculator from '../components/BMICalculator';

const HeroSection: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <img src="https://picsum.photos/seed/gourmet/1920/1080" alt="Healthy gourmet food" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="relative z-20 px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
        Personalized Nutrition & Meal Planning <br /> for a <span className="text-brand-emerald">Healthier You</span>.
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-brand-cream/90">
        Discover bespoke meal plans crafted by experts to help you achieve your wellness goals with elegance and ease.
      </p>
      <button className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-cream transition-all duration-300 transform hover:scale-105 shadow-lg">
        Start My Plan
      </button>
    </div>
  </section>
);

const BenefitsSection: React.FC = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-4">Embrace a Balanced Lifestyle</h2>
      <p className="max-w-3xl mx-auto text-gray-300 mb-12">
        Our approach to nutrition is about creating sustainable habits that nourish your body and mind, making healthy living a seamless part of your life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-brand-gray p-8 rounded-2xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-bold font-serif text-brand-emerald mb-2">Effortless Planning</h3>
            <p className="text-gray-400">Save time and eliminate guesswork with delicious, easy-to-prepare meals planned for you.</p>
        </div>
        <div className="bg-brand-gray p-8 rounded-2xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-bold font-serif text-brand-emerald mb-2">Achieve Your Goals</h3>
            <p className="text-gray-400">Whether it's weight loss, muscle gain, or enhanced energy, our plans are tailored to you.</p>
        </div>
        <div className="bg-brand-gray p-8 rounded-2xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-bold font-serif text-brand-emerald mb-2">Holistic Wellness</h3>
            <p className="text-gray-400">Good nutrition is the foundation for mental clarity, physical strength, and overall vitality.</p>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedPlansCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? FEATURED_PLANS.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === FEATURED_PLANS.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-gold text-center mb-12">Featured Meal Plans</h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                            {FEATURED_PLANS.map((plan: FeaturedPlan, index) => (
                                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
                                    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                                        <img src={plan.image} alt={plan.title} className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-8 text-white">
                                            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">{plan.title}</h3>
                                            <p className="text-brand-cream/90">{plan.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     {/* Arrows - simplified for this example, a real carousel would handle edge cases better */}
                    <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                        <ChevronLeftIcon />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};


const NutritionInsightsSection: React.FC = () => {
  const insights = [
    { title: 'Calories', description: 'Understand your energy balance for effective weight management.', Icon: CalorieIcon, color: 'text-brand-gold' },
    { title: 'Protein', description: 'Essential for muscle repair, growth, and overall body function.', Icon: ProteinIcon, color: 'text-brand-emerald' },
    { title: 'Vitamins', description: 'Unlock a spectrum of micronutrients vital for immunity and health.', Icon: VitaminIcon, color: 'text-brand-light-green' },
    { title: 'Hydration', description: 'Learn the importance of water for metabolism and peak performance.', Icon: WaterIcon, color: 'text-blue-400' },
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-gold text-center mb-12">Data-Driven Nutrition Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((item, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-brand-gold/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className={`p-4 bg-brand-dark rounded-full mb-4 ${item.color}`}>
                <item.Icon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-cream mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection: React.FC = () => (
    <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-gold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial: Testimonial, index) => (
                    <div key={index} className="bg-black/20 p-8 rounded-2xl border border-brand-gold/20 backdrop-blur-sm shadow-lg flex flex-col">
                        <p className="text-brand-cream/90 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                        <div>
                            <p className="font-bold text-brand-gold">{testimonial.name}</p>
                            <p className="text-sm text-brand-emerald">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedPlansCarousel />
      <NutritionInsightsSection />
      <TestimonialSection />
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
            <BMICalculator />
        </div>
      </section>
    </>
  );
};

export default HomePage;
