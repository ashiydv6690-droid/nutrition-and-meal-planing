
import React, { useState } from 'react';
import { MEAL_PLANS_DATA } from '../constants';
import { Meal } from '../types';

const MealCard: React.FC<{ meal: Meal }> = ({ meal }) => (
  <div className="flex justify-between items-center p-4 bg-brand-dark rounded-lg border border-brand-gold/10">
    <p className="text-brand-cream">{meal.name}</p>
    <p className="font-semibold text-brand-gold">{meal.calories} kcal</p>
  </div>
);

const MealPlansPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState(MEAL_PLANS_DATA[0].day);
  const activePlan = MEAL_PLANS_DATA.find(plan => plan.day === activeDay);

  const totalCalories = activePlan ? 
    Object.values(activePlan.meals).flat().reduce((acc, meal) => acc + meal.calories, 0) : 0;

  return (
    <div className="pt-24 bg-brand-dark text-brand-cream min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold">Weekly Meal Planner</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-brand-cream/80">
              Explore a full week of balanced and delicious meals designed for optimal health.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 border-b border-brand-gold/20 pb-4">
            {MEAL_PLANS_DATA.map(plan => (
              <button
                key={plan.day}
                onClick={() => setActiveDay(plan.day)}
                className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors duration-300 ${
                  activeDay === plan.day 
                    ? 'bg-brand-emerald text-brand-dark' 
                    : 'bg-brand-gray text-brand-cream hover:bg-brand-gold hover:text-brand-dark'
                }`}
              >
                {plan.day}
              </button>
            ))}
          </div>

          {activePlan && (
            <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-gold/20">
                    <h2 className="text-3xl font-serif text-brand-emerald">{activePlan.day}'s Plan</h2>
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Total Daily Calories</p>
                        <p className="text-2xl font-bold text-brand-gold">{totalCalories} kcal</p>
                    </div>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-serif text-brand-gold mb-4">Breakfast</h3>
                  <div className="space-y-3">
                    {activePlan.meals.breakfast.map((meal, i) => <MealCard key={i} meal={meal} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-gold mb-4">Lunch</h3>
                  <div className="space-y-3">
                    {activePlan.meals.lunch.map((meal, i) => <MealCard key={i} meal={meal} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-gold mb-4">Dinner</h3>
                  <div className="space-y-3">
                    {activePlan.meals.dinner.map((meal, i) => <MealCard key={i} meal={meal} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-gold mb-4">Snacks</h3>
                  <div className="space-y-3">
                    {activePlan.meals.snacks.map((meal, i) => <MealCard key={i} meal={meal} />)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MealPlansPage;
