
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../components/icons/SocialIcons';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-dark text-brand-cream min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold">Get in Touch</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-brand-cream/80">
              We'd love to hear from you. Whether you have a question about our plans or feedback for us, feel free to reach out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-gray/50 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif text-brand-emerald mb-6">Send a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-brand-cream mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-brand-dark/50 border border-brand-gold/30 rounded-lg px-4 py-2 text-brand-cream focus:ring-2 focus:ring-brand-gold focus:outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-brand-cream mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-brand-dark/50 border border-brand-gold/30 rounded-lg px-4 py-2 text-brand-cream focus:ring-2 focus:ring-brand-gold focus:outline-none transition" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-brand-cream mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-brand-dark/50 border border-brand-gold/30 rounded-lg px-4 py-2 text-brand-cream focus:ring-2 focus:ring-brand-gold focus:outline-none transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-emerald text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-light-green hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
                  Submit
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-brand-emerald mb-6">Contact Information</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Address:</strong> 123 Wellness Ave, Health City, 90210</p>
                  <p><strong>Email:</strong> contact@elegancenutrition.com</p>
                  <p><strong>Phone:</strong> (123) 456-7890</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-gold mt-8 mb-4">Follow Us</h3>
                 <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition"><FacebookIcon /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition"><TwitterIcon /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition"><InstagramIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
