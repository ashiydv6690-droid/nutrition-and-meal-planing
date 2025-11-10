
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { NUTRITION_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-gray/80 backdrop-blur-sm p-3 border border-brand-gold/30 rounded-lg text-brand-cream">
        <p className="label font-bold">{`${label} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const NutritionCharts: React.FC = () => {
  const { macros, vitamins } = NUTRITION_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl">
        <h3 className="text-2xl font-serif text-brand-gold mb-6 text-center">Macronutrient Distribution</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={macros} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                {macros.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#F5F5DC' }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-brand-gray/50 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl">
        <h3 className="text-2xl font-serif text-brand-gold mb-6 text-center">Essential Vitamin Profile</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vitamins}>
                <PolarGrid stroke="#F5F5DC30"/>
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#F5F5DC' }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="Intake" dataKey="A" stroke="#50C878" fill="#50C878" fillOpacity={0.6} />
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NutritionCharts;
