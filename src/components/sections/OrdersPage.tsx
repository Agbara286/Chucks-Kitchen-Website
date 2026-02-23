import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OrderSummaryPage: React.FC = () => {
  const navigate = useNavigate();

  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  return (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col font-sans">
      
      {/*  NAVBAR*/}
      <nav className="bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h1 
          className="text-2xl font-serif italic text-orange-500 font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Chuks Kitchen
        </h1>
        <div className="hidden md:flex space-x-12 text-sm font-medium text-gray-700">
          <button onClick={() => navigate('/')} className="hover:text-orange-500 transition">Home</button>
          <button onClick={() => navigate('/explore')} className="hover:text-orange-500 transition">Explore</button>
          <button onClick={() => navigate('/orders')} className="text-orange-500 font-bold">My Orders</button>
          <button onClick={() => navigate('/account')}  className="hover:text-orange-500 transition">Account</button>
        </div>
        <button 
        onClick={() => navigate('/signin')}
        className="bg-orange-500 text-white px-8 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition shadow-sm text-sm">
          Login
        </button>
      </nav>

      {/*MAIN CONTENT */}
      <main className="flex-grow flex justify-center py-12 px-4">
        <div className="bg-white w-full max-w-2xl p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 h-fit">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>

          {/* Promo Code Section */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-900 mb-3">Add a Promo Code</label>
            <div className="flex gap-3">
             <input 
              type="text" 
              placeholder="Enter Code here" 
              className="flex-grow w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
               />
                <button className="flex-shrink-0 bg-orange-500 text-white px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
                   Apply
                     </button>
                  </div>
                </div>

          {/* Cost Breakdown */}
          <div className="space-y-4 mb-6 border-b border-gray-100 pb-6 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-gray-800">₦9,200</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-bold text-gray-800">₦500</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span className="font-bold text-gray-800">₦200</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-bold text-gray-800">₦0</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">₦9,900</span>
          </div>

          {/* Delivery */}
          <div className="flex bg-gray-200 p-1 rounded-lg mb-8">
            <button 
              onClick={() => setDeliveryType('delivery')}
              className={`flex-1 py-3 text-center font-medium rounded-md transition-all ${
                deliveryType === 'delivery' 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Delivery
            </button>
            <button 
              onClick={() => setDeliveryType('pickup')}
              className={`flex-1 py-3 text-center font-medium rounded-md transition-all ${
                deliveryType === 'pickup' 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Pick up
            </button>
          </div>

          {/* Special Instructions */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-900 mb-3">Special Instructions for Restaurant</label>
            <textarea 
              rows={4}
              placeholder="E.g no onion, food is too spicy, food is too hot..."
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-gray-700"
            ></textarea>
          </div>

         
          {/* Checkout Button */}
                    <button 
                    onClick={() => navigate('/account')}   
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-md"
                >
               Proceed to Checkout
                </button>

        </div>
      </main>

      {/* 3. FOOTER  */}
     <footer className="w-full bg-[#5C4033] text-white pt-16 pb-8 px-8 md:px-16 lg:px-24 mt-auto">
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

    {/* Quick Links */}
    <div className="space-y-4">
      <h4 className="font-bold text-lg">Quick Links</h4>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
        <li><Link to="/explore" className="hover:text-orange-400 transition">Explore</Link></li>
        <li><Link to="/orders" className="hover:text-orange-400 transition">My Order</Link></li>
        <li><Link to="/account" className="hover:text-orange-400 transition">Account</Link></li>
        <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
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
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition shadow-lg"
    >
      <ArrowUp size={24} className="text-white" />
    </button>
  </div>
</footer>
    </div>
  );
};

export default OrderSummaryPage;