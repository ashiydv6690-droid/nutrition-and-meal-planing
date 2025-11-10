
import React from 'react';
import NutritionCharts from '../components/NutritionChart';

const NutrientTable: React.FC = () => {
    const nutrients = [
        { name: 'Vitamin A', amount: '900mcg', dailyValue: '100%' },
        { name: 'Vitamin C', amount: '90mg', dailyValue: '100%' },
        { name: 'Calcium', amount: '1300mg', dailyValue: '100%' },
        { name: 'Iron', amount: '18mg', dailyValue: '100%' },
        { name: 'Potassium', amount: '4700mg', dailyValue: '100%' },
        { name: 'Fiber', amount: '28g', dailyValue: '100%' },
    ];
    return (
        <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-8 shadow-2xl mt-12">
            <h3 className="text-2xl font-serif text-brand-gold mb-6 text-center">Daily Value Reference</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-gold/20">
                            <th className="p-4 font-semibold text-brand-cream">Nutrient</th>
                            <th className="p-4 font-semibold text-brand-cream">Recommended Amount</th>
                            <th className="p-4 font-semibold text-brand-cream">% Daily Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrients.map((n, i) => (
                            <tr key={i} className="border-b border-brand-gold/10">
                                <td className="p-4 text-brand-emerald font-medium">{n.name}</td>
                                <td className="p-4 text-gray-300">{n.amount}</td>
                                <td className="p-4 text-gray-300">{n.dailyValue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


const NutritionFactsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-dark text-brand-cream min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold">Nutrition Insights</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-brand-cream/80">
              Visualize your nutritional intake and understand the building blocks of a healthy diet with our detailed charts.
            </p>
          </div>
          
          <NutritionCharts />
          <NutrientTable />

        </div>
      </section>
    </div>
  );
};

export default NutritionFactsPage;
