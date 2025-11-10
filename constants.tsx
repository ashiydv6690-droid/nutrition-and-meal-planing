
import { DailyPlan, FeaturedPlan, Testimonial } from './types';

export const FEATURED_PLANS: FeaturedPlan[] = [
  {
    title: 'Weight Loss',
    description: 'A balanced plan to help you shed pounds without sacrificing flavor.',
    image: 'https://picsum.photos/seed/weightloss/600/800',
  },
  {
    title: 'Muscle Gain',
    description: 'Protein-rich meals designed to fuel your workouts and build lean mass.',
    image: 'https://picsum.photos/seed/musclegain/600/800',
  },
  {
    title: 'Detox & Cleanse',
    description: 'A refreshing plan to reset your body with nutrient-dense, clean foods.',
    image: 'https://picsum.photos/seed/detox/600/800',
  },
  {
    title: 'Vegan Vitality',
    description: 'A vibrant, plant-based plan packed with all the essential nutrients.',
    image: 'https://picsum.photos/seed/vegan/600/800',
  }
];

export const MEAL_PLANS_DATA: DailyPlan[] = [
  {
    day: 'Monday',
    meals: {
      breakfast: [{ name: 'Oatmeal with Berries', calories: 350 }],
      lunch: [{ name: 'Grilled Chicken Salad', calories: 450 }],
      dinner: [{ name: 'Salmon with Quinoa', calories: 550 }],
      snacks: [{ name: 'Apple with Peanut Butter', calories: 200 }],
    },
  },
  {
    day: 'Tuesday',
    meals: {
      breakfast: [{ name: 'Scrambled Eggs with Spinach', calories: 300 }],
      lunch: [{ name: 'Lentil Soup', calories: 400 }],
      dinner: [{ name: 'Turkey Meatballs with Zucchini Noodles', calories: 500 }],
      snacks: [{ name: 'Greek Yogurt', calories: 150 }],
    },
  },
  {
    day: 'Wednesday',
    meals: {
      breakfast: [{ name: 'Smoothie with Protein Powder', calories: 400 }],
      lunch: [{ name: 'Tuna Salad Sandwich on Whole Wheat', calories: 420 }],
      dinner: [{ name: 'Beef Stir-fry with Brown Rice', calories: 600 }],
      snacks: [{ name: 'Handful of Almonds', calories: 180 }],
    },
  },
    {
    day: 'Thursday',
    meals: {
      breakfast: [{ name: 'Greek Yogurt Parfait', calories: 320 }],
      lunch: [{ name: 'Quinoa Bowl with Roasted Vegetables', calories: 480 }],
      dinner: [{ name: 'Baked Cod with Asparagus', calories: 530 }],
      snacks: [{ name: 'Pear and Cheese', calories: 220 }],
    },
  },
  {
    day: 'Friday',
    meals: {
      breakfast: [{ name: 'Whole Wheat Pancakes', calories: 380 }],
      lunch: [{ name: 'Leftover Beef Stir-fry', calories: 600 }],
      dinner: [{ name: 'Chicken Fajitas', calories: 550 }],
      snacks: [{ name: 'Rice Cakes with Avocado', calories: 190 }],
    },
  },
    {
    day: 'Saturday',
    meals: {
      breakfast: [{ name: 'Avocado Toast with Egg', calories: 350 }],
      lunch: [{ name: 'Caprese Salad', calories: 300 }],
      dinner: [{ name: 'Homemade Pizza on Whole Wheat Crust', calories: 650 }],
      snacks: [{ name: 'Dark Chocolate Square', calories: 100 }],
    },
  },
  {
    day: 'Sunday',
    meals: {
      breakfast: [{ name: 'Vegetable Omelette', calories: 320 }],
      lunch: [{ name: 'Roast Chicken with Root Vegetables', calories: 580 }],
      dinner: [{ name: 'Pasta with Pesto and Cherry Tomatoes', calories: 520 }],
      snacks: [{ name: 'Grapes', calories: 120 }],
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "This plan completely changed my relationship with food. I feel more energetic and confident than ever before.",
        name: "Jessica L.",
        title: "Wellness Enthusiast",
    },
    {
        quote: "The variety and flavor of the meals are incredible. I never feel like I'm on a diet. Highly recommended!",
        name: "Michael B.",
        title: "Fitness Professional",
    },
    {
        quote: "I've tried so many programs, but this is the first one that's truly sustainable. The results speak for themselves.",
        name: "Sarah K.",
        title: "Busy Parent",
    }
];

export const NUTRITION_DATA = {
  macros: [
    { name: 'Protein', value: 30, fill: '#50C878' },
    { name: 'Carbs', value: 45, fill: '#D4AF37' },
    { name: 'Fats', value: 25, fill: '#A1E1B9' },
  ],
  vitamins: [
    { subject: 'Vitamin A', A: 120, fullMark: 150 },
    { subject: 'Vitamin C', A: 98, fullMark: 150 },
    { subject: 'Vitamin D', A: 86, fullMark: 150 },
    { subject: 'Iron', A: 99, fullMark: 150 },
    { subject: 'Calcium', A: 85, fullMark: 150 },
    { subject: 'Magnesium', A: 65, fullMark: 150 },
  ],
};
