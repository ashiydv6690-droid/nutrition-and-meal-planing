
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmiValue = (w / ((h / 100) * (h / 100))).toFixed(1);
      const bmiNum = parseFloat(bmiValue);
      setBmi(bmiNum);

      if (bmiNum < 18.5) setBmiCategory('Underweight');
      else if (bmiNum < 24.9) setBmiCategory('Normal weight');
      else if (bmiNum < 29.9) setBmiCategory('Overweight');
      else setBmiCategory('Obesity');
    } else {
        setBmi(null);
        setBmiCategory('');
    }
  };

  const getCategoryColor = () => {
      if (!bmiCategory) return 'text-brand-cream';
      switch (bmiCategory) {
          case 'Underweight': return 'text-blue-400';
          case 'Normal weight': return 'text-brand-emerald';
          case 'Overweight': return 'text-yellow-400';
          case 'Obesity': return 'text-red-500';
          default: return 'text-brand-cream';
      }
  }

  return (
    <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-8 md:p-12 shadow-2xl">
      <h3 className="text-3xl font-serif text-center text-brand-gold mb-6">Calculate Your BMI</h3>
      <p className="text-center text-gray-300 mb-8 max-w-md mx-auto">
        Your Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
      </p>
      <form onSubmit={calculateBmi} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-brand-cream mb-2">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 70"
            className="w-full bg-brand-dark/50 border border-brand-gold/30 rounded-lg px-4 py-2 text-brand-cream focus:ring-2 focus:ring-brand-gold focus:outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-brand-cream mb-2">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 175"
            className="w-full bg-brand-dark/50 border border-brand-gold/30 rounded-lg px-4 py-2 text-brand-cream focus:ring-2 focus:ring-brand-gold focus:outline-none transition"
          />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-brand-emerald text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-light-green hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
            Calculate
          </button>
        </div>
      </form>
      {bmi !== null && (
        <div className="mt-8 text-center bg-brand-dark/30 p-6 rounded-lg border border-brand-gold/20">
          <p className="text-lg text-brand-cream">Your BMI is</p>
          <p className="text-5xl font-bold text-brand-gold my-2">{bmi}</p>
          <p className={`text-xl font-semibold ${getCategoryColor()}`}>{bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
