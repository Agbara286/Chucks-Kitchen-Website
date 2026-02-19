import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { Utensils, Truck, ShoppingBag, ArrowUp } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row w-full flex-grow">
        
        {/* LEFT SIDE: Image  */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative overflow-hidden">
          <img 
            src="/assets/trueminds_innovations/Rectangle-1.png" 
            alt="Hero" 
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between px-8 py-10 md:px-16 lg:px-20 bg-white">
          
          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <h1 className="text-2xl font-serif italic text-orange-600 font-bold">
              Chuks Kitchen
            </h1>
            <button 
              onClick={() => navigate('/signin')}
              className="px-6 py-2 border border-blue-400 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              Sign In
            </button>
          </header>

          {/* Main Text */}
          <main className="flex-grow">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Authentic Taste of Nigeria
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Experience homemade flavors delivered fresh to your desk or home. 
              We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Utensils size={20} /></div>
                <span className="font-medium text-gray-700">Freshly Prepared</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><ShoppingBag size={20} /></div>
                <span className="font-medium text-gray-700">Support Local Business</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Truck size={20} /></div>
                <span className="font-medium text-gray-700">Fast & Reliable Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 max-w-md">
              
              {/* EXPLORE PAGE */}
              <button 
                onClick={() => navigate('/explore')} 
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition shadow-md cursor-pointer"
              >
                Start Your Order
              </button>
              
              {/* ABOUT LINK */}
              <a 
                href="#" 
                className="w-full py-4 bg-white border-2 border-blue-400 text-blue-500 font-bold text-lg rounded-xl hover:bg-blue-50 transition text-center block cursor-pointer"
              >
                Learn More About Us
              </a>
            </div>
          </main>
        </div>
      </div>

      {/* ---FOOTER --- */}
      <footer className="w-full bg-[#5C4033] text-white pt-16 pb-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif italic text-orange-400">Chuks Kitchen</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
            <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-white/10">
              © 2024 UI Media. All rights reserved.
            </p>
          </div>

          {/* Quick Links  */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-orange-400 transition">Explore</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-orange-400 transition">My Order</Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-orange-400 transition">Account</Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+234 811 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Follow Us</h4>
            <ul className="space-y-2 text-blue-300 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-end mt-12">
          <button 
            onClick={scrollToTop}
            className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition shadow-lg"
          >
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>
      </footer>

    </div>
  );
};

export default WelcomePage;