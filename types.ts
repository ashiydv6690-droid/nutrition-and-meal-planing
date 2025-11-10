
export interface Meal {
  name: string;
  calories: number;
}

export interface DailyPlan {
  day: string;
  meals: {
    breakfast: Meal[];
    lunch: Meal[];
    dinner: Meal[];
    snacks: Meal[];
  };
}

export interface FeaturedPlan {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
