
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray border-t border-brand-gold/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-brand-gold">
              Elegance<span className="text-brand-emerald">Nutrition</span>
            </h3>
            <p className="mt-2 text-sm text-gray-400">Your journey to a healthier, more balanced life starts here.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-cream">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-gold transition">About Us</Link></li>
              <li><Link to="/meal-plans" className="text-gray-400 hover:text-brand-gold transition">Meal Plans</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-gold transition">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-brand-gold transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-cream">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>contact@elegancenutrition.com</li>
                <li>123 Wellness Ave, Health City</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-cream">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><InstagramIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-gold/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EleganceNutrition. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
